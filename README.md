# TykaYurt — Link da Bio

Página oficial de link na bio da TykaYurt, iogurte artesanal de Curitiba.

## Estrutura do projeto

- `index.html` — estrutura e conteúdo da página
- `styles.css` — identidade visual, responsividade e estados de interação
- `script.js` — configuração segura do pedido pelo WhatsApp
- `tests/check-site.mjs` — verificações estáticas sem dependências
- `logo-tykayurt.png` — logo usado no cabeçalho
- `images/` — imagens locais dos sabores exibidas nos cards
- `AGENTS.md` — instruções do projeto para Codex/agentes de código
- `package.json` — metadados e comandos para executar localmente

## Como executar

```bash
npm install
npm run dev
```

Para executar as verificações automáticas:

```bash
npm test
```

Depois abra `http://localhost:3000`.

Também é possível abrir `index.html` diretamente no navegador.

## Stack

Projeto estático, sem framework e sem etapa de build:

- HTML5
- CSS puro
- JavaScript puro
- Google Fonts: Anton e Manrope

## Links configurados

- Instagram: `@tykayurt_oficial`
- WhatsApp: `+55 41 9173-1323`
- Site: `https://tykayurt-web.vercel.app/`
- Facebook Marketplace: anúncio oficial configurado no `index.html`

## Entrada principal

Para alterar a estrutura ou o conteúdo, comece por:

```text
/index.html
```

Estilos ficam em `/styles.css` e o link dinâmico do WhatsApp em `/script.js`.

O projeto é mobile-first e foi criado para uso como link na bio do Instagram.
