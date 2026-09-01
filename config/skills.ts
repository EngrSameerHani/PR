import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React.js",
    description:
      "Build modern and interactive web applications using reusable components, hooks, and scalable frontend architecture.",
    rating: 5,
    icon: Icons.react,
  },

  {
    name: "TypeScript",
    description:
      "Develop reliable and maintainable applications with strong typing and scalable React-based development.",
    rating: 5,
    icon: Icons.typescript,
  },

  {
    name: "Next.js",
    description:
      "Create high-performance React applications with modern routing, rendering, optimization, and scalable architecture.",
    rating: 5,
    icon: Icons.nextjs,
  },

  {
    name: "WordPress",
    description:
      "Develop and customize professional WordPress websites using themes, plugins, and custom website solutions.",
    rating: 5,
    icon: Icons.html5,
  },

  {
    name: "Shopify",
    description:
      "Build and customize Shopify e-commerce stores with responsive storefronts, product pages, and optimized customer journeys.",
    rating: 5,
    icon: Icons.css3,
  },

  {
    name: "PHP Laravel",
    description:
      "Develop backend applications and APIs using Laravel framework, MVC architecture, and database integration.",
    rating: 4,
    icon: Icons.javascript,
  },

  {
    name: "HTML 5",
    description:
      "Create semantic and SEO-friendly website structures using modern HTML standards.",
    rating: 5,
    icon: Icons.html5,
  },

  {
    name: "CSS 3",
    description:
      "Design responsive and modern interfaces using CSS layouts, animations, and responsive techniques.",
    rating: 5,
    icon: Icons.css3,
  },

  {
    name: "WordPress Plugins",
    description:
      "Configure and customize WordPress plugins to extend website functionality and meet business requirements.",
    rating: 4,
    icon: Icons.html5,
  },

  {
    name: "HubSpot",
    description:
      "Create CRM workflows, lead management processes, and marketing automation solutions.",
    rating: 4,
    icon: Icons.javascript,
  },

  {
    name: "n8n Automation",
    description:
      "Build AI-powered automation workflows connecting APIs, CRMs, and business applications.",
    rating: 5,
    icon: Icons.nodejs,
  },

  {
    name: "Make.com",
    description:
      "Create automated workflows and integrations between different business applications.",
    rating: 4,
    icon: Icons.nodejs,
  },

  {
    name: "Zapier",
    description:
      "Develop no-code automation workflows connecting different platforms and applications.",
    rating: 4,
    icon: Icons.nodejs,
  },

  {
    name: "GoHighLevel (GHL)",
    description:
      "Configure CRM pipelines, automation workflows, and client management systems.",
    rating: 4,
    icon: Icons.javascript,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
