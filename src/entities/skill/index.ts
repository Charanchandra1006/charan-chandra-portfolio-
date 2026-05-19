import { Code2, Database, Terminal, Layers, Layout, Server, Box, GitBranch, Coffee, Paintbrush } from 'lucide-react';

export interface Skill {
  name: string;
  icon: React.ElementType;
}

export const skillsList: Skill[] = [
  { name: 'Java', icon: Coffee },
  { name: 'Python', icon: Code2 },
  { name: 'JavaScript', icon: Code2 },
  { name: 'TypeScript', icon: Terminal },
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Layers },
  { name: 'Node.js', icon: Server },
  { name: 'Express', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'Docker', icon: Box },
  { name: 'Git', icon: GitBranch },
  { name: 'Tailwind CSS', icon: Layout },
  { name: 'Figma', icon: Paintbrush },
];
