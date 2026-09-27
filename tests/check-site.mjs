import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "logo-tykayurt.png",
  "favicon-32.png",
  "apple-touch-icon.png",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "vercel.json",
  "images/morango.svg",
  "images/amora.svg",
  "images/abacaxi.svg",
  "intro/intro.js",
  "intro/intro.css",
  "intro/logo-reveal.mp4",
  "intro/logo-mobile-20260926.mp4",
  "intro/logo-desktop-20260926.mp4",
  "intro/logo.webp",
];

await Promise.all(requiredFiles.map((file) => access(file)));

const [html, css, script] = await Promise.all([
  readFile("index.html", "utf8"),
  readFile("styles.css", "utf8"),
  readFile("script.js", "utf8"),
]);

const combined = `${html}\n${css}\n${script}`;
const forbidden = [
  "Ameixa",
  "250 ml",
  "R$ 12",
  "@runablehq",
  "runable.js",
  "2467269040365486",
  "por isso dura pouco",
  "dura poucos dias de propósito",
];

for (const value of forbidden) {
  if (combined.includes(value)) throw new Error(`Conteúdo antigo encontrado: ${value}`);
}

const requiredContent = [
  "Morango",
  "Amora",
  "Abacaxi",
  "Pêssego",
  "Novidade em breve",
  "500 ml",
  "R$ 20",
  "554191731323",
  "tykayurt_oficial",
  "1840642857099632",
  "styles.css",
  "script.js",
  "utm_source=instagram&amp;utm_medium=bio&amp;utm_campaign=link_bio",
  "Oi! Vim do link da bio, quero pedir um TykaYurt",
  "https://tykayurt-link-da-bio.vercel.app/",
  'type="application/ld+json"',
  '"@type": "Organization"',
  "TykaYurt — iogurte artesanal em Curitiba",
  "Compartilhou,",
  "A cada 2 amigas que você indicar e comprarem, você ganha 1 pote de 250ml grátis.",
  "Oi! Quero participar do Compartilhou, Ganhou e pegar meu código de indicação",
  "https://tykayurt-web.vercel.app/regulamento",
  'data-track="indicacao"',
  'clip-path: inset(0 round 16px)',
  '<meta name="theme-color" content="#fff6f2" />',
];

for (const value of requiredContent) {
  if (!combined.includes(value)) throw new Error(`Conteúdo obrigatório ausente: ${value}`);
}

const forbiddenThemeContent = [
  '@media (prefers-color-scheme: dark)',
  'color-scheme: light dark',
  'media="(prefers-color-scheme: dark)"',
  'content="#212325"',
];

for (const value of forbiddenThemeContent) {
  if (combined.includes(value)) throw new Error(`Tema escuro não deve estar ativo no link da bio: ${value}`);
}

if (html.indexOf('data-track="whatsapp"') > html.indexOf('data-track="instagram"')) {
  throw new Error("O pedido pelo WhatsApp deve aparecer antes do Instagram.");
}

const renderedHtml = html.replace(/<!--[\s\S]*?-->/g, "");
// Changing the asset version makes embedded browsers request fresh styles/scripts.
for (const asset of ["styles.css", "script.js", "./intro/intro.css", "./intro/intro.js"]) {
  const escapedAsset = asset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!new RegExp(`(?:href|src)="${escapedAsset}\\?v=[a-zA-Z0-9-]+"`).test(renderedHtml)) {
    throw new Error(`Asset sem versão de cache: ${asset}`);
  }
}
if (renderedHtml.includes("freshness-badge")) throw new Error("O aviso de produção removido não deve reaparecer.");
if (combined.includes("<<<<<<<") || combined.includes(">>>>>>>")) throw new Error("Conflito de merge não resolvido.");
if (renderedHtml.includes('id="referral-card"') || renderedHtml.includes('data-track="indicacao"')) {
  throw new Error("O programa de indicação deve permanecer oculto até o lançamento.");
}

if (renderedHtml.includes('data-track="site"')) {
  throw new Error("O card Site completo deve permanecer oculto durante a atualização.");
}

if (renderedHtml.includes('class="coming-soon"')) {
  throw new Error("O card Novidade em breve deve permanecer oculto até o lançamento.");
}

const introCss = await readFile("intro/intro.css", "utf8");
const videoRule = introCss.match(/\.brand-intro video\s*\{([^}]+)\}/)?.[1] ?? "";
if (!/object-fit:\s*contain/.test(videoRule) || !/max-width:\s*1920px/.test(videoRule)) {
  throw new Error("A abertura deve preservar o quadro inteiro e limitar a ampliação.");
}
if (!introCss.includes("height: 100dvh") || !introCss.includes("height: 100vh") || !html.includes("viewport-fit=cover")) {
  throw new Error("A abertura deve acompanhar a altura visível com fallback e áreas seguras.");
}

console.log("Verificações do link da bio aprovadas.");

