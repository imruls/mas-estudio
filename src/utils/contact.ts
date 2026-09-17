import { siteData } from "../data/DataSite";

/** Link de WhatsApp al número del estudio, con el mensaje ya prellenado. */
export function whatsappLink(
  message: string = siteData.contact.defaultWhatsappMessage,
): string {
  return `https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Link de mail a la casilla del estudio. */
export function mailtoLink(): string {
  return `mailto:${siteData.contact.email}`;
}
