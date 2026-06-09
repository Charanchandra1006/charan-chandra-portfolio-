export const siteConfig = {
  name: 'M Charan Chandra',
  title: 'M Charan Chandra | Full-stack development',
  description:
    'Frontend Engineer specializing in AI-powered applications and full-stack development. Building cinematic digital experiences with React, TypeScript, and modern web technologies.',
  url: 'https://charanchandra.dev',
  email: 'charanchandra1006@gmail.com',
  location: 'Telangana, India',
  resumeUrl:
    'https://drive.google.com/file/d/1crjvV77pSrVYGvb7PClWObbNGIOO7naa/view',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Charanchandra1006',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/charan-chandra-mutakoduru-bb746038b/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:charanchandra1006@gmail.com',
    icon: 'mail',
  },
];
