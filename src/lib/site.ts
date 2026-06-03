// Central place for clinic contact details + conversion links.
export const CLINIC = {
  name: "Morya Clinic",
  shortName: "Morya",
  tagline: "Trusted Care, Close to Home",
  phoneDisplay: "09970113992",
  phoneRaw: "+9109970113992",
  whatsappRaw: "9109970113992"
",
  address:
    "Shop No. 6, Star Heaven CHS
Plot No. 40, Sector 5
Kamothe, Panvel
Maharashtra 410209"
} as const;

export const telHref = (raw: string) => `tel:${raw}`;

export const whatsappHref = (raw: string, message?: string) =>
  `https://wa.me/${raw}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const DEFAULT_WA_MESSAGE =
  "Hello Morya Clinic, I would like to book an appointment.";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
