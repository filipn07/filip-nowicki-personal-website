
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-6 md:px-12 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-filip-blue">Filip Nowicki</div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none text-filip-gray"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/#about" className="text-filip-gray hover:text-filip-blue transition-colors">About</Link>
          <Link to="/#experience" className="text-filip-gray hover:text-filip-blue transition-colors">Experience</Link>
          <Link to="/#skills" className="text-filip-gray hover:text-filip-blue transition-colors">Skills</Link>
          <Link to="/#education" className="text-filip-gray hover:text-filip-blue transition-colors">Education</Link>
          <Link to="/#contact" className="text-filip-gray hover:text-filip-blue transition-colors">Contact</Link>
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden z-50">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/#about" className="text-filip-gray hover:text-filip-blue transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/#experience" className="text-filip-gray hover:text-filip-blue transition-colors" onClick={toggleMenu}>Experience</Link>
              <Link to="/#skills" className="text-filip-gray hover:text-filip-blue transition-colors" onClick={toggleMenu}>Skills</Link>
              <Link to="/#education" className="text-filip-gray hover:text-filip-blue transition-colors" onClick={toggleMenu}>Education</Link>
              <Link to="/#contact" className="text-filip-gray hover:text-filip-blue transition-colors" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
