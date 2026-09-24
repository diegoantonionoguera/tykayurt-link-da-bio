const WHATSAPP_NUMBER = "554191731323";
const WHATSAPP_MESSAGE = "Oi! Vim do link da bio, quero pedir um TykaYurt";
const REFERRAL_MESSAGE =
  "Oi! Quero participar do Compartilhou, Ganhou e pegar meu código de indicação";

const whatsappCard = document.querySelector("#whatsapp-card");
const referralCard = document.querySelector("#referral-card");

if (whatsappCard) {
  whatsappCard.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

document.addEventListener("click", (event) => {
  const card = event.target instanceof Element ? event.target.closest("[data-track]") : null;
  if (!card) return;
  const origin = card.dataset.track;
  if (typeof window.gtag === "function") {
    window.gtag("event", "click_bio_card", {
      card_origem: origin,
      card_destino: card.getAttribute("href") || "",
    });
  }
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "CliqueCardBio", { origem: origin });
    if (origin === "whatsapp") {
      window.fbq("track", "Lead", { content_name: "Link Bio WhatsApp" });
    }
  }
});
if (referralCard) {
  referralCard.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(REFERRAL_MESSAGE)}`;
}
