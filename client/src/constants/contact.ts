import { MapPin, Phone, Mail } from "lucide-react";

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Zevaro apparel, No. 59, Gurugammanaya, Dehiattakandiya, Sri Lanka",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+94) 70 262 1884",
  },
  {
    icon: Mail,
    label: "Email",
    value: "zevaroapparel@gmail.com",
  },
];


export const CONTACT_FORM = {
  accessKey: "6b7a805d-3915-43db-b55f-a4fa5e3779cb",
  subject: "New Contact Form Submission from Zevaro Apparel",
  redirect: "https://zevaro-web.vercel.app/",
};

export const CONTACT_TEXT = {
  heading: "Contact Us",
  description:
    "We'd love to hear from you! Whether you have a question about our services, need support, or simply want to connect, our team is here to help. Reach out today and let's start building something great together.",
  formHeading: "Send Message",
  namePlaceholder: "Full Name",
  mobilePlaceholder: "Mobile Number",
  emailPlaceholder: "Email",
  messagePlaceholder: "Type your Message...",
  submitButton: "Send",
  sendingButton: "Sending...",
};
