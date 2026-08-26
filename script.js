const WHATSAPP_NUMBER = "554191731323";
const WHATSAPP_MESSAGE =
  "Oi! Quero pedir um TykaYurt de 500 ml por R$ 20. Quais sabores estão disponíveis hoje?";

const whatsappCard = document.querySelector("#whatsapp-card");

if (whatsappCard) {
  whatsappCard.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
