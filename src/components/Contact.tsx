import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone,
  Send,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "udita.chaudhary217@email.com",
      href: "mailto:uditachaudhary217@email.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/udita-chaudhary/",
      href: "https://linkedin.com/in/udita-chaudhary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/uditachaudhary02",
      href: "https://github.com/uditachaudhary02"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Haldwani, Uttarakhand, India",
      href: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Use Formspree for sending emails without backend
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Formspree endpoint (replace with your own if you want)
    const endpoint = "https://formspree.io/f/xwkgyyqg";
    const res = await fetch(endpoint, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (res.ok) {
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      toast({
        title: "Error sending message.",
        description: "Please try again later or email directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <div className="section-divider max-w-32 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next data-driven project? Let's discuss how we can turn your data into actionable insights.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Card className="card-portfolio mb-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations in data analysis and software engineering. Feel free to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-primary hover:text-primary-hover transition-colors duration-300 font-medium"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Areas of Interest</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Data Analysis", "Python Development", "Power BI", "Business Intelligence", "Machine Learning", "SQL Optimization"].map((interest, index) => (
                      <Badge key={index} variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="card-portfolio">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-success mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-primary/20 focus:border-primary transition-colors duration-300"
                          placeholder="Your full name"
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-primary/20 focus:border-primary transition-colors duration-300"
                          placeholder="your.email@example.com"
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-primary/20 focus:border-primary transition-colors duration-300"
                        placeholder="What's this about?"
                        autoComplete="off"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-primary/20 focus:border-primary transition-colors duration-300"
                        placeholder="Tell me about your project or how I can help..."
                        autoComplete="off"
                      />
                    </div>

                    <Button type="submit" className="w-full btn-hero group">
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;