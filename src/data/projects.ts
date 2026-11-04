
/* =========================================
   VARDHAN PORTFOLIO
   FEATURED PROJECT DATA
========================================= */

/* Project feature structure */

export interface ProjectFeature {
  id: string;
  title: string;
  description: string;
}

/* Technology structure */

export interface ProjectTechnology {
  name: string;
  category: string;
}

/* Featured project structure */

export interface FeaturedProject {
  id: string;
  name: string;
  displayName: string;
  fullName: string;
  displayTitle: string;
  category: string;
  year: string;
  overview: string;
  contribution: string;
  features: ProjectFeature[];
  technologies: ProjectTechnology[];
}


/* =========================================
   IRES PROJECT
========================================= */

export const featuredProject: FeaturedProject = {

  id: "ires",

  name: "IRES",

  fullName: "Interview Response & Evaluation System",

  displayName: "IRES — Interview Response & Evaluation System",

  displayTitle: "AI-Powered Virtual Interviewer",

  category: "AI PRODUCT / FRONTEND ENGINEERING",

  year: "2026",

  overview:
    "IRES is an AI-powered mock interview system designed to simulate realistic interview experiences through real-time voice interaction, adaptive domain-specific questioning, and instant response evaluation.",

  contribution:
    "Architected and deployed a live AI mock interview system. Engineered advanced prompt workflows and LLM pipelines to simulate real-world hiring processes with personalized feedback and data-driven scoring across multiple interview domains.",

  features: [

    {
      id: "voice-interaction",
      title: "Real-time Voice Interaction",
      description:
        "Enables interactive interview experiences through real-time voice-based communication.",
    },

    {
      id: "adaptive-questioning",
      title: "Adaptive Domain-specific Questions",
      description:
        "Generates interview questions adapted to different domains and interview contexts.",
    },

    {
      id: "response-evaluation",
      title: "Instant Response Evaluation",
      description:
        "Evaluates interview responses and provides feedback to help users understand their performance.",
    },

    {
      id: "personalized-feedback",
      title: "Personalized Feedback",
      description:
        "Uses LLM-driven workflows to generate personalized feedback for interview responses.",
    },

    {
      id: "data-driven-scoring",
      title: "Data-driven Scoring",
      description:
        "Supports structured response scoring across multiple interview domains.",
    },

  ],

  technologies: [

    {
      name: "Prompt Engineering",
      category: "AI DEVELOPMENT",
    },

    {
      name: "OpenAI API",
      category: "AI INTEGRATION",
    },

    {
      name: "LLM Workflow Design",
      category: "AI ARCHITECTURE",
    },

  ],

};
