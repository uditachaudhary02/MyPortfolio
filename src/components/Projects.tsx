import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Student Feedback Form Analysis",
      description: "Comprehensive analysis of 1000+ student feedback responses using Python, Power BI, and Excel. Built interactive dashboards providing actionable insights for educational improvement.",
      technologies: ["Python", "Power BI", "Excel", "Pandas", "Data Visualization"],
      features: [
        "Analyzed 1000+ student responses",
        "Interactive Power BI dashboards",
        "Statistical trend analysis",
        "Automated reporting system"
      ],
      github: "#",
      demo: "#",
      type: "Data Analysis"
    },
    {
      title: "Walmart Sales Data Analysis",
      description: "In-depth time-series and trend analysis of Walmart sales data. Created comprehensive Power BI dashboards for performance tracking and seasonal insights discovery.",
      technologies: ["Python", "Power BI", "SQL", "Time Series", "Business Intelligence"],
      features: [
        "Time-series trend analysis",
        "Seasonal pattern identification",
        "Performance tracking dashboards",
        "Revenue optimization insights"
      ],
      github: "#",
      demo: "#",
      type: "Business Intelligence"
    },
    {
      title: "Telecom Churn Analysis",
      description: "Customer retention analysis using Python and SQL to identify churn patterns. Developed visual storytelling dashboards in Power BI for strategic decision-making.",
      technologies: ["Python", "SQL", "Power BI", "Machine Learning", "Predictive Analytics"],
      features: [
        "Customer churn prediction",
        "Retention strategy insights",
        "Risk factor identification",
        "Visual storytelling dashboards"
      ],
      github: "#",
      demo: "#",
      type: "Predictive Analytics"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <div className="section-divider max-w-32 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing impactful data-driven solutions and analytical insights
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-portfolio group">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {project.type}
                  </Badge>
                  <BarChart3 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-secondary/10 text-secondary border-secondary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary-hover">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;