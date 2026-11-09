import { businessConfig } from "@/config/business";

export function getWhatsAppLink(message?: string) {
  const normalized = businessConfig.social.whatsapp.replace(/\D/g, "");
  const text =
    message ??
    `Hello ${businessConfig.name}, I would like to enquire about your solar water heating solutions.`;

  return `https://wa.me/${normalized}?text=${encodeURIComponent(text)}`;
}

export function getPhoneLink() {
  return `tel:+${businessConfig.contact.phoneDigits.replace(/\D/g, "")}`;
}

export function getEmailLink() {
  return `mailto:${businessConfig.contact.email}`;
}

export function isPlaceholderContact() {
  return (
    businessConfig.contact.phone.includes("86606 21727") ||
    businessConfig.contact.email.includes("jyothienterprisesrnr@gmail.com") ||
    businessConfig.contact.phoneDigits.length < 10
  );
}
