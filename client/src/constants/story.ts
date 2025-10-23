export interface HeroSlide {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "1",
    title: "Our Journey Begins",
    description: "Discover the story behind Syneptica's innovative approach to technology and our commitment to excellence.",
    image: "/images/290456.jpg"
  },
  {
    id: "2", 
    title: "Innovation in Action",
    description: "See how we transform ideas into reality through cutting-edge technology and creative solutions.",
    image: "/images/vecteezy_cloud-computing-technology-data-information-on-cloud-to_6532519.jpg"
  },
  {
    id: "3",
    title: "Building the Future",
    description: "Join us as we shape the future of technology with passion, expertise, and unwavering dedication.",
    image: "/images/vecteezy_hand-touching-infographic-cloud-computing-and-technology_10812636.jpg"
  }
];
