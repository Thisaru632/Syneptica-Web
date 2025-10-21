// src/constants/about.ts

export const ABOUT_SECTIONS = [
  {
    id: "spark",
    title: "The Spark Behind Zevaro",
    image: "/api/placeholder/500/400",
    description: [
      "Every great brand begins with a dream. For us, it was two friends, two engineers, and one vision – to transform the way garments are made in Sri Lanka.",
      "Founded by graduates of the University of Moratuwa, Zevaro was born out of the belief that fashion should not only look good, but also do good – for people, communities, and the planet."
    ],
    reverse: false,
  },
  {
    id: "faces",
    title: "The Faces Behind the Fabric",
    image: "/api/placeholder/500/400",
    description: [
      "A brief look at the founders – two BSc Textile & Apparel Engineering graduates with industry expertise, who combined their technical skills with a shared mission: to create garments that blend premium craftsmanship, sustainability, and innovation.",
      "Their journey from students to entrepreneurs reflects resilience, creativity, and purpose."
    ],
    reverse: true,
  },
  {
    id: "way",
    title: "The Zevaro Way",
    image: "/api/placeholder/500/600",
    description: [
      "At Zevaro, we believe clothing is more than what you wear – it's a statement of values. Our process is guided by:"
    ],
    list: [
      {
        heading: "Lean Thinking",
        text: "Eliminating waste, maximizing efficiency, and focusing on what truly adds value."
      },
      {
        heading: "Sustainability First",
        text: "Choosing materials, methods, and processes that reduce impact on the environment."
      },
      {
        heading: "Human-Centered Practices",
        text: "Valuing people, from our skilled artisans to the end customer, ensuring dignity, respect, and empowerment at every stage."
      }
    ],
    reverse: false,
  },
  {
    id: "heart",
    title: "The Heart of Zevaro",
    image: "/api/placeholder/500/600",
    mission: {
      heading: "Mission",
      quote: `"Stitching Excellence with Purpose"`,
      text: "To create garments of exceptional quality, with a focus on sustainability, innovation, and ethical practices – delivering not just products, but experiences that delight customers and honor the planet."
    },
    vision: {
      heading: "Vision",
      quote: `"Shaping the Future of Fashion in Sri Lanka"`,
      text: "To lead as Sri Lanka's benchmark in premium garment manufacturing – setting global standards for excellence, sustainability, and positive community impact."
    },
    reverse: true,
  }
];

export const ABOUT_CTA = {
  heading: "Ready to Experience Excellence?",
  text: "Discover our premium products and see how we're revolutionizing fashion manufacturing.",
  primaryBtn: "Discover Our Products",
  secondaryBtn: "Get In Touch",
};
