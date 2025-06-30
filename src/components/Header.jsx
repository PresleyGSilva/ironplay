import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clapperboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "Filmes",
  path: "/filmes"
}, {
  name: "Séries",
  path: "/series"
}, {
  name: "Esportes",
  path: "/esportes"
}, {
  name: "Planos",
  path: "/planos"
}, {
  name: "Suporte",
  path: "/suporte"
}];
const Header = () => {
  const {
    toast
  } = useToast();
  const handleLoginClick = () => {
    toast({
      title: "Funcionalidade em breve! 🚧",
      description: "A área de login ainda não foi implementada. Que tal construirmos ela agora?"
    });
  };
  const navLinkClass = ({
    isActive
  }) => cn("font-semibold transition-colors", isActive ? "text-primary" : "text-secondary-foreground/80 hover:text-white");
  return <motion.header initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className="w-full py-4 px-8 flex justify-between items-center bg-black sticky top-0 z-50">
      <NavLink to="/" className="flex items-center gap-2">
        <Clapperboard className="h-8 w-8 text-primary" />
        <span className="text-2xl font-black tracking-tighter text-white">IronPLay</span>
      </NavLink>
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map(link => <NavLink key={link.name} to={link.path} className={navLinkClass}>
            {link.name}
          </NavLink>)}
      </nav>
      <Button onClick={handleLoginClick} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-all duration-300 transform hover:scale-105 rounded-full px-6">
        Login
      </Button>
    </motion.header>;
};
export default Header;