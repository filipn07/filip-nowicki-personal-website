
import { Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
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
          <a href="#about" onClick={scrollToSection('about')} className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.about')}</a>
          <a href="#experience" onClick={scrollToSection('experience')} className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.experience')}</a>
          <a href="#skills" onClick={scrollToSection('skills')} className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.skills')}</a>
          <a href="#education" onClick={scrollToSection('education')} className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.education')}</a>
          <a href="#contact" onClick={scrollToSection('contact')} className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.contact')}</a>
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden z-50">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#about" onClick={scrollToSection('about')} className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.about')}</a>
              <a href="#experience" onClick={scrollToSection('experience')} className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.experience')}</a>
              <a href="#skills" onClick={scrollToSection('skills')} className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.skills')}</a>
              <a href="#education" onClick={scrollToSection('education')} className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.education')}</a>
              <a href="#contact" onClick={scrollToSection('contact')} className="text-filip-gray hover:text-filip-blue transition-colors">{t('nav.contact')}</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
