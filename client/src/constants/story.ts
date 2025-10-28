export interface HeroSlide {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "1",
    title: "Loyalty Platform",
    description: "End-to-end loyalty program with mobile and POS integration.",
    image: "/images/products/new/loyalty.jpg"
  },
  {
    id: "2", 
    title: "Gaming Platform",
    description: "Developed in partnership with Gameon World.",
    image: "/images/products/new/gaming.jpg"
  },
  {
    id: "3",
    title: "Ecommerce Platforms",
    description: "Tailored online stores for retail, fashion, and electronics businesses.",
    image: "/images/products/new/E commerce.jpg"
  },
  {
    id: "4",
    title: "Internet Booking Engines",
    description: "Secure hotel booking solutions.",
    image: "/images/products/new/Internet Booking Engines.jpg"
  }
];
