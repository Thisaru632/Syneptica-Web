export const PRODUCTS = [
    {
        id: 1,
        title: "SOFTWARE DEVELOPMENT",
        description: "Custom software solutions built with cutting-edge technologies and best practices",
        image: "/images/products/digital-environment-scene.jpg",
        buttonText: "Learn More"
    },
    {
        id: 2,
        title: "MOBILE APP DEVELOPMENT",
        description: "Native and cross-platform mobile applications for iOS and Android",
        image: "/images/products/representations-user-experience-interface-design.jpg",
        buttonText: "Learn More"
    },
    {
        id: 3,
        title: "SERVER-SIDE SERVICES",
        description: "Robust backend infrastructure and cloud-based server solutions",
        image: "/images/products/data-server-racks-hub-room-with-big-data-computer-center-blue-interior-hosting-storage-hardware.jpg",
        buttonText: "Learn More"
    },
    {
        id: 4,
        title: "CONSULTATION SERVICES",
        description: "Expert technology consultation to transform your business vision",
        image: "/images/products/meeting-business-executives.jpg",
        buttonText: "Learn More"
    },
];

// Make sure your PRODUCTS_2 array includes the category field that matches PRODUCT_CATEGORIES labels

export const PRODUCT_CATEGORIES = [
    { value: "software-development", label: "Software Development" },
    { value: "mobile-app", label: "Mobile App Development" },
    { value: "server-services", label: "Server-side Services" },
    { value: "consultation", label: "Consultation Services" },
    { value: "web-development", label: "Web Development" },
];

// Technology Services for Product Page
export const PRODUCTS_2 = [
    {
        id: "service-1",
        title: "SOFTWARE DEVELOPMENT",
        description: "Custom software solutions built with cutting-edge technologies and best practices. We create scalable, maintainable applications that drive your business forward.",
        buttonText: "Learn More",
        category: "Software Development",
        images: [
            {
                id: "software-1",
                src: "/images/products/digital-environment-scene.jpg",
                alt: "Software Development Services"
            }
        ],
        autoplayDelay: 0
    },
    {
        id: "service-2",
        title: "MOBILE APP DEVELOPMENT",
        description: "Native and cross-platform mobile applications for iOS and Android. We build intuitive, high-performance apps that engage your users and grow your business.",
        buttonText: "Learn More",
        category: "Mobile App Development",
        images: [
            {
                id: "mobile-1",
                src: "/images/products/representations-user-experience-interface-design.jpg",
                alt: "Mobile App Development Services"
            }
        ],
        autoplayDelay: 0
    },
    {
        id: "service-3",
        title: "SERVER-SIDE SERVICES",
        description: "Robust backend infrastructure and cloud-based server solutions. We ensure your applications are secure, scalable, and performant with enterprise-grade architecture.",
        buttonText: "Learn More",
        category: "Server-side Services",
        images: [
            {
                id: "server-1",
                src: "/images/products/data-server-racks-hub-room-with-big-data-computer-center-blue-interior-hosting-storage-hardware.jpg",
                alt: "Server-side Services"
            }
        ],
        autoplayDelay: 0
    },
    {
        id: "service-4",
        title: "CONSULTATION SERVICES",
        description: "Expert technology consultation to transform your business vision. We provide strategic guidance, technical architecture, and implementation planning for your digital transformation.",
        buttonText: "Learn More",
        category: "Consultation Services",
        images: [
            {
                id: "consultation-1",
                src: "/images/products/meeting-business-executives.jpg",
                alt: "Consultation Services"
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