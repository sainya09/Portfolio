import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Zap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Engineer',
      period: 'Jan 2024 – Present',
      location: 'Current Position',
      achievements: [
        'Integrated central unit test framework using Jest',
        'Reduced LCP to <2s using profiling and Redux optimization',
        'Built multi-vendor batch payment system (50% faster)',
        'Led UK AP module scaling',
        'Mentored new developers',
        'Created configurable Journal Entry tabs'
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: 'primary'
    },
    {
      title: 'Associate Software Engineer',
      period: 'Jul 2022 – Dec 2023',
      location: 'Previous Role',
      achievements: [
        'Designed configurable invoice workflow with tracking',
        'Enabled bulk invoice posting (75% more efficient)',
        'Localization for UK and France',
        'Enhanced Form1099 reporting'
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'accent'
    },
    {
      title: 'Internships & Projects',
      period: '2021 – 2022',
      location: 'Learning Phase',
      achievements: [
        'ReactJS Food Delivery App development',
        'Drag-Drop Onboarding system implementation',
        'Login/Signup systems with authentication',
        'Various frontend development projects'
      ],
      icon: <Zap className="w-6 h-6" />,
      color: 'primary'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="text-primary-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-400 to-accent-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-${exp.color}-400 border-4 border-dark-900 z-10`}></div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-dark-800/50 rounded-2xl p-6 border border-dark-600 hover:border-primary-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${exp.color}-400 to-${exp.color === 'primary' ? 'accent' : 'primary'}-500 rounded-lg flex items-center justify-center text-white`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-dark-300">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-dark-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${exp.color}-400 mt-2 flex-shrink-0`}></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-dark-800/30 rounded-2xl p-6 border border-dark-700">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-primary-400 mb-2">75%</div>
            <div className="text-dark-300">Performance Improvement</div>
          </div>

          <div className="text-center bg-dark-800/30 rounded-2xl p-6 border border-dark-700">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-accent-400 mb-2">50%</div>
            <div className="text-dark-300">Faster Processing</div>
          </div>

          <div className="text-center bg-dark-800/30 rounded-2xl p-6 border border-dark-700">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-primary-400 mb-2">5+</div>
            <div className="text-dark-300">Developers Mentored</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;