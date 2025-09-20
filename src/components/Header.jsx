import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, LogOut, User, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const navLinks = [
    { name: t('header.home'), path: '/home' },
    { name: t('header.places'), path: '/places' },
    { name: t('header.booking'), path: '/booking' },
    { name: t('header.savedPlans'), path: '/saved-plans' },
    { name: t('header.survey'), path: '/survey' },
    { name: t('header.helpline'), path: '/helpline' },
    { name: t('header.aboutUs'), path: '/about' },
  ];

  useEffect(() => {
    const userData = localStorage.getItem('keralaTourismUser');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/');
    }
  }, [navigate, location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('keralaTourismUser');
    toast({
      title: "Logged Out",
      description: "Thank you for visiting Kerala Tourism!"
    });
    navigate('/');
  };

  if (!user) return null;

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-md border-b border-emerald-200 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/home" className="flex items-center space-x-3">
            <div className="w-12 h-12 kerala-gradient rounded-full flex items-center justify-center">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-emerald-800">Kerala Tourism</h1>
              <p className="text-sm text-emerald-600">God's Own Country</p>
            </div>
          </NavLink>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 text-emerald-700">
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm font-medium">{t('header.welcome', { name: user.name })}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User className="mr-2 h-4 w-4" />
                  <span>{t('header.profile')}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>{t('header.logout')}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-2 py-4 border-t border-emerald-200">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive ? 'bg-emerald-100 text-emerald-700' : 'text-slate-600 hover:bg-emerald-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;