
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('about.title')}</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            {t('about.p1')}
          </p>
          <p className="text-lg text-gray-600 mb-6">
            {t('about.p2')}
          </p>
          <p className="text-lg text-gray-600">
            {t('about.p3')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
