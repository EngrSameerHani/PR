import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "think-trek-technologies",

    position: "Frontend and Shopify Developer",
    company: "Think Trek Technologies (PhoneCase.pk)",
    location: "Islamabad, Pakistan",

    startDate: new Date("2026-03-01"),
    endDate: "Present",

    description: [
      "Working as a Frontend and Shopify Developer, responsible for designing, developing, customizing, and maintaining modern e-commerce experiences for online businesses. The role focuses on creating responsive storefronts, improving customer journeys, and building conversion-focused interfaces using Shopify and WordPress.",

      "Develop and customize Shopify stores according to business requirements, including theme customization, product page layouts, collection structures, navigation systems, reusable sections, and brand-focused storefront experiences.",

      "Work on frontend improvements including responsive design, mobile optimization, UI consistency, product catalogue organization, and checkout-related user experience enhancements to improve customer engagement and purchasing flow.",

      "Collaborate with business teams to understand requirements and transform them into scalable, user-friendly e-commerce solutions while maintaining modern web development standards.",
    ],

    achievements: [
      "Developed and customized responsive Shopify and WordPress e-commerce stores for retail businesses.",

      "Created conversion-focused user interfaces improving product discovery, navigation, and customer shopping experiences.",

      "Customized Shopify themes using Liquid, HTML, CSS, and JavaScript to match brand requirements.",

      "Designed and improved product pages, collection pages, homepage sections, and reusable storefront components.",

      "Optimized websites for mobile responsiveness, usability, performance, and better customer journeys.",

      "Improved product catalogue structure and information presentation to create a smoother shopping experience.",

      "Implemented modern UI/UX practices including clear navigation, visual hierarchy, responsive layouts, and customer-focused design patterns.",
    ],

    skills: [
      "Shopify",
      "Wordpress",
      "Liquid",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "React",
      "UI/UX",
    ],

    companyUrl: "https://phonecase.pk",
    logo: "/experience/thinktrek-logo.png",
  },


  {
    id: "diyar-digital-marketing",

    position: "Frontend Web Developer",
    company: "Diyar Digital Marketing",
    location: "Islamabad, Pakistan",

    startDate: new Date("2025-11-01"),
    endDate: new Date("2026-02-01"),

    description: [
      "Worked as a Frontend Web Developer developing modern web applications, business websites, healthcare platforms, and digital solutions using React.js, TypeScript, WordPress, Laravel APIs, and MongoDB-backed systems.",

      "Developed responsive frontend interfaces including landing pages, appointment booking systems, service websites, and CRM dashboards with focus on usability, accessibility, performance, and scalable architecture.",

      "Built reusable React components and structured frontend systems to improve maintainability, consistency, and development efficiency across multiple projects.",

      "Collaborated with backend developers, UI/UX designers, and business teams to convert requirements into functional digital products with optimized user experiences.",
    ],

    achievements: [
      "Developed frontend interfaces using React.js and TypeScript following modern component-based architecture.",

      "Built healthcare and business platforms including appointment booking interfaces, service pages, and administrative dashboards.",

      "Integrated frontend applications with Laravel-based APIs and MongoDB-backed backend systems.",

      "Created reusable UI components, responsive layouts, and scalable frontend structures.",

      "Improved user experience through better navigation, accessibility, responsive design, and optimized performance.",

      "Implemented modern frontend development practices including TypeScript, reusable components, API integration, and mobile-first design.",

      "Worked on business websites, CRM interfaces, and digital platforms designed for real-world client requirements.",
    ],

    skills: [
      "React",
      "Typescript",
      "Next.js",
      "Tailwind CSS",
      "Wordpress",
      "Laravel",
      "MongoDB",
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],

    companyUrl: "https://diyardigitalmarketing.com",
    logo: "/experience/diyar-logo.png",
  },


  {
    id: "smart-site-solutions",

    position: "WordPress Developer (Hybrid)",
    company: "Smart Site Solutions",
    location: "Islamabad, Pakistan",

    startDate: new Date("2025-08-01"),
    endDate: new Date("2026-04-01"),

    description: [
      "Worked as a WordPress Developer responsible for designing, developing, and maintaining professional websites for guest houses, service providers, corporate clients, and business organizations.",

      "Developed custom WordPress websites by customizing themes, layouts, plugins, and website components according to specific client requirements and branding guidelines.",

      "Focused on creating responsive, fast, and user-friendly websites optimized for different screen sizes including desktop, tablet, and mobile devices.",

      "Implemented content improvements, SEO-friendly structures, and performance optimization techniques to improve website visibility and user experience.",
    ],

    achievements: [
      "Developed and maintained multiple WordPress websites for different business industries.",

      "Customized WordPress themes and created professional website layouts aligned with client branding.",

      "Improved website responsiveness and cross-device compatibility using modern frontend practices.",

      "Optimized website loading speed through performance improvements, asset optimization, and layout enhancements.",

      "Applied on-page SEO techniques including content structure improvements, metadata optimization, and search-friendly page organization.",

      "Created service pages, landing pages, business websites, and content-driven websites focused on lead generation.",

      "Improved overall website usability through better navigation, design consistency, and user-focused layouts.",
    ],

    skills: [
      "Wordpress",
      "PHP",
      "HTML 5",
      "CSS 3",
      "Javascript",
      "React",
      "SEO",
      "UI/UX",
    ],

    companyUrl: "https://smartsitesolutions.com",
    logo: "/experience/smartsite-logo.png",
  },
];