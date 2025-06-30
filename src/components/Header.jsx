import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clapperboard, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Filmes", path: "/filmes" },
  { name: "Séries", path: "/series" },
  { name: "Esportes", path: "/esportes" },
  { name: "Planos", path: "/planos" },
  { name: "Suporte", path: "/suporte" }
];

const Header = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => {
    toast({
      title: "Funcionalidade em breve! 🚧",
      description: "A área de login ainda não foi implementada. Que tal construirmos ela agora?"
    });
  };

  const navLinkClass = ({ isActive }) =>
    cn(
      "font-semibold transition-colors",
      isActive ? "text-primary" : "text-secondary-foreground/80 hover:text-white"
    );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 px-4 md:px-8 flex items-center justify-between bg-black sticky top-0 z-50"
    >
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <Clapperboard className="h-8 w-8 text-primary" />
        <span className="text-2xl font-black tracking-tighter text-white">IronPLay</span>
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
          Login
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

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-black border-t border-white/10 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-white font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Button
              onClick={() => {
                setIsMenuOpen(false);
                handleLoginClick();
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full w-full mt-2"
            >
              Login
            </Button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
