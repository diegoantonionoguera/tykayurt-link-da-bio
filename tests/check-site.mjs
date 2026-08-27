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
  "images/morango-hero.webp",
  "images/amora-hero.webp",
  "images/abacaxi-hero.webp",
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
  "Produção fresca a cada 48h",
  "500 ml",
  "R$ 20",
  "554191731323",
  "tykayurt_oficial",
  "styles.css",
  "script.js",
  "utm_source=instagram&amp;utm_medium=bio&amp;utm_campaign=link_bio",
  "Oi! Vim do link da bio, quero pedir um TykaYurt",
  "https://tykayurt-link-da-bio.vercel.app/",
  'type="application/ld+json"',
  '"@type": "Organization"',
  "TykaYurt — iogurte artesanal em Curitiba",
];

for (const value of requiredContent) {
  if (!combined.includes(value)) throw new Error(`Conteúdo obrigatório ausente: ${value}`);
}

if (html.indexOf('data-track="whatsapp"') > html.indexOf('data-track="instagram"')) {
  throw new Error("O pedido pelo WhatsApp deve aparecer antes do Instagram.");
}

console.log("Verificações do link da bio aprovadas.");
