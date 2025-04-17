
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-6 md:px-12 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-filip-blue">Filip Nowicki</div>
        
        <div className="flex items-center">
          <LanguageSelector />
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden ml-2 focus:outline-none text-filip-gray"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/#about" className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.about')}</Link>
          <Link to="/#experience" className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.experience')}</Link>
          <Link to="/#skills" className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.skills')}</Link>
          <Link to="/#education" className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.education')}</Link>
          <Link to="/#contact" className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.contact')}</Link>
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden z-50">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/#about" className="text-filip-gray hover:text-filip-blue transition-colors" onClick={toggleMenu}>{t('nav.about')}</Link>
              <Link to="/#experience" className="text-filip-gray hover:text-filip-blue transition-colors" onClick={toggleMenu}>{t('nav.experience')}</Link>
              <Link to="/#skills" className="text-filip-gray hover:text-filip-blue transition-colors" onClick={toggleMenu}>{t('nav.skills')}</Link>
              <Link to="/#education" className="text-filip-gray hover:text-filip-blue transition-colors" onClick={toggleMenu}>{t('nav.education')}</Link>
              <Link to="/#contact" className="text-filip-gray hover:text-filip-blue transition-colors" onClick={toggleMenu}>{t('nav.contact')}</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
