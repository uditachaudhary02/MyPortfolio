import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer Intern",
      company: "Dev-evelopers software and solutions",
      period: "June 2025 – Present",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Designed and implemented ETL pipelines to collect, clean, and transform large datasets from multiple sources.",
        "Worked with SQL, Python, and big data tools to ensure efficient data storage, processing, and retrieval.",
        "Developed automated data workflows, reducing manual intervention and improving processing efficiency.",
        "Ensured data accuracy, integrity, and security through validation and monitoring techniques.",
        "Created interactive visualizations and dashboards using Power BI for business insights",
        "Collaborated with cross-functional teams to identify key performance indicators",
        "Delivered actionable insights that supported strategic decision-making processes",
        "Automated data processing workflows to improve efficiency by 40%"
      ],
      technologies: ["Python", "Power BI", "SQL", "Excel", "Data Visualization"],
      achievements: [
        "Improved data processing efficiency by 40%",
        "Created 5+ interactive dashboards",
        "Analyzed datasets with 10K+ records"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Birla Institute of Applied Sciences, Bhimtal",
      grade: "70%",
      period: "2022 – 2026",
      status: "Pursuing"
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "St. Theresa Sr. Sec. School",
      grade: "71%",
      period: "2021 – 2022",
      status: "Completed"
    },
    {
      degree: "Secondary (10th)",
      institution: "St. Theresa Sr. Sec. School",
      grade: "82%",
      period: "2019 – 2020",
      status: "Completed"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience & Education
          </h2>
          <div className="section-divider max-w-32 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="card-portfolio">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-primary">{exp.title}</h4>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {exp.type}
                      </Badge>
                    </div>
                    <h5 className="text-lg font-semibold text-secondary mb-2">{exp.company}</h5>
                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-semibold mb-3">Key Responsibilities</h6>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h6 className="font-semibold mb-3">Key Achievements</h6>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div>
                      <h6 className="font-semibold mb-3">Technologies Used</h6>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-muted"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-secondary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-skill">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{edu.period}</span>
                        <Badge variant={edu.status === 'Pursuing' ? 'default' : 'secondary'} className="text-xs">
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{edu.grade}</div>
                      <div className="text-xs text-muted-foreground">Grade</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;