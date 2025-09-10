import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  BarChart3, 
  FileSpreadsheet, 
  Brain,
  Server
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Pandas", level: 88 }
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      skills: [
        { name: "Power BI", level: 92 },
        { name: "Excel", level: 85 },
        { name: "Jupyter Notebook", level: 80 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 78 },
        { name: "MySQL", level: 82 },
        { name: "Data Modeling", level: 75 }
      ]
    }
  ];

  const techStack = [
    "Python", "Power BI", "SQL", "MongoDB", "Excel", 
    "Pandas", "Jupyter", "Data Analysis", "MySQL", "Git"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <div className="section-divider max-w-32 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in data analysis and software engineering with hands-on experience in modern technologies
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-portfolio">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tech Stack Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;