import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const keywords = ['ReactJS', 'Performance', 'UX', 'Scalable Apps'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              SG
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
              Sainya
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-dark-300 max-w-4xl mx-auto">
            <p className="mb-4">
              A Frontend Developer turning complex problems into elegant, scalable solutions with{' '}
              <span className="text-primary-400 font-semibold">ReactJS</span>.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-lg">
              <span>Specializing in</span>
              <span className="text-primary-400 font-semibold min-w-[140px] text-left">
                {keywords[currentKeyword]}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a
              href="/resume_sainya_goyal.pdf"
              download
              className="border-2 border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Download className="inline-block w-5 h-5 mr-2" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-dark-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;