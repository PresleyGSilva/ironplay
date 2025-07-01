import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clapperboard, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Filmes', path: '/filmes' },
  { name: 'Séries', path: '/series' },
  { name: 'Esportes', path: '/esportes' },
  { name: 'Planos', path: '/planos' },
  { name: 'Suporte', path: '/suporte' },
];

const Header = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => {
    toast({
      title: 'Funcionalidade em breve! 🚧',
      description: 'A área de login ainda não foi implementada.',
    });
  };

  const navLinkClass = ({ isActive }) =>
    cn(
      'font-semibold transition-colors',
      isActive ? 'text-primary' : 'text-secondary-foreground/80 hover:text-white'
    );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 px-4 md:px-8 bg-black sticky top-0 z-50"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <Clapperboard className="h-8 w-8 text-primary" />
          <span className="text-2xl font-black tracking-tighter text-white">IronPlay</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink key={link.name} to={link.path} className={navLinkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop login */}
        <div className="hidden md:block">
          <Button
            onClick={handleLoginClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all duration-300 transform hover:scale-105 rounded-full px-6"
          >
            Conecte-se
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="text-white"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-black border-t border-white/10 px-4 py-4 flex flex-col gap-3"
          >
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-base font-medium px-2 py-1 hover:text-primary"
              >
                {link.name}
              </NavLink>
            ))}

            <Button
              onClick={() => {
                handleLoginClick();
                setIsMenuOpen(false);
              }}
              className="mt-4 bg-primary text-primary-foreground rounded-full"
            >
              Conecte-se
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
