param(
    [string]$SshHost = 'gamigami',
    [string]$ImageRepository = 'eticia/myportfolio'
)

$ErrorActionPreference = 'Stop'
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$version = (git -C $repoRoot rev-parse --short HEAD).Trim()
if ($LASTEXITCODE -ne 0 -or $version -notmatch '^[0-9a-f]+$') { throw 'Não foi possível obter a versão do Git.' }
if ($ImageRepository -notmatch '^[a-z0-9._/-]+$') { throw 'Nome da imagem inválido.' }
if ($SshHost -notmatch '^[a-zA-Z0-9._-]+$') { throw 'Host SSH inválido.' }

$versionedImage = "${ImageRepository}:$version"
$latestImage = "${ImageRepository}:latest"
Push-Location $repoRoot
try {
    docker build -t $versionedImage -t $latestImage .
    if ($LASTEXITCODE -ne 0) { throw 'Falha no build Docker.' }
    docker push $versionedImage
    if ($LASTEXITCODE -ne 0) { throw 'Falha ao enviar a imagem versionada ao Docker Hub.' }
    docker push $latestImage
    if ($LASTEXITCODE -ne 0) { throw 'Falha ao enviar a imagem latest ao Docker Hub.' }

    ssh $SshHost 'mkdir -p /var/projects/leticia-portfolio'
    if ($LASTEXITCODE -ne 0) { throw 'Falha ao preparar a pasta no servidor.' }
    scp (Join-Path $PSScriptRoot 'compose.yml') "${SshHost}:/var/projects/leticia-portfolio/compose.yml"
    if ($LASTEXITCODE -ne 0) { throw 'Falha ao enviar o Compose.' }
    scp (Join-Path $PSScriptRoot 'setup-caddy.sh') "${SshHost}:/var/projects/leticia-portfolio/setup-caddy.sh"
    if ($LASTEXITCODE -ne 0) { throw 'Falha ao enviar a configuração do Caddy.' }

    $tempEnv = Join-Path ([IO.Path]::GetTempPath()) "portfolio-deploy-$version.env"
    try {
        [IO.File]::WriteAllText($tempEnv, "PORTFOLIO_IMAGE=$versionedImage`n")
        scp $tempEnv "${SshHost}:/var/projects/leticia-portfolio/.env"
        if ($LASTEXITCODE -ne 0) { throw 'Falha ao enviar a versão da imagem.' }
    } finally {
        Remove-Item -LiteralPath $tempEnv -ErrorAction SilentlyContinue
    }

    ssh $SshHost 'cd /var/projects/leticia-portfolio && docker compose -f compose.yml pull && docker compose -f compose.yml up -d && sh setup-caddy.sh && docker exec water-ready-caddy-1 wget -q -O /dev/null http://leticia-portfolio-web/'
    if ($LASTEXITCODE -ne 0) { throw 'Falha ao iniciar o site no servidor.' }
    Write-Host "Publicado: $versionedImage"
} finally {
    Pop-Location
}
