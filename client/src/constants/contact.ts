import { MapPin, Phone, Mail } from "lucide-react";

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "No 119, University Road, Raththanapitiya, Boralesgamuwa, Sri Lanka",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94715745632",
  },
  {
    icon: Mail,
    label: "Email",
    value: "charith@synaptica.lk",
  },
];

export const CONTACT_FORM = {
  accessKey: "6b7a805d-3915-43db-b55f-a4fa5e3779cb",
  subject: "New Contact Form Submission from Syneptica",
  redirect: "https://syneptica-web.vercel.app/",
};

export const CONTACT_TEXT = {
  heading: "Contact Us",
  description:
    "We'd love to hear from you! Whether you have a question about our technology services, need support, or simply want to connect, our team is here to help. Reach out today and let's start building something great together.",
  formHeading: "Send Message",
  namePlaceholder: "Full Name",
  mobilePlaceholder: "Mobile Number",
  emailPlaceholder: "Email",
  messagePlaceholder: "Type your Message...",
  submitButton: "Send",
  sendingButton: "Sending...",
};
