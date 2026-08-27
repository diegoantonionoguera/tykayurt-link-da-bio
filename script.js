const WHATSAPP_NUMBER = "554191731323";
const WHATSAPP_MESSAGE = "Oi! Vim do link da bio, quero pedir um TykaYurt";

const whatsappCard = document.querySelector("#whatsapp-card");

if (whatsappCard) {
  whatsappCard.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
