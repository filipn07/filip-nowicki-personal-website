
import { Book } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PublicationProps {
  title: string;
  publisher: string;
  year: string;
  link?: string;
}

const PublicationItem = ({ title, publisher, year, link }: PublicationProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6 flex items-start">
      <div className="p-3 bg-blue-100 rounded-full mr-4 mt-1">
        <Book size={20} className="text-blue-600" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {link ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Publisher:</span> {publisher}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Published:</span> {year}
        </p>
      </div>
    </div>
  );
};

const Publications = () => {
  const { t } = useLanguage();
  const publications = [
    {
      title: "Niezapracowani. Jak zbudować biznes marzeń i jeździć na wakacje 7 razy w roku.",
      publisher: "PWN",
      year: "2015",
      link: "https://ksiegarnia.pwn.pl/Niezapracowani,84892617,p.html"
    }
  ];

  return (
    <section id="publications" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('publications.title')}</h2>
        <div className="max-w-3xl mx-auto">
          {publications.map((publication, index) => (
            <PublicationItem 
              key={index}
              title={publication.title}
              publisher={publication.publisher}
              year={publication.year}
              link={publication.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
