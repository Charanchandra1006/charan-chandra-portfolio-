export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  category: string;
  liveUrl?: string;
  githubUrl: string;
  gradient: string;
  featured: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    id: "noctra",
    title: "Noctra – AI Sleep Companion",
    description:
      "AI-powered mobile app for dream journaling, sleep tracking, and personalized insights using advanced AI models. Noctra combines sleep science with intelligent analytics to help users understand their sleep patterns and dream experiences.",
    features: [
      "AI-powered dream analysis & interpretation",
      "Smart sleep tracking with pattern recognition",
      "Personalized sleep insights & recommendations",
      "Dream journal with mood correlation",
    ],
    techStack: [
      "React Native",
      "Node.js",
      "Gemini API",
      "MongoDB",
      "Express.js",
    ],
    category: "Mobile App",
    githubUrl: "https://www.noctraofficial.in/",
    gradient: "from-accent-600 via-cyan-500 to-teal-400",
    featured: true,
    image: "/project1.jpg",
  },
  {
    id: "intelli-credit",
    title: "Intelli-Credit AI",
    description:
      "AI-powered enterprise platform that automates corporate loan evaluation using real financial documents, advanced AI models, and explainable decision-making.",
    features: [
      "Automated financial document processing with OCR",
      "FinBERT sentiment analysis on financial reports",
      "XGBoost risk scoring with explainability",
      "Multi-model AI pipeline for credit decisions",
    ],
    techStack: [
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Gemini API",
      "FinBERT",
      "XGBoost",
      "DocTR OCR",
    ],
    category: "AI / FinTech",
    githubUrl: "https://github.com/Charanchandra1006/Intelli-Credit-AI",
    gradient: "from-blue-600 via-indigo-500 to-violet-500",
    featured: false,
    image: "/project2.jpg",
  },
  {
    id: "seating-allocation",
    title: "Automatic Seating Allocation",
    description:
      "Python automation tool for generating optimized seating arrangements based on multiple constraints. Handles complex allocation rules for examination halls.",
    features: [
      "Constraint-based seating optimization",
      "Excel import/export with OpenPyXL",
      "GUI interface with Tkinter",
      "Multi-room allocation support",
    ],
    techStack: ["Python", "Tkinter", "OpenPyXL", "Pandas"],
    category: "Automation",
    githubUrl:
      "https://github.com/Charanchandra1006/AutomaticSeatingAllocationSystem",
    gradient: "from-emerald-600 via-green-500 to-teal-400",
    featured: false,
    image: "/project3.jpg",
  },
  {
    id: "task-scheduler",
    title: "Task Scheduler App",
    description:
      "Desktop productivity app with smart reminders, recurring tasks, and intelligent scheduling algorithms for optimal time management.",
    features: [
      "Smart task prioritization algorithms",
      "Recurring task management",
      "Desktop notifications & reminders",
      "Data persistence with local storage",
    ],
    techStack: ["Python", "Tkinter", "Pandas", "SQLite"],
    category: "Desktop App",
    githubUrl: "https://github.com/Charanchandra1006/Task-Scheduler-App",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    featured: false,
    image: "/project4.jpg",
  },
];
