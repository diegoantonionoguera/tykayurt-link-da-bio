const WHATSAPP_NUMBER = "554191731323";
const WHATSAPP_MESSAGE = "Oi! Vim do link da bio, quero pedir um TykaYurt";
const REFERRAL_MESSAGE =
  "Oi! Quero participar do Compartilhou, Ganhou e pegar meu código de indicação";

const whatsappCard = document.querySelector("#whatsapp-card");
const referralCard = document.querySelector("#referral-card");

if (whatsappCard) {
  whatsappCard.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

if (referralCard) {
  referralCard.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(REFERRAL_MESSAGE)}`;
}
