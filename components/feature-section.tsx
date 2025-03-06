'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Battery, Gauge, Shield, Zap } from 'lucide-react';

export default function FeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Gauge className="h-10 w-10 text-primary" />,
      title: 'Superior Performance',
      description: 'Experience unmatched acceleration and handling with our precision-engineered vehicles.',
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Advanced Safety',
      description: "Drive with confidence knowing you're protected by cutting-edge safety technologies.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Innovative Technology',
      description: 'Stay connected with intuitive interfaces and smart features designed around you.',
    },
    {
      icon: <Battery className="h-10 w-10 text-primary" />,
      title: 'Eco-Friendly Options',
      description: 'Choose from our range of electric and hybrid vehicles for sustainable driving.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose AutoElite?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="text-gray-600 max-w-2xl mx-auto">
            We combine luxury, performance, and innovation to deliver an exceptional driving experience.
          </motion.p>
        </div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
