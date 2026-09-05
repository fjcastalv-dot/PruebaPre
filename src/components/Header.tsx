import { useState, useEffect, useRef } from 'react';
// @ts-ignore
import brandLogo from '../assets/images/logo_pre.png';
import { LOGO_PRE_URL } from '../../imaganes/Imagenes inicio/Logo';
import { ShoppingCart, Heart, Menu, X, Sun, Moon } from 'lucide-react';
import { ActiveTab, CartItem, Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  favorites: Product[];
  setIsFavoritesOpen: (open: boolean) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  cart,
  setIsCartOpen,
  favorites,
  setIsFavoritesOpen,
  theme,
  setTheme,
}: HeaderProps) {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY <= 40) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            // Scrolling down
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY.current) {
            // Scrolling up
            setIsVisible(true);
          }
          
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Instant mouse tracking: if the cursor is near the top (<= 90px), immediately show header
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 90) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'quienes-somos', label: 'Quiénes Somos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <>
      <motion.header 
        initial={false}
        animate={{ 
          y: isVisible ? 0 : -140,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="sticky top-0 z-40 w-full bg-brand-navy text-white border-b border-brand-navy/30 shadow-md will-change-transform"
        onMouseEnter={() => setIsVisible(true)}
      >
      {/* Top Banner */}
      <div className="bg-orange-600 text-white text-xs py-1.5 px-4 text-center font-medium tracking-wider">
        COTIZACIÓN GRATUITA EN MENOS DE 24 HORAS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => setActiveTab('inicio')}
            className="flex items-center justify-center focus:outline-none cursor-pointer h-full py-1.5 shrink-0"
            id="header-logo-btn"
          >
            <img
              src={brandLogo || LOGO_PRE_URL}
              alt="Uniformes PRE"
              className="h-16 sm:h-20 md:h-22 max-h-[86px] w-auto object-contain transition-transform duration-200 hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.currentTarget.src !== LOGO_PRE_URL) {
                  e.currentTarget.src = LOGO_PRE_URL;
                }
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg cursor-pointer transition-all duration-150 select-none ${
                    isActive
                      ? 'text-white border-2 border-white/90 bg-white/10 shadow-sm'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full hover:bg-white/15 text-white/85 hover:text-orange-500 transition-all duration-300 focus:outline-none cursor-pointer active:scale-95 flex items-center justify-center overflow-hidden"
              aria-label="Cambiar tema"
              id="theme-toggle-btn"
              title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -15, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 15, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="flex items-center justify-center"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-amber-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-amber-200" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Favorites Button */}
            <button
              onClick={() => setIsFavoritesOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-white/15 text-white/85 hover:text-orange-500 transition-colors focus:outline-none cursor-pointer"
              aria-label="Ver favoritos"
              id="favorites-toggle-btn"
            >
              <Heart className={`h-6 w-6 ${favorites.length > 0 ? 'fill-orange-500 text-orange-500' : ''}`} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white ring-2 ring-brand-navy">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-white/15 text-white/85 hover:text-orange-500 transition-colors focus:outline-none cursor-pointer"
              aria-label="Ver cotización"
              id="cart-toggle-btn"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white ring-2 ring-brand-navy animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MobileNavMenu activeTab={activeTab} setActiveTab={setActiveTab} navItems={navItems} />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
    </>
  );
}

// Separate component for Mobile Navigation Toggle


function MobileNavMenu({
  activeTab,
  setActiveTab,
  navItems,
}: {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  navItems: { id: ActiveTab; label: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
        aria-label="Menu principal"
        id="mobile-menu-toggle"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-24 left-0 right-0 bg-brand-navy border-b border-white/15 z-50 p-4 shadow-xl flex flex-col space-y-2 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                  activeTab === item.id
                    ? 'text-orange-500 bg-white/15'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                id={`mobile-nav-item-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
