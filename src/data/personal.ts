
/* =========================================
   SRI VARDHAN CHALAMALA
   PERSONAL INFORMATION
========================================= */

export interface SocialLink {
  name: string;
  url: string;
}

export interface Education {
  university: string;
  degree: string;
  startDate: string;
  graduation: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  professionalTitle: string;
  specialization: string;
  tagline: string;
  professionalSummary: string;
  about: string;
  location: string;
  email: string;
  education: Education;
  socialLinks: SocialLink[];
  achievements: string[];
  interests: string[];
  resumePath: string;
}


/* =========================================
   PERSONAL DATA
========================================= */

export const personalInfo: PersonalInfo = {

  name: "Sri Vardhan Chalamala",

  initials: "SV",

  professionalTitle: "UI / Frontend Engineer",

  specialization: "Product & UX Design",

  tagline:
    "Designing thoughtful digital experiences. Engineering intuitive interfaces.",

  
professionalSummary:
  "I focus on building user-centered digital experiences through frontend engineering, product thinking, and thoughtful interface design. My approach combines modern web technologies with AI-assisted development to turn ideas into intuitive, responsive, and functional products.",

about:
  "I'm Sri Vardhan Chalamala, a Computer Science and Engineering undergraduate specializing in Artificial Intelligence and Machine Learning. I'm passionate about the intersection of frontend engineering, product design, and user experience. I enjoy transforming ideas into meaningful digital products, exploring modern interface patterns, and building web experiences that balance visual clarity with functionality.",

  location: "Vadodara, Gujarat, India",

  email: "srivardhanch12@gmail.com",

  education: {
    university: "Parul University",

    degree:
      "Bachelor of Technology in Computer Science and Engineering – AI and ML",

    startDate: "September 2023",

    graduation: "May 2027",

    location: "Vadodara, Gujarat, India",
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/srivardhanch12",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sri-vardhan-chalamala-3bb2b9368/",
    },
  ],

  achievements: [
    "State-Level Bronze Medalist – Archery",
  ],

  interests: [
    "Independent Film Direction",
    "Screenwriting",
    "Creative Story Writing",
    "Photography",
  ],

  resumePath:
    "/resume/Sri-Vardhan-Chalamala-Resume.pdf",
};
