import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Heart, Plane } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-dark-300">
              <p className="text-lg leading-relaxed">
                Frontend Developer with <span className="text-primary-400 font-semibold">3+ years of experience</span> building 
                performant, scalable, and user-centric applications using ReactJS, Redux, and JavaScript.
              </p>
              
              <p className="text-lg leading-relaxed">
                A software engineer who finds joy in turning complex problems into clean, scalable code. 
                Driven by curiosity and a love for learning. <span className="text-accent-400">Enjoys traveling</span> and 
                exploring new technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-primary-400">
                <Code className="w-5 h-5" />
                <span>Clean Code Enthusiast</span>
              </div>
              <div className="flex items-center space-x-2 text-accent-400">
                <Heart className="w-5 h-5" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-400">
                <Plane className="w-5 h-5" />
                <span>Travel Lover</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-700/50 rounded-2xl p-8 border border-dark-600"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
                <p className="text-dark-300">Academic Background</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-primary-400 pl-6">
                <h4 className="text-lg font-semibold text-white">
                  B.Tech in Information Science and Engineering
                </h4>
                <p className="text-primary-400 font-medium">
                  Ramaiah Institute of Technology, Bangalore
                </p>
                <p className="text-dark-300 text-sm">2018 – 2022</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-dark-600">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-400">3+</div>
                  <div className="text-sm text-dark-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-400">50+</div>
                  <div className="text-sm text-dark-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;