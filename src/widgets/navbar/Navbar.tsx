import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GradientText } from '@shared/ui';
import { MagneticButton } from '@shared/ui';
import { navItems, siteConfig } from '@shared/constants';
import { cn } from '@shared/utils';
import { useIsMobile } from '@shared/hooks';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-0 w-full z-50 glass" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl sm:text-2xl font-bold z-50">
          <GradientText>Charan</GradientText>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-accent-400 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <MagneticButton
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="!px-5 !py-2.5 text-sm"
          >
            Resume ↗
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden z-50 w-11 h-11 flex items-center justify-center rounded-xl glass"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className={cn(
                'absolute right-0 top-0 h-full w-72 bg-background-secondary border-l border-glass-border',
                'flex flex-col pt-24 px-6 gap-2'
              )}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-lg font-medium text-slate-300 hover:text-accent-400 hover:bg-white/5 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-glass-border">
                <MagneticButton
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full"
                >
                  Resume ↗
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
