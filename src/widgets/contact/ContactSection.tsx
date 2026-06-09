import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, ArrowUpRight } from 'lucide-react';
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
      {/* Section header - centered */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-xs uppercase tracking-widest text-text-secondary font-semibold mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's Work Together
        </motion.p>
        <motion.p
          className="text-sm text-text-muted max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Open to internships, collaborations, and full-time opportunities. 
          Let's build something amazing together.
        </motion.p>
      </div>

      {/* Main content - centered card */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-[#09090b] border border-[#27272a] rounded-2xl p-6 md:p-10 hover:border-[#3f3f46] transition-colors duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left - Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Location */}
                <div className="flex items-center gap-2 mb-6 text-text-secondary">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{siteConfig.location}</span>
                </div>

                {/* Social links */}
                <div className="space-y-3">
                  {socialLinks.map((link) => {
                    const Icon = socialIconMap[link.icon];
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.icon !== 'mail' ? '_blank' : undefined}
                        rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-[#18181b]/50 border border-[#27272a] hover:border-[#3f3f46] hover:bg-[#18181b] transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          {Icon && <Icon className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />}
                          <span className="text-sm text-text-secondary group-hover:text-white transition-colors font-medium">{link.label}</span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-all transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick email CTA */}
              <div className="mt-6 pt-6 border-t border-[#27272a]">
                <p className="text-xs text-text-muted mb-1">Prefer email?</p>
                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="text-sm text-white hover:text-text-secondary transition-colors font-medium"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs text-text-secondary font-semibold uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#18181b]/50 border border-[#27272a] rounded-xl text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#3f3f46] focus:bg-[#18181b] transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs text-text-secondary font-semibold uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#18181b]/50 border border-[#27272a] rounded-xl text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#3f3f46] focus:bg-[#18181b] transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs text-text-secondary font-semibold uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-[#18181b]/50 border border-[#27272a] rounded-xl text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#3f3f46] focus:bg-[#18181b] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 disabled:opacity-50 transition-all text-sm"
              >
                {status === 'sending' ? 'Opening mail client...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>

              {status === 'success' && (
                <motion.p
                  className="text-xs text-green-400 text-center font-medium"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Mail client opened successfully!
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
