'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              AutoElite
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="hidden md:flex items-center space-x-8">
            <Link href="#models" className="text-gray-700 hover:text-primary transition-colors">
              Models
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </motion.nav>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="hidden md:block">
            <Button>Test Drive</Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-white border-b">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="#models" className="text-gray-700 hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Models
                </Link>
                <Link href="#features" className="text-gray-700 hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Features
                </Link>
                <Link href="#testimonials" className="text-gray-700 hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Testimonials
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  Test Drive
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
