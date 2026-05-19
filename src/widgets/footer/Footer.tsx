import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@shared/ui/icons';
import { navItems, socialLinks, siteConfig } from '@shared/constants';

const socialIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: (props) => <Mail {...(props as React.ComponentProps<typeof Mail>)} />,
};

export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12">
          <div>
            <h3 className="text-xl font-bold mb-3 text-white">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Frontend Engineer crafting digital experiences with AI and modern web technologies.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-slate-500 hover:text-accent-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a key={link.label} href={link.href} target={link.icon !== 'mail' ? '_blank' : undefined} rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined} className="w-10 h-10 rounded-xl bg-white/[0.03] border border-[#27272a] flex items-center justify-center text-slate-500 hover:text-white hover:border-[#3f3f46] transition-all" aria-label={link.label}>
                    {Icon && <Icon width={16} height={16} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-[#27272a] pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} {siteConfig.name} · All rights reserved.</p>
          <p className="text-xs text-slate-600 flex items-center gap-1">Built with <Heart size={12} className="text-white" /> using React + TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
