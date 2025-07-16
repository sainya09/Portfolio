import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Brain, Leaf, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProject = {
    title: "Farmer's Assistance System for Disease Detection and Classification",
    description: "An AI-powered system built using Convolutional Neural Networks (CNNs) to help farmers identify diseases in apple leaves. The system classifies images into healthy, rust, scab, or multiple disease categories.",
    technologies: ['Python', 'TensorFlow', 'DenseNet121', 'ResNet50', 'InceptionV3', 'CNN', 'Image Processing'],
    features: [
      'Built using advanced CNN architectures (DenseNet121, ResNet50, InceptionV3)',
      'Classified apple leaf images into healthy/rust/scab/multiple categories',
      'Achieved 89.01% accuracy on dataset of 1,821 images',
      'Implemented data augmentation and preprocessing techniques',
      'User-friendly interface for farmers to upload and analyze images'
    ],
    metrics: {
      accuracy: '89.01%',
      dataset: '1,821 images',
      models: '3 CNN architectures'
    },
    icon: <Brain className="w-8 h-8" />,
    color: 'primary'
  };

  const additionalProjects = [
    {
      title: 'ReactJS Food Delivery App',
      description: 'Full-featured food delivery application with real-time order tracking and payment integration.',
      technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB'],
      icon: <Leaf className="w-6 h-6" />,
      color: 'accent'
    },
    {
      title: 'Drag-Drop Onboarding System',
      description: 'Interactive onboarding system with drag-and-drop functionality for better user experience.',
      technologies: ['React.js', 'HTML5 Drag API', 'CSS3', 'JavaScript'],
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'primary'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-500 mx-auto"></div>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-dark-800/80 to-dark-700/80 rounded-3xl p-8 border border-dark-600 hover:border-primary-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${featuredProject.color}-400 to-accent-500 rounded-2xl flex items-center justify-center text-white`}>
                    {featuredProject.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{featuredProject.title}</h3>
                    <p className="text-primary-400 font-medium">AI/ML Project</p>
                  </div>
                </div>

                <p className="text-dark-300 text-lg leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                <div className="space-y-3 mb-6">
                  {featuredProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0"></div>
                      <span className="text-dark-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-600/50 border border-dark-500 rounded-full text-xs text-dark-300 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center bg-dark-700/50 rounded-xl p-4 border border-dark-600">
                    <div className="text-2xl font-bold text-primary-400 mb-1">
                      {featuredProject.metrics.accuracy}
                    </div>
                    <div className="text-xs text-dark-300">Accuracy</div>
                  </div>
                  <div className="text-center bg-dark-700/50 rounded-xl p-4 border border-dark-600">
                    <div className="text-2xl font-bold text-accent-400 mb-1">
                      {featuredProject.metrics.dataset}
                    </div>
                    <div className="text-xs text-dark-300">Dataset Size</div>
                  </div>
                  <div className="text-center bg-dark-700/50 rounded-xl p-4 border border-dark-600">
                    <div className="text-2xl font-bold text-primary-400 mb-1">
                      {featuredProject.metrics.models}
                    </div>
                    <div className="text-xs text-dark-300">CNN Models</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-6 border border-primary-400/20">
                  <h4 className="text-lg font-semibold text-white mb-3">Project Impact</h4>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    This system helps farmers quickly identify plant diseases, potentially saving crops 
                    and improving agricultural productivity through early detection and classification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-dark-800/50 rounded-2xl p-6 border border-dark-600 hover:border-primary-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${project.color}-400 to-${project.color === 'primary' ? 'accent' : 'primary'}-500 rounded-lg flex items-center justify-center text-white`}>
                    {project.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                </div>

                <p className="text-dark-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-dark-600/50 border border-dark-500 rounded-full text-xs text-dark-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-accent-400 hover:text-accent-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Future projects note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-6 border border-primary-400/20">
            <p className="text-dark-300">
              More exciting projects coming soon! Stay tuned for updates on my latest work in 
              <span className="text-primary-400"> React.js</span>, 
              <span className="text-accent-400"> performance optimization</span>, and 
              <span className="text-primary-400"> innovative web solutions</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;