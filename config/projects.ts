import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "qih-hospital-platform",
    companyName: "QIH Hospital Platform",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Modern healthcare platform developed with React.js and TypeScript, featuring appointment booking, scheduling workflows, service pages, and responsive administrative dashboard interfaces.",
    websiteLink: "https://qih.diyarmarketing.com",
    techStack: [
      "React",
      "Typescript",
      "Next.js",
      "Tailwind CSS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2026-03-01"),
    companyLogoImg: "/projects/qih/logo.png",
    pagesInfoArr: [
      {
        title: "Healthcare Website",
        description:
          "Responsive patient-facing website with hospital information, departments, services, doctor content, and clear calls to action.",
        imgArr: ["/projects/qih/website.png"],
      },
      {
        title: "Appointment & Scheduling",
        description:
          "User-friendly appointment booking and scheduling interfaces designed to simplify patient interactions.",
        imgArr: ["/projects/qih/appointment.png"],
      },
      {
        title: "Administrative Dashboard",
        description:
          "Structured dashboard interfaces for managing appointments, schedules, healthcare information, and operational workflows.",
        imgArr: ["/projects/qih/dashboard.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The QIH Hospital Platform is a modern healthcare web solution developed to provide patients and hospital staff with a clear, accessible, and efficient digital experience. The project includes responsive patient-facing pages, appointment-related workflows, scheduling interfaces, and administrative dashboard screens.",
        "I developed the frontend using React.js and TypeScript, with a strong focus on reusable components, maintainable code, responsive layouts, and consistent user interface patterns. The platform was structured to support healthcare content such as departments, services, doctor information, and patient actions.",
        "The UI/UX approach prioritized clarity and accessibility. Healthcare users often need to find information quickly, so the interface uses organized navigation, readable content sections, clear calls to action, and mobile-friendly layouts. The design was kept professional and easy to use across desktop, tablet, and mobile devices.",
        "The project follows modern frontend practices, including component-based architecture, reusable UI elements, type-safe development, responsive design, and performance-conscious implementation. The codebase was designed to remain scalable as additional hospital modules and integrations are introduced.",
      ],
      bullets: [
        "Developed the healthcare platform frontend using React.js and TypeScript.",
        "Created responsive interfaces for hospital departments, services, doctors, and patient information.",
        "Designed appointment booking and scheduling workflows with a user-centered approach.",
        "Built structured administrative dashboard interfaces for operational management.",
        "Developed reusable and maintainable UI components for consistent design.",
        "Applied responsive UI/UX principles for desktop, tablet, and mobile devices.",
        "Used modern component-based architecture and TypeScript for scalable development.",
        "Focused on accessibility, clear navigation, readable content, and intuitive patient journeys.",
      ],
    },
  },

  {
    id: "travel-tourism-management-system",
    companyName: "Travel and Tourism Management System",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Responsive travel management frontend featuring tour packages, destination listings, booking workflows, customer-facing services, and reusable interface components.",
    techStack: [
      "React",
      "Typescript",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Tailwind CSS",
    ],
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-10-01"),
    companyLogoImg: "/projects/travel/logo.png",
    pagesInfoArr: [
      {
        title: "Tour & Package Listings",
        description:
          "Responsive interfaces for browsing destinations, travel packages, pricing details, and package information.",
        imgArr: ["/projects/travel/packages.png"],
      },
      {
        title: "Booking Workflow",
        description:
          "Step-by-step booking interfaces designed to make travel selection and customer information entry simple.",
        imgArr: ["/projects/travel/booking.png"],
      },
      {
        title: "Customer Travel Services",
        description:
          "Customer-facing pages for travel information, service details, inquiries, and booking-related actions.",
        imgArr: ["/projects/travel/services.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Travel and Tourism Management System was developed to provide a modern and responsive digital experience for travelers and tourism businesses. The frontend supports tour discovery, package listings, travel information, booking workflows, and customer-facing services.",
        "I created responsive React-based interfaces with reusable components so that similar travel cards, package sections, forms, and content layouts could be maintained consistently across the platform. The structure was designed to support future expansion with additional destinations, packages, filters, and booking features.",
        "The UI/UX was designed around a clear customer journey: discover a destination, review package details, compare available options, and proceed through the booking workflow. Visual hierarchy, readable information, prominent actions, and responsive layouts were used to reduce friction during the booking process.",
        "The implementation uses current frontend development practices, including modular components, responsive design, reusable UI patterns, and maintainable TypeScript-based code. The result is a scalable interface suitable for modern travel and tourism services.",
      ],
      bullets: [
        "Built responsive frontend interfaces for travel and tourism services.",
        "Developed reusable tour, destination, and package listing components.",
        "Created customer-friendly travel package detail and inquiry interfaces.",
        "Designed structured booking workflows for a smoother user journey.",
        "Applied modern UI/UX principles to improve readability and conversion flow.",
        "Implemented responsive layouts for mobile, tablet, and desktop screens.",
        "Used reusable React components and TypeScript for maintainable development.",
        "Designed the frontend to support future package, destination, and booking expansion.",
      ],
    },
  },

  {
    id: "crazybet-lc247",
    companyName: "CrazyBet and LC247",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "High-performance responsive frontend interfaces for real-time bidding platforms, featuring API integration, dynamic data handling, reusable React components, and live interaction workflows.",
    techStack: [
      "React",
      "Typescript",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "REST API",
    ],
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-08-01"),
    companyLogoImg: "/projects/crazybet-lc247/logo.png",
    pagesInfoArr: [
      {
        title: "Live Platform Interface",
        description:
          "Responsive user interfaces designed for dynamic, fast-changing platform data and real-time interactions.",
        imgArr: ["/projects/crazybet-lc247/live.png"],
      },
      {
        title: "API-Driven Components",
        description:
          "Reusable React components connected to APIs for displaying and updating platform information.",
        imgArr: ["/projects/crazybet-lc247/api.png"],
      },
      {
        title: "Responsive User Experience",
        description:
          "Mobile-friendly layouts and interaction patterns optimized for different screen sizes.",
        imgArr: ["/projects/crazybet-lc247/responsive.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "CrazyBet and LC247 involved developing modern frontend interfaces for real-time, data-driven bidding platforms. The work focused on responsive layouts, reusable React components, API integration, and interfaces capable of presenting frequently changing information clearly.",
        "I developed modular frontend components so that common interface elements could be reused across multiple pages and workflows. API-driven data was integrated into the user interface to support dynamic content and keep the platform connected to backend services.",
        "The UI/UX design emphasized speed, clarity, and usability. Real-time platforms require users to understand changing information quickly, so the interfaces were organized with clear visual hierarchy, readable data presentation, responsive controls, and consistent interaction patterns.",
        "The implementation followed current frontend standards, including component-based development, TypeScript-friendly architecture, responsive design, reusable UI systems, and maintainable API integration. Performance and adaptability were considered across desktop and mobile experiences.",
      ],
      bullets: [
        "Developed responsive React frontend interfaces for real-time bidding platforms.",
        "Integrated APIs to display dynamic and frequently updated platform data.",
        "Created reusable components to improve consistency and development efficiency.",
        "Designed clear UI patterns for fast understanding of live information.",
        "Applied modern UI/UX principles for responsive and intuitive interactions.",
        "Optimized layouts for desktop, tablet, and mobile devices.",
        "Used modular, maintainable frontend architecture with TypeScript support.",
        "Focused on scalable components and reliable API-driven user experiences.",
      ],
    },
  },

  {
    id: "shopify-ecommerce-stores",
    companyName: "Shopify E-commerce Stores",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Designed, developed, customized, and maintained modern Shopify stores with responsive product pages, collections, conversion-focused UI/UX, and optimized customer shopping journeys.",
    techStack: [
      "Shopify",
      "Liquid",
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2026-08-01"),
    companyLogoImg: "/projects/shopify/logo.png",
    pagesInfoArr: [
      {
        title: "Storefront & Homepage",
        description:
          "Brand-focused, responsive Shopify storefronts designed to communicate value and guide customers toward products.",
        imgArr: ["/projects/shopify/homepage.png"],
      },
      {
        title: "Product & Collection Pages",
        description:
          "Conversion-focused product and collection interfaces with clear information, organized navigation, and mobile-friendly layouts.",
        imgArr: ["/projects/shopify/products.png"],
      },
      {
        title: "Shopping Experience",
        description:
          "Customer-focused shopping journeys with intuitive navigation, product discovery, cart interactions, and streamlined purchasing flows.",
        imgArr: ["/projects/shopify/cart.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I developed and customized multiple Shopify e-commerce stores for fashion, lifestyle, beauty, accessories, and retail businesses. The work included storefront development, theme customization, responsive page design, product and collection presentation, and customer-focused shopping experiences.",
        "Each store was tailored to its brand identity and business requirements. I worked with Shopify themes, Liquid templates, HTML, CSS, and JavaScript to create reusable sections, improve layouts, customize storefront functionality, and maintain consistent design across pages.",
        "The UI/UX approach focused on product discovery, clear product information, visual hierarchy, trust-building content, prominent calls to action, and smooth mobile shopping. Product pages and collection layouts were designed to help customers find relevant information and move efficiently toward checkout.",
        "The stores follow current Shopify development practices, including responsive and mobile-first design, reusable theme sections, performance-conscious implementation, accessible navigation, and scalable content structures. The goal was to create modern stores that are easy for both customers and store owners to use.",
      ],
      bullets: [
        "Developed and customized responsive Shopify e-commerce storefronts.",
        "Built and improved homepages, product pages, collection pages, and customer shopping flows.",
        "Customized Shopify themes using Liquid, HTML, CSS, and JavaScript.",
        "Created reusable Shopify sections and flexible content components.",
        "Designed conversion-focused UI/UX for product discovery and customer engagement.",
        "Optimized layouts for mobile, tablet, and desktop devices.",
        "Improved navigation, product presentation, and overall shopping usability.",
        "Applied current Shopify, responsive design, accessibility, and performance practices.",
        "Worked on stores including bloomhausco.com, stylewell.ae, sanayas.pk, hamdaniz.com, libertyarsenal.shop, and coldast.com.",
      ],
    },
  },

  {
    id: "wordpress-custom-websites",
    companyName: "WordPress and Custom Websites",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed modern WordPress and custom websites for healthcare, logistics, automotive, consulting, marketing, technology, travel, and service businesses with responsive UI/UX and scalable content management.",
    techStack: [
      "WordPress",
      "PHP",
      "React",
      "Next.js",
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2026-08-01"),
    companyLogoImg: "/projects/wordpress/logo.png",
    pagesInfoArr: [
      {
        title: "Business & Service Websites",
        description:
          "Professional websites with clear service presentation, brand-focused design, lead-generation sections, and responsive navigation.",
        imgArr: ["/projects/wordpress/business.png"],
      },
      {
        title: "Custom Pages & Frontend",
        description:
          "Custom website pages and frontend interfaces built around specific business requirements and user journeys.",
        imgArr: ["/projects/wordpress/custom.png"],
      },
      {
        title: "Content Management",
        description:
          "Scalable WordPress structures that allow teams to manage pages, services, content, and website updates efficiently.",
        imgArr: ["/projects/wordpress/cms.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I developed and maintained WordPress and custom websites for businesses across healthcare, logistics, automotive, consulting, marketing, technology, travel, and professional services. The work included website design and development, custom frontend implementation, responsive layouts, content management, and business-focused user experiences.",
        "The websites were built around each client's brand, services, audience, and conversion goals. Depending on project requirements, I used WordPress, PHP, React, Next.js, HTML, CSS, and JavaScript to create maintainable websites with flexible content structures and reusable interface elements.",
        "The UI/UX approach emphasized professional branding, clear service information, readable content, intuitive navigation, lead-generation paths, and strong calls to action. Every layout was designed to work effectively on mobile, tablet, and desktop devices.",
        "The projects use up-to-date web development practices, including mobile-first responsive design, reusable components, SEO-friendly page structures, performance-conscious implementation, accessible navigation, and scalable content management. The result is a collection of modern websites tailored to real business needs.",
      ],
      bullets: [
        "Developed responsive WordPress and custom websites for multiple industries.",
        "Created professional business websites, service pages, landing pages, and lead-generation experiences.",
        "Built custom frontend interfaces using React, Next.js, HTML, CSS, JavaScript, and PHP.",
        "Implemented flexible WordPress content structures for easy website management.",
        "Designed brand-aligned UI/UX with clear navigation and strong calls to action.",
        "Applied mobile-first responsive design across desktop, tablet, and mobile screens.",
        "Improved website usability, content hierarchy, performance, and accessibility.",
        "Used current SEO-friendly, scalable, and maintainable web development practices.",
        "Worked on websites including elephant-trax.com, boraninc.com, pelite.ae, gulfluxurycars.com, tasawerclosets.com, clydeconsultantsgroup.com, phonecase.pk, diyardigitalmarketing.com, diyartechs.com, neurafreight.com, aminaismail.pk, driveo.pk, diyarmarketing.com, ittefaqcartravel.com, and rhythm.pk.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);