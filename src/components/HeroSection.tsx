import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    // Initialize AOS
    const AOS = (window as any).AOS;
    if (AOS) {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient w-full">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              24/7 Emergency
              <span className="block text-emergency-light">Ambulance Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Fast, Reliable & Life-Saving
            </p>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-lg mx-auto lg:mx-0">
              Providing medical response that saves lives in critical moments. Professional EMTs, GPS tracking, and fully equipped ambulances available 24/7.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
              <a 
                href="tel:9550166967" 
                className="btn-emergency px-8 py-4 rounded-lg font-semibold text-lg shadow-medium hover:shadow-strong transition-all duration-300 flex items-center justify-center gap-3"
              >
                <i className="fas fa-phone"></i>
                Call Now: 95501 66967
              </a>
              <a 
                href="https://wa.me/919550166967" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-medium hover:shadow-strong transition-all duration-300 flex items-center justify-center gap-3"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div className="text-primary-foreground/90">
                <div className="text-2xl md:text-3xl font-bold text-emergency-light">24/7</div>
                <div className="text-sm">Available</div>
              </div>
              <div className="text-primary-foreground/90">
                <div className="text-2xl md:text-3xl font-bold text-emergency-light">&lt;10</div>
                <div className="text-sm">Min Response</div>
              </div>
              <div className="text-primary-foreground/90">
                <div className="text-2xl md:text-3xl font-bold text-emergency-light">100%</div>
                <div className="text-sm">GPS Tracked</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative" data-aos="fade-left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&fit=crop&crop=faces"
                alt="Emergency ambulance with flashing lights"
                className="w-full rounded-2xl shadow-strong"
              />
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-emergency rounded-full p-4 shadow-medium animate-pulse">
                <i className="fas fa-heartbeat text-emergency-foreground text-2xl"></i>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-full p-4 shadow-medium">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
};

export default HeroSection;