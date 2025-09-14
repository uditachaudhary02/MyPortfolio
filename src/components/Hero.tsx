import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Eye, ArrowDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['Python', 'Data Analysis', 'SQL', 'Power BI', 'MongoDB'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--primary) / 0.9), hsl(var(--secondary) / 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Udita Chaudhary
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            Software Engineer | Data Analyst | Python Enthusiast
          </p>

          <div className="h-16 flex items-center justify-center mb-12">
            <div className="text-2xl md:text-3xl font-semibold text-gradient">
              <span className="typing-animation">
                {skills[currentSkill]}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="btn-hero group" href='./assests/DataAnalyst'>
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button className="btn-hero-outline">
              <Eye className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-8 w-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
