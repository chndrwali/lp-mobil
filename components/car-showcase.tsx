'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CarShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7 }} className="flex flex-col lg:flex-row items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Luxury Like Never Before</h2>
            <p className="text-gray-600 mb-8">
              Our flagship luxury sedan combines elegant design with powerful performance. Crafted with premium materials and equipped with state-of-the-art technology, it delivers an unparalleled driving experience.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                <span>0-60 mph in just 3.5 seconds</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                <span>Advanced driver assistance systems</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                <span>Premium leather interior with ambient lighting</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                <span>Immersive sound system with 16 speakers</span>
              </li>
            </ul>
            <Button size="lg">Learn More</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.4 }} className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px]">
            <Image src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80" alt="Luxury Sedan" fill className="object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
