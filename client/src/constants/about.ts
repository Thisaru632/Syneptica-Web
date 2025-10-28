// src/constants/about.ts

export const ABOUT_SECTIONS = [
  {
    id: "spark",
    title: "About Synaptica (Pvt) Ltd",
    image: "/api/placeholder/500/400",
    description: [
      "Synaptica (Pvt) Ltd is a forward-thinking technology company specializing in Software-as-a-Service (SaaS) solutions for diverse industries. We deliver innovative, scalable, and secure software platforms that help businesses streamline operations, enhance customer engagement, and accelerate digital transformation.",
      "Our experience spans enterprise-grade applications, loyalty platforms, ecommerce solutions, fiber network management tools, and internet booking engines. By combining industry expertise with cutting-edge technology, we empower organizations of all sizes to optimize efficiency, unlock growth opportunities, and remain competitive in a fast-evolving digital landscape."
    ],
    reverse: false,
  },
  {
    id: "faces",
    title: "Our Expertise & Experience",
    image: "/api/placeholder/500/400",
    description: [
      "With deep expertise in SaaS development and enterprise solutions, our team combines technical excellence with industry knowledge to deliver transformative digital experiences.",
      "Our diverse experience across loyalty platforms, ecommerce solutions, fiber network management, and booking engines positions us as a comprehensive technology partner for businesses seeking digital innovation."
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
      text: "Develop high-quality SaaS and enterprise solutions that drive operational efficiency. Enable digital transformation for businesses across industries. Foster innovation through cutting-edge technology and strategic partnerships. Deliver seamless user experiences with robust and secure platforms. Provide ongoing support to ensure long-term client success."
    },
    vision: {
      heading: "Vision",
      quote: `"Leading Technology Innovation Globally"`,
      text: "To be a leading technology innovator, delivering scalable, secure, and transformative software solutions that empower businesses globally."
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
