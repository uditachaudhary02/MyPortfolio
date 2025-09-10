import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Heart, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Secretary, Fine Arts Club",
      organization: "Birla Institute of Applied Sciences",
      description: "Led a team of 140+ students in organizing cultural events and fine arts activities. Managed event coordination, team leadership, and creative direction.",
      impact: "140+ Students Led",
      icon: Users,
      category: "Leadership",
      period: "2025-2026"
    },
    {
      title: "NSS Volunteer",
      organization: "National Service Scheme",
      description: "Actively participated in community service initiatives for 2 years. Engaged in social welfare activities and community development programs.",
      impact: "2 Years Service",
      icon: Heart,
      category: "Community Service",
      period: "2024-2025"
    },
    {
      title: "University-Level Long Jump",
      organization: "Inter-University Sports Competition",
      description: "Secured 2nd place in University-Level Long Jump competition, demonstrating athletic excellence and competitive spirit.",
      impact: "2nd Place",
      icon: Trophy,
      category: "Sports",
      period: "2023-2024"
    }
  ];

  const leadership = [
    {
      skill: "Team Leadership",
      description: "Led diverse teams of 100+ members"
    },
    {
      skill: "Event Management",
      description: "Organized 10+ successful cultural events"
    },
    {
      skill: "Community Engagement",
      description: "2 years of active social service"
    },
    {
      skill: "Public Speaking",
      description: "Regular presentations and team coordination"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Achievements & Leadership
          </h2>
          <div className="section-divider max-w-32 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Demonstrating leadership, community service, and excellence beyond academics
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Major Achievements */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="card-portfolio group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {achievement.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{achievement.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-secondary mb-3">
                      {achievement.organization}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-4 py-2 border border-primary/20">
                      <Award className="h-4 w-4 text-primary mr-2" />
                      <span className="font-semibold text-primary">{achievement.impact}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Leadership Skills */}
          <Card className="card-portfolio">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Leadership & Soft Skills</h3>
              <p className="text-muted-foreground">
                Developed through hands-on experience in team management and community service
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((skill, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{skill.skill}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;