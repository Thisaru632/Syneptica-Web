export interface ProductSlide {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const PRODUCT_SLIDES: ProductSlide[] = [
  {
    id: "1",
    title: "Software Development & Maintenance",
    description: "Custom, scalable applications tailored to your business needs",
    image: "/images/products/new/loyalty.jpg"
  },
  {
    id: "2", 
    title: "Cloud-Based SaaS Solutions",
    description: "Flexible, cost-effective, and secure cloud applications",
    image: "/images/products/new/gaming.jpg"
  },
  {
    id: "3",
    title: "Enterprise-Grade Solutions",
    description: "Secure platforms that streamline operations for large organizations",
    image: "/images/products/new/E commerce.jpg"
  },
  {
    id: "4",
    title: "Custom Software Solutions",
    description: "Tailored tools for industry-specific requirements",
    image: "/images/products/new/Internet Booking Engines.jpg"
  },
  {
    id: "5",
    title: "Consulting & Support",
    description: "Ongoing guidance and maintenance to maximize ROI",
    image: "/images/products/29045.jpg"
  }
];

export const PRODUCTS = [
    {
        id: 1,
        title: "SOFTWARE DEVELOPMENT & MAINTENANCE",
        description: "Custom, scalable applications tailored to your business needs",
        image: "/images/products/digital-environment-scene.jpg",
        buttonText: "Learn More"
    },
    {
        id: 2,
        title: "CLOUD-BASED SAAS SOLUTIONS",
        description: "Flexible, cost-effective, and secure cloud applications",
        image: "/images/products/representations-user-experience-interface-design.jpg",
        buttonText: "Learn More"
    },
    {
        id: 3,
        title: "ENTERPRISE-GRADE SOLUTIONS",
        description: "Secure platforms that streamline operations for large organizations",
        image: "/images/products/data-server-racks-hub-room-with-big-data-computer-center-blue-interior-hosting-storage-hardware.jpg",
        buttonText: "Learn More"
    },
    {
        id: 4,
        title: "CUSTOM SOFTWARE SOLUTIONS",
        description: "Tailored tools for industry-specific requirements",
        image: "/images/products/meeting-business-executives.jpg",
        buttonText: "Learn More"
    },
    {
        id: 5,
        title: "CONSULTING & SUPPORT",
        description: "Ongoing guidance and maintenance to maximize ROI",
        image: "/images/products/29045.jpg",
        buttonText: "Learn More"
    },
];

// Make sure your PRODUCTS_2 array includes the category field that matches PRODUCT_CATEGORIES labels

export const PRODUCT_CATEGORIES = [
    { value: "software-development", label: "Software Development & Maintenance" },
    { value: "saas-solutions", label: "Cloud-Based SaaS Solutions" },
    { value: "enterprise-solutions", label: "Enterprise-Grade Solutions" },
    { value: "custom-software", label: "Custom Software Solutions" },
    { value: "consulting-support", label: "Consulting & Support" },
];

// Technology Services for Product Page
export const PRODUCTS_2 = [
    {
        id: "service-1",
        title: "SOFTWARE DEVELOPMENT & MAINTENANCE",
        description: "Custom, scalable applications tailored to your business needs. We develop robust software solutions with ongoing maintenance and support to ensure optimal performance and reliability.",
        buttonText: "Learn More",
        category: "Software Development & Maintenance",
        images: [
            {
                id: "software-1",
                src: "/images/products/digital-environment-scene.jpg",
                alt: "Software Development & Maintenance Services"
            }
        ],
        autoplayDelay: 0
    },
    {
        id: "service-2",
        title: "CLOUD-BASED SAAS SOLUTIONS",
        description: "Flexible, cost-effective, and secure cloud applications. We build scalable SaaS platforms that provide seamless user experiences while reducing infrastructure costs.",
        buttonText: "Learn More",
        category: "Cloud-Based SaaS Solutions",
        images: [
            {
                id: "saas-1",
                src: "/images/products/representations-user-experience-interface-design.jpg",
                alt: "Cloud-Based SaaS Solutions"
            }
        ],
        autoplayDelay: 0
    },
    {
        id: "service-3",
        title: "ENTERPRISE-GRADE SOLUTIONS",
        description: "Secure platforms that streamline operations for large organizations. We deliver enterprise-level solutions with advanced security, scalability, and compliance features.",
        buttonText: "Learn More",
        category: "Enterprise-Grade Solutions",
        images: [
            {
                id: "enterprise-1",
                src: "/images/products/data-server-racks-hub-room-with-big-data-computer-center-blue-interior-hosting-storage-hardware.jpg",
                alt: "Enterprise-Grade Solutions"
            }
        ],
        autoplayDelay: 0
    },
    {
        id: "service-4",
        title: "CUSTOM SOFTWARE SOLUTIONS",
        description: "Tailored tools for industry-specific requirements. We create bespoke software solutions that address unique business challenges and drive operational efficiency.",
        buttonText: "Learn More",
        category: "Custom Software Solutions",
        images: [
            {
                id: "custom-1",
                src: "/images/products/meeting-business-executives.jpg",
                alt: "Custom Software Solutions"
            }
        ],
        autoplayDelay: 0
    },
    {
        id: "service-5",
        title: "CONSULTING & SUPPORT",
        description: "Ongoing guidance and maintenance to maximize ROI. We provide strategic consulting, technical support, and continuous optimization to ensure your technology investments deliver maximum value.",
        buttonText: "Learn More",
        category: "Consulting & Support",
        images: [
            {
                id: "consulting-1",
                src: "/images/products/29045.jpg",
                alt: "Consulting & Support Services"
            }
        ],
        autoplayDelay: 0
    }
];

// If you need backward compatibility, you can also export a version with single images
export const PRODUCTS_LEGACY = PRODUCTS_2.map(product => ({
    ...product,
    image: product.images[0]?.src || '/images/placeholder.jpg'
}));