// src/constants/about.ts

export const ABOUT_SECTIONS = [
  {
    id: "spark",
    title: "The Spark Behind Synaptica",
    image: "/api/placeholder/500/400",
    description: [
      "Every great product begins with a problem worth solving. For us, it was helping businesses turn complex challenges into elegant, scalable digital solutions.",
      "Founded by passionate engineers and product builders, Synaptica was created to deliver high-impact software with craftsmanship, empathy, and a relentless focus on user value."
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
    title: "The Synaptica Way",
    image: "/api/placeholder/500/600",
    description: [
      "At Synaptica, we believe software is more than code – it's an enabler of outcomes. Our process is guided by:"
    ],
    list: [
      {
        heading: "Lean Product Thinking",
        text: "Minimize waste, validate early, and focus on outcomes that create real business value."
      },
      {
        heading: "Scale and Reliability",
        text: "Designing cloud-native systems that are secure, observable, and resilient from day one."
      },
      {
        heading: "Human-Centered Design",
        text: "Building with empathy for users and teams, ensuring clarity, simplicity, and joy at every touchpoint."
      }
    ],
    reverse: false,
  },
  {
    id: "heart",
    title: "The Heart of Synaptica",
    image: "/api/placeholder/500/600",
    mission: {
      heading: "Mission",
      quote: `"Engineering Impact with Craft"`,
      text: "To deliver reliable, secure, and intuitive software that empowers organizations to move faster, scale confidently, and delight their users."
    },
    vision: {
      heading: "Vision",
      quote: `"Building the Digital Backbone for Modern Businesses"`,
      text: "To be a trusted technology partner known for quality, integrity, and transformative results across industries."
    },
    reverse: true,
  }
];

export const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image: "/images/testimonial/user.png",
    description: "Visionary leader with 10+ years in technology and business strategy.",
    expertise: ["Strategic Planning", "Leadership", "Innovation"]
  },
  {
    id: "2", 
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image: "/images/testimonial/user.png",
    description: "Technical architect passionate about scalable solutions and cutting-edge technology.",
    expertise: ["Software Architecture", "Cloud Computing", "AI/ML"]
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Lead Developer",
    image: "/images/testimonial/user.png", 
    description: "Full-stack developer with expertise in modern web technologies and user experience.",
    expertise: ["Frontend Development", "UX Design", "React/Next.js"]
  },
  {
    id: "4",
    name: "David Kim",
    role: "DevOps Engineer",
    image: "/images/testimonial/user.png",
    description: "Infrastructure specialist focused on reliability, security, and performance optimization.",
    expertise: ["DevOps", "Cloud Infrastructure", "Security"]
  }
];

export const ABOUT_CTA = {
  heading: "Ready to Experience Excellence?",
  text: "Meet our talented team of experts who are dedicated to delivering exceptional results.",
  primaryBtn: "Discover Our Products",
  secondaryBtn: "Get In Touch",
};
