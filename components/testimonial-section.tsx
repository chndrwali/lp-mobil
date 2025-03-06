'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Business Executive',
      image: '/placeholder.svg?height=100&width=100',
      quote: "The driving experience is unmatched. From the moment I sat in the driver's seat, I knew this was the car for me. The attention to detail is remarkable.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Tech Entrepreneur',
      image: '/placeholder.svg?height=100&width=100',
      quote: "I've owned luxury vehicles before, but AutoElite has redefined what luxury means. The technology integration is seamless and intuitive.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Architect',
      image: '/placeholder.svg?height=100&width=100',
      quote: "The design philosophy behind these cars is evident in every curve and line. It's not just transportation, it's a masterpiece of engineering.",
      rating: 4,
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
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with AutoElite.
          </motion.p>
        </div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src={testimonial.image || '/placeholder.svg'} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
