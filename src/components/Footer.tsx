import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Main Footer Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-4">Udita Chaudhary</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Transforming data into insights, one project at a time. 
              Always excited to collaborate on meaningful work.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
              <span>fueled by</span>
              <Coffee className="h-4 w-4 text-amber-500" />
            </div>
          </div>

          {/* Divider */}
          <div className="section-divider mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; {currentYear} Udita Chaudhary. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Designed & Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;