
// /config/constants.ts

/**
 * Valid skills used throughout the portfolio.
 */
export type ValidSkills =
  // Frontend
  | "Next.js"
  | "React"
  | "Angular"
  | "Vue.js"
  | "React Native"
  | "Redux"
  | "HTML 5"
  | "CSS 3"
  | "Sass"
  | "JavaScript"
  | "TypeScript"

  // Backend
  | "Node.js"
  | "express.js"
  | "Nest.js"
  | "FastAPI"
  | "Django"
  | "Flask"
  | "Spring Boot"
  | "Laravel"
  | "PHP"

  // Databases
  | "MongoDB"
  | "MySQL"
  | "PostgreSQL"
  | "Redis"
  | "SQL"
  | "NoSQL"
  | "Prisma"
  | "Supabase"
  | "Firebase"

  // Cloud / DevOps
  | "AWS"
  | "Azure"
  | "Google Cloud"
  | "Docker"
  | "Kubernetes"
  | "Git"
  | "CI/CD"
  | "Jenkins"
  | "Vercel"
  | "Netlify"

  // APIs / Authentication / Realtime
  | "GraphQL"
  | "Socket.io"
  | "Google Auth"
  | "REST API"

  // CMS & E-commerce
  | "Shopify"
  | "WordPress"
  | "Liquid"

  // AI / Data / ML
  | "Python"
  | "TensorFlow"
  | "PyTorch"
  | "Databricks"

  // Mobile
  | "Flutter"
  | "Dart"

  // UI / Design
  | "Material UI"
  | "Tailwind CSS"
  | "Bootstrap"
  | "Figma"
  | "Framer Motion"

  // Build / Testing
  | "Webpack"
  | "Jest"
  | "Cypress"
  | "Storybook"

  // 3D / Graphics
  | "Three.js"
  | "WebGL"

  // Marketing
  | "UI/UX"
  | "SEO";

/**
 * Valid project categories.
 *
 * These values must exactly match the category
 * values used in /config/projects.ts.
 */
export type ValidCategory =
  | "Web Dev"
  | "Frontend"
  | "UI/UX";

/**
 * Valid project types.
 *
 * These values must exactly match the type
 * values used in /config/projects.ts.
 */
export type ValidExpType =
  | "Personal"
  | "Professional";

/**
 * Valid portfolio pages.
 *
 * These values must exactly match the keys
 * used in /config/pages.ts.
 */
export type ValidPages =
  | "home"
  | "skills"
  | "experience"
  | "projects"
  | "contact"
  | "contributions"
  | "resume"
  | "blogs";
