'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [currentCar, setCurrentCar] = useState(0);
  const cars = [
    {
      name: 'Luxury Sedan',
      description: 'Experience unparalleled comfort and style',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
      color: '#3B82F6',
    },
    {
      name: 'Premium SUV',
      description: 'Conquer any terrain with confidence',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      color: '#10B981',
    },
    {
      name: 'Electric Future',
      description: 'Sustainable driving without compromise',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80',
      color: '#6366F1',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCar((prev) => (prev + 1) % cars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cars.length]);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Drive Your Dreams With <span className="text-primary">AutoElite</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">Discover our exclusive collection of premium vehicles designed for those who demand excellence.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                Explore Models
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Book Test Drive
              </Button>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px]">
            {cars.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentCar === index ? 1 : 0,
                  x: currentCar === index ? 0 : 100,
                  zIndex: currentCar === index ? 10 : 0,
                }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image src={car.image || '/placeholder.svg'} alt={car.name} fill className="object-contain" priority={index === 0} />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentCar === index ? 1 : 0,
                    y: currentCar === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-4"
                >
                  <h3 className="text-2xl font-bold" style={{ color: car.color }}>
                    {car.name}
                  </h3>
                  <p className="text-gray-700">{car.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
