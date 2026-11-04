
/* =========================================
   VARDHAN PORTFOLIO
   TECHNICAL SKILLS DATA
========================================= */

export interface Skill {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}


/* =========================================
   CORE TECHNICAL SKILLS
   Based on the uploaded resume
========================================= */

export const skillCategories: SkillCategory[] = [

  {
    id: "frontend",

    title: "Frontend Development",

    description:
      "Building responsive web interfaces and interactive digital experiences.",

    skills: [
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Responsive UI/UX Design" },
      { name: "REST API Integration" },
    ],
  },

  {
    id: "ai-engineering",

    title: "AI & LLM Engineering",

    description:
      "Developing AI-powered applications using language models and structured prompt workflows.",

    skills: [
      { name: "Prompt Engineering" },
      { name: "LLM Workflow Design" },
      { name: "AI Agent Design" },
      { name: "AI Output Validation" },
      { name: "OpenAI API" },
      { name: "Anthropic API" },
    ],
  },

  {
    id: "development-tools",

    title: "Development Tools",

    description:
      "Using modern development environments and AI-assisted tools to accelerate software workflows.",

    skills: [
      { name: "VS Code" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "ChatGPT" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "Cursor" },
      { name: "GitHub Copilot" },
    ],
  },

  {
    id: "product-design",

    title: "Product & UX Design",

    description:
      "Developing a user-centered approach to interface design and digital product experiences.",

    skills: [
      { name: "UI/UX Principles" },
      { name: "User-Centered Design" },
      { name: "Visual Hierarchy" },
      { name: "Interaction Design" },
      { name: "Product Thinking" },
    ],
  },

];


/* =========================================
   TECHNOLOGIES CURRENTLY DEVELOPING
========================================= */

export const developmentFocus: Skill[] = [

  { name: "TypeScript" },

  { name: "Reusable React Architecture" },

  { name: "Component-Based UI Development" },

  { name: "Advanced Responsive Design" },

  { name: "Figma Prototyping" },

];


/* =========================================
   CORE PROGRAMMING KNOWLEDGE
========================================= */

export const coreKnowledge: Skill[] = [

  { name: "Python" },

  { name: "Object-Oriented Programming" },

  { name: "Data Structures & Algorithms" },

  { name: "SQL & Databases" },

  { name: "REST APIs" },

];
