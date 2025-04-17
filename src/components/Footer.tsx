import { Linkedin, Mail, Globe, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-filip-gray-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Filip Nowicki</h3>
            <p className="text-gray-300">{t('footer.tagline')}</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/filipnowicki" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-filip-blue hover:bg-filip-blue-dark rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:filip.nowicki@gmail.com" 
              className="p-2 bg-filip-blue hover:bg-filip-blue-dark rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://filipnowicki.pl" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-filip-blue hover:bg-filip-blue-dark rounded-full transition-colors"
              aria-label="Website"
            >
              <Globe size={20} />
            </a>
            <a 
              href="https://www.youtube.com/@FilipNowicki" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-filip-blue hover:bg-filip-blue-dark rounded-full transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Filip Nowicki. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
