
import { Calendar, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="pt-24 pb-12 md:py-32 bg-gradient-to-b from-filip-blue-light to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-filip-gray-dark mb-4">
              Filip Nowicki
            </h1>
            <p className="text-xl md:text-2xl text-filip-gray mb-6">
              {t('hero.subtitle')}
            </p>
            <p className="text-filip-gray mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-filip-blue hover:bg-filip-blue-dark text-white px-6" asChild>
                <a href="https://calendly.com/filip-nowicki/sesjastrategiczna" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  {t('hero.button.schedule')}
                </a>
              </Button>
              <Button variant="outline" className="border-filip-blue text-filip-blue hover:bg-filip-blue-light" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  {t('hero.button.contact')}
                </a>
              </Button>
            </div>
          </div>
          <div className="w-48 h-48 md:w-80 md:h-80 md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQHy092Y8WZaSA/profile-displayphoto-shrink_800_800/B4EZVB6LQYGgAk-/0/1740567525190?e=1750291200&v=beta&t=zngH4aWbh374O76wyM5CNQAX-DsgN0TMNFICvevN56o" 
                alt="Filip Nowicki" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
