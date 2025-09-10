import { Card } from '@/components/ui/card';
import uditaProfile from '@/assets/udita_portfolio.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="section-divider max-w-32 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="card-portfolio">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I am a <span className="text-primary font-semibold">software engineer</span> with strong proficiency in Python and data analysis. 
                  Skilled in Power BI, SQL, MongoDB, and Excel, I love turning raw data into actionable insights.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  My journey reflects a blend of <span className="text-secondary font-semibold">technical expertise</span>, 
                  problem-solving, and creativity, aiming to build impactful data-driven solutions.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <h4 className="text-2xl font-bold text-primary">1000+</h4>
                    <p className="text-sm text-muted-foreground">Data Points Analyzed</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <h4 className="text-2xl font-bold text-secondary">3+</h4>
                    <p className="text-sm text-muted-foreground">Major Projects</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 animate-pulse"></div>
                <img
                  src={uditaProfile}
                  alt="Udita Chaudhary - Software Engineer"
                  className="relative w-80 h-80 object-cover rounded-full shadow-card border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;