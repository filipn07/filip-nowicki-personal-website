
import { Briefcase } from "lucide-react";

interface JobProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const JobCard = ({ title, company, period, description }: JobProps) => {
  return (
    <div className="mb-10">
      <div className="flex items-center mb-3">
        <div className="p-2 bg-blue-100 rounded-full mr-4">
          <Briefcase size={20} className="text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-3">{period}</p>
      <ul className="list-disc list-inside text-gray-600 space-y-1 pl-1">
        {description.map((item, index) => (
          <li key={index} className="text-base">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const jobs = [
    {
      title: "Founder",
      company: "filipnowicki.pl",
      period: "September 2024 - Present",
      description: [
        "Developed and implemented strategies to attract clients for consultations and coaching through engaging content on social media platforms.",
        "Created and delivered workshops focused on client attraction via LinkedIn.",
        "Expanded the online presence and established a community for digital entrepreneurs."
      ]
    },
    {
      title: "Community Creator",
      company: "SubskrypcjePRO.pl",
      period: "June 2023 - Present",
      description: [
        "Advocated for subscription-based business models that enable businesses to achieve predictable revenue streams.",
        "Assisted entrepreneurs in transitioning from traditional service models to scalable subscription frameworks.",
        "Facilitated the introduction of webinar and mentoring programs to educate clients on successful subscription strategies."
      ]
    },
    {
      title: "Mentor and Consultant",
      company: "filipnowicki.com",
      period: "September 2010 - Present",
      description: [
        "Provided consulting services to creators in designing and launching products and scaling subscription models.",
        "Focused on guiding clients through the product validation process and marketing strategy execution."
      ]
    },
    {
      title: "Co-founder, CEO",
      company: "Starfunnel",
      period: "February 2016 - March 2021",
      description: [
        "Led a team dedicated to helping B2B professionals generate leads and acquire new customers through effective marketing funnels.",
        "Oversaw operational strategies and market growth initiatives."
      ]
    },
    {
      title: "Chief Advisor",
      company: "Niezapracowani.pl",
      period: "October 2014 - October 2020",
      description: [
        "Helped busy entrepreneurs reclaim their time while building dream businesses through effective planning and strategy."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {jobs.map((job, index) => (
            <JobCard 
              key={index}
              title={job.title}
              company={job.company}
              period={job.period}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
