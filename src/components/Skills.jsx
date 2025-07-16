import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 95, color: 'primary' },
        { name: 'JavaScript', level: 90, color: 'accent' },
        { name: 'Redux', level: 85, color: 'primary' },
        { name: 'HTML/CSS', level: 90, color: 'accent' },
      ]
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Git', level: 85, color: 'primary' },
        { name: 'Webpack', level: 80, color: 'accent' },
        { name: 'Jest', level: 85, color: 'primary' },
        { name: 'CI/CD', level: 75, color: 'accent' },
      ]
    },
    {
      title: 'Backend & Others',
      skills: [
        { name: 'Node.js', level: 75, color: 'primary' },
        { name: 'REST APIs', level: 85, color: 'accent' },
        { name: 'E2E Testing', level: 80, color: 'primary' },
        { name: 'Agile', level: 85, color: 'accent' },
      ]
    }
  ];

  const additionalSkills = [
    'Lighthouse Optimization',
    'Localization/Internationalization',
    'Performance Profiling',
    'Responsive Design',
    'Cross-browser Compatibility',
    'Code Review',
    'Team Leadership',
    'Mentoring'
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-primary-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-500 mx-auto"></div>
        </motion.div>

        {/* Skill bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-dark-700/50 rounded-2xl p-6 border border-dark-600"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-dark-300 font-medium">{skill.name}</span>
                      <span className={`text-${skill.color}-400 text-sm font-semibold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          skill.color === 'primary' 
                            ? 'from-primary-400 to-primary-600' 
                            : 'from-accent-400 to-accent-600'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-dark-700/50 border border-dark-600 rounded-full text-dark-300 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certifications or achievements section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-6 border border-primary-400/20">
            <h4 className="text-lg font-semibold text-primary-400 mb-3">Performance Optimization</h4>
            <p className="text-dark-300 text-sm">
              Specialized in reducing LCP to under 2 seconds through profiling, Redux optimization, 
              and implementing performance best practices.
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-2xl p-6 border border-accent-400/20">
            <h4 className="text-lg font-semibold text-accent-400 mb-3">Team Leadership</h4>
            <p className="text-dark-300 text-sm">
              Experience mentoring new developers and leading UK AP module scaling initiatives 
              with cross-functional teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;