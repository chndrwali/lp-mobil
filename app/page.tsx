import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureSection from '@/components/feature-section';
import CarShowcase from '@/components/car-showcase';
import ModelSection from '@/components/model-section';
import TestimonialSection from '@/components/testimonial-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <CarShowcase />
        <ModelSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
