import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@shared/ui/icons';
import { SectionHeading, GlassCard, MagneticButton } from '@shared/ui';
import { fadeUp, staggerContainer, staggerItem } from '@shared/lib';
import { siteConfig, socialLinks } from '@shared/constants';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const socialIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: (props) => <Mail {...(props as React.ComponentProps<typeof Mail>)} />,
};

function validateForm(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message too short';
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission (replace with Formspree/EmailJS)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="📬 Get In Touch"
          title="Let's"
          highlight="Connect"
          subtitle="Open to internships, collaborations, and hackathons"
        />

        <motion.div
          className="max-w-5xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <GlassCard padding="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Form */}
              <div>
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      className="h-full flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="text-center space-y-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }}
                        >
                          <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                        <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                        <button
                          onClick={() => { setIsSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                          className="text-accent-400 text-sm font-medium hover:text-accent-300 transition-colors"
                        >
                          Send another message →
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={`w-full px-4 py-3 bg-white/[0.03] border ${errors.name ? 'border-red-500/50' : 'border-glass-border'} rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all`}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                        <input
                          id="contact-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`w-full px-4 py-3 bg-white/[0.03] border ${errors.email ? 'border-red-500/50' : 'border-glass-border'} rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                        <textarea
                          id="contact-message"
                          value={form.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          rows={4}
                          className={`w-full px-4 py-3 bg-white/[0.03] border ${errors.message ? 'border-red-500/50' : 'border-glass-border'} rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all resize-none`}
                          placeholder="Tell me about your project or idea..."
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <MagneticButton type="submit" variant="primary" className="w-full">
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send size={16} />
                            Send Message
                          </span>
                        )}
                      </MagneticButton>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Right: Info + CTA */}
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Social links */}
                <motion.div variants={staggerItem}>
                  <h3 className="text-lg font-bold text-white mb-4">Connect With Me</h3>
                  <div className="space-y-3">
                    {socialLinks.map((link) => {
                      const Icon = socialIconMap[link.icon];
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.icon !== 'mail' ? '_blank' : undefined}
                          rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-glass-border hover:border-accent-500/30 hover:bg-accent-500/5 transition-all group"
                        >
                          {Icon && <Icon width={18} height={18} className="text-accent-500" />}
                          <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{link.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>

                {/* CTA card */}
                <motion.div variants={staggerItem}>
                  <div className="bg-gradient-to-br from-accent-900/20 to-accent-800/10 border border-accent-500/10 rounded-2xl p-6 md:p-8">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Let's Build Something Amazing
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      I'm actively seeking opportunities to collaborate on innovative projects
                      and contribute to meaningful work.
                    </p>
                    <MagneticButton
                      href={`mailto:${siteConfig.email}`}
                      variant="primary"
                    >
                      <Mail size={16} />
                      Send an Email
                    </MagneticButton>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
