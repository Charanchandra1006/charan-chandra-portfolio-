export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & UI',
    icon: '⚡',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Three.js', 'Framer Motion', 'HTML/CSS', 'JavaScript'],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'Flask', 'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Prisma'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Data Science',
    icon: '🤖',
    skills: ['Gemini API', 'Scikit-Learn', 'XGBoost', 'FinBERT', 'NumPy', 'Pandas', 'Matplotlib', 'DocTR OCR'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['Git & GitHub', 'Vercel', 'Render', 'Docker', 'REST APIs', 'CI/CD'],
  },
];
