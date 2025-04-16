
import { Mail, Globe, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactItem = ({ icon, title, content, link }: { icon: React.ReactNode, title: string, content: string, link?: string }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="p-3 bg-blue-100 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <ContactItem 
              icon={<Mail size={20} className="text-blue-600" />}
              title="Email"
              content="filip.nowicki@gmail.com"
              link="mailto:filip.nowicki@gmail.com"
            />
            
            <ContactItem 
              icon={<Globe size={20} className="text-blue-600" />}
              title="Websites"
              content="filipnowicki.pl | subskrypcjepro.pl"
              link="https://filipnowicki.pl"
            />
            
            <ContactItem 
              icon={<Calendar size={20} className="text-blue-600" />}
              title="Schedule a Meeting"
              content="Book a free strategic session"
              link="https://calendly.com/filip-nowicki/sesjastrategiczna"
            />
          </div>
          
          <div className="text-center">
            <p className="text-xl text-filip-gray mb-8">
              Ready to transform your business and attract more clients?
            </p>
            <Button className="bg-filip-blue hover:bg-filip-blue-dark text-white px-8 py-6 text-lg" asChild>
              <a 
                href="https://calendly.com/filip-nowicki/sesjastrategiczna" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Your Free Strategic Session
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
