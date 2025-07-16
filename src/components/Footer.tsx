import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-dark-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary-400" />
            <span>by Sainya Goyal</span>
          </div>
          
          <div className="text-dark-400 text-sm">
            © {new Date().getFullYear()} Sainya Goyal. All rights reserved.
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-dark-800 text-center">
          <p className="text-dark-400 text-sm">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;