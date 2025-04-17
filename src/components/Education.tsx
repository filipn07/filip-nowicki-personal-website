
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  institutionUrl?: string;
  institutionLogo?: string;
}

const EducationItem = ({ degree, institution, period, institutionUrl, institutionLogo }: EducationItemProps) => {
  return (
    <div className="mb-8 flex">
      <div className="mr-4">
        {institutionLogo ? (
          <img 
            src={institutionLogo} 
            alt={institution} 
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
        ) : (
          <div className="p-3 bg-blue-100 rounded-full">
            <GraduationCap size={24} className="text-blue-600" />
          </div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{degree}</h3>
        <p className="text-blue-600 mb-1">
          {institutionUrl ? (
            <a 
              href={institutionUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {institution}
            </a>
          ) : (
            institution
          )}
        </p>
        <p className="text-sm text-gray-500">{period}</p>
      </div>
    </div>
  );
};

const Education = () => {
  const { t } = useLanguage();
  const educationItems = [
    {
      degree: "MBA in Executive MBA",
      institution: "Kozminski University",
      period: "2006 - 2008",
      institutionUrl: "https://www.linkedin.com/school/akademialeonakozminskiego/",
      institutionLogo: "https://media.licdn.com/dms/image/v2/D4D0BAQGd54A0VaXlOQ/company-logo_400_400/company-logo_400_400/0/1736963892192/akademialeonakozminskiego_logo?e=1750291200&v=beta&t=hc60U9HpmzmM9Ioka_FDCSUVYo0G26IK2UbV76c37_g"
    },
    {
      degree: "Master's in Management",
      institution: "University of Warsaw",
      period: "1993 - 1998",
      institutionUrl: "https://www.linkedin.com/school/uniwersytet-warszawski/",
      institutionLogo: "https://media.licdn.com/dms/image/v2/C560BAQGZOUYrcv_Z4A/company-logo_400_400/company-logo_400_400/0/1631363569068?e=1750291200&v=beta&t=oFU7a1IgZzD8SAeAqCxYaNdD_ehqCEGhfweOv6ViqBU"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('education.title')}</h2>
        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <EducationItem 
              key={index}
              degree={item.degree}
              institution={item.institution}
              period={item.period}
              institutionUrl={item.institutionUrl}
              institutionLogo={item.institutionLogo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
