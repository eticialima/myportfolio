#!/usr/bin/env sh
set -eu

config=/opt/water-ready/Caddyfile
if grep -q '^leticia.dev {' "$config"; then
  exit 0
fi

backup="$config.before-leticia-portfolio-$(date +%Y%m%d%H%M%S)"
cp "$config" "$backup"
cat >> "$config" <<'EOF'

www.leticia.dev {
    redir https://leticia.dev{uri} permanent
}

leticia.dev {
    encode zstd gzip
    reverse_proxy leticia-portfolio-web:80
}
EOF

if ! docker exec water-ready-caddy-1 caddy validate --config /etc/caddy/Caddyfile; then
  cp "$backup" "$config"
  exit 1
fi

docker exec water-ready-caddy-1 caddy reload --config /etc/caddy/Caddyfile
