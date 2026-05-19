import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { socialLinks, siteConfig } from '@shared/constants';
import { GithubIcon, LinkedinIcon } from '@shared/ui/icons';

const socialIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: (props) => <Mail {...(props as React.ComponentProps<typeof Mail>)} />,
};

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl">
        <h2 className="text-xs uppercase tracking-widest text-text-secondary font-semibold mb-8">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm mb-8">
              Open to internships, collaborations, and full-time opportunities. Let's build something amazing together.
            </p>

            <div className="space-y-3 max-w-xs">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.icon !== 'mail' ? '_blank' : undefined}
                    rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#09090b] border border-[#27272a] hover:border-[#3f3f46] hover:bg-[#18181b] transition-all group"
                  >
                    {Icon && <Icon className="w-4 h-4 text-text-secondary group-hover:text-white transition-colors" />}
                    <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs text-text-secondary font-semibold uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-[#09090b] border border-[#27272a] rounded-lg text-sm text-white placeholder-text-muted focus:outline-none focus:border-[#3f3f46] focus:bg-[#18181b] transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-text-secondary font-semibold uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-[#09090b] border border-[#27272a] rounded-lg text-sm text-white placeholder-text-muted focus:outline-none focus:border-[#3f3f46] focus:bg-[#18181b] transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-text-secondary font-semibold uppercase tracking-wider mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-[#09090b] border border-[#27272a] rounded-lg text-sm text-white placeholder-text-muted focus:outline-none focus:border-[#3f3f46] focus:bg-[#18181b] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-colors w-full md:w-auto"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4" />
            </button>

            {status === 'success' && (
              <p className="text-xs text-green-500 mt-2 font-medium">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
