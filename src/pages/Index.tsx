import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  useEffect(() => {
    // Initialize AOS when component mounts
    const initAOS = () => {
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
          easing: 'ease-out-cubic',
        });
      }
    };

    // Check if AOS is loaded, if not wait a bit
    if ((window as any).AOS) {
      initAOS();
    } else {
      setTimeout(initAOS, 100);
    }

    // Refresh AOS on scroll for better performance
    const handleScroll = () => {
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.refresh();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ServiceAreaSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
