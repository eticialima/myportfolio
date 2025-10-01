# Portfolio Letícia Lima 🚀

Portfolio pessoal moderno e responsivo desenvolvido com **Angular 20**, **SCSS** e **Standalone Components**.

## ✨ Características

- ⚡ **Angular 20** com Zoneless Change Detection
- 🎨 **Design Moderno** com animações suaves
- 📱 **Totalmente Responsivo** para todos os dispositivos
- 🎯 **Lazy Loading** de rotas para melhor performance
- 🔧 **Standalone Components** (sem NgModules)
- 💅 **SCSS** com variáveis CSS customizadas
- 🌐 **Navegação** com menu mobile responsivo

## 📁 Estrutura do Projeto

```
src/app/
├── components/          # Componentes reutilizáveis
│   ├── top-menu/       # Menu de navegação
│   ├── footer/         # Rodapé
│   └── cards/          # Cards de projetos
├── pages/              # Páginas da aplicação
│   ├── home/          # Página inicial
│   ├── about/         # Sobre mim
│   ├── projects/      # Portfólio de projetos
│   ├── courses/       # Cursos e certificações
│   └── contact/       # Formulário de contato
└── services/          # Serviços (API, helpers)
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 22+ instalado
- Angular CLI 20+

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

Acesse `http://localhost:4200/` no navegador.

## 📦 Build para Produção

```bash
# Build otimizado para produção
npm run build:prod
```

Os arquivos compilados estarão em `dist/`.

## 🎨 Personalização

### Cores e Tema
Edite as variáveis CSS em `src/styles.scss`:

```scss
:root {
  --bg-primary: #ffffff;
  --text-primary: #3b3c36;
  --accent-color: #3b3c36;
  // ... outras variáveis
}
```

### Conteúdo
- **Informações pessoais**: Edite os componentes em `src/app/pages/`
- **Projetos**: Atualize o array em `src/app/pages/projects/projects.ts`
- **Cursos**: Modifique `src/app/pages/courses/courses.ts`
- **Redes sociais**: Ajuste os links em `src/app/components/footer/footer.html`

## 🛠️ Tecnologias Utilizadas

- **Angular 20** - Framework principal
- **TypeScript 5.9** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **Signals** - Gerenciamento de estado reativo
- **Standalone Components** - Arquitetura moderna do Angular
- **Lazy Loading** - Carregamento sob demanda de rotas

## 📝 Scripts Disponíveis

```bash
npm start          # Inicia servidor de desenvolvimento
npm run build      # Build de desenvolvimento
npm run build:prod # Build de produção otimizado
npm test           # Executa testes unitários
npm run watch      # Build com watch mode
```

## 🚀 Deploy

Este projeto pode ser facilmente deployado em:
- **Vercel** (recomendado)
- **Netlify**
- **Firebase Hosting**
- **GitHub Pages**

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

Desenvolvido com ❤️ por Letícia Lima
