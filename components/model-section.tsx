'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

export default function ModelSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const models = [
    {
      id: 1,
      name: 'Elegance Sedan',
      price: 'Starting at $45,000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=700&q=80',
      features: ['Leather Interior', '360° Camera', 'Adaptive Cruise Control', 'Premium Sound System'],
    },
    {
      id: 2,
      name: 'Prestige SUV',
      price: 'Starting at $65,000',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80',
      features: ['All-Wheel Drive', 'Panoramic Sunroof', 'Third Row Seating', 'Advanced Safety Package'],
    },
    {
      id: 3,
      name: 'Velocity Sport',
      price: 'Starting at $85,000',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=700&q=80',
      features: ['500+ Horsepower', 'Carbon Fiber Accents', 'Sport Suspension', 'Performance Brakes'],
    },
  ];

  const nextModel = () => {
    setActiveIndex((prev) => (prev + 1) % models.length);
  };

  const prevModel = () => {
    setActiveIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <section id="models" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-4">
            Our Premium Models
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of luxury vehicles designed to exceed your expectations.
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          <div className="overflow-hidden">
            <motion.div className="flex" animate={{ x: `-${activeIndex * 100}%` }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
              {models.map((model) => (
                <div key={model.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-[250px] md:h-[300px]">
                      <Image src={model.image || '/placeholder.svg'} alt={model.name} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                      <p className="text-primary font-semibold mb-4">{model.price}</p>
                      <div className="mb-6">
                        <h4 className="text-sm uppercase text-gray-500 mb-2 flex items-center">
                          <Info className="h-4 w-4 mr-1" /> Key Features
                        </h4>
                        <ul className="space-y-2">
                          {model.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button onClick={prevModel} className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10" aria-label="Previous model">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextModel} className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10" aria-label="Next model">
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {models.map((_, index) => (
              <button key={index} onClick={() => setActiveIndex(index)} className={`h-2 w-2 rounded-full ${activeIndex === index ? 'bg-primary' : 'bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
