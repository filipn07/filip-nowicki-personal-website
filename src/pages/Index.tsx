import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Smooth scroll to section when clicking on navigation links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Adjust for header height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
