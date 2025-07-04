const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-ambulance text-primary-foreground text-xl"></i>
              </div>
              <div>
                <div className="font-bold text-xl">Sri Mahalaxmi</div>
                <div className="text-sm text-background/70">Ambulance Services</div>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Professional emergency medical services in Hyderabad. We're committed to providing 
              fast, reliable, and life-saving ambulance services with trained EMTs and modern equipment.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/919550166967" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <i className="fab fa-whatsapp text-white"></i>
              </a>
              <a 
                href="tel:9550166967"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors"
              >
                <i className="fas fa-phone text-primary-foreground"></i>
              </a>
              <a 
                href="mailto:bheemanappallimadhu1430@gmail.com"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors"
              >
                <i className="fas fa-envelope text-primary-foreground"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Emergency Contact</h3>
            <div className="space-y-4">
              <div>
                <div className="text-emergency-light font-bold text-xl">24 X 7 EMERGENCY</div>
                <div className="text-sm text-background/70 mb-2">LOCAL & OUT STATION</div>
              </div>
              <div>
                <a 
                  href="tel:9550166967" 
                  className="block text-background hover:text-emergency-light transition-colors font-semibold"
                >
                  <i className="fas fa-phone mr-2"></i>
                  95501 66967
                </a>
              </div>
              <div>
                <a 
                  href="tel:9307284511" 
                  className="block text-background hover:text-emergency-light transition-colors font-semibold"
                >
                  <i className="fas fa-phone mr-2"></i>
                  93072 84511
                </a>
              </div>
              <div className="pt-2">
                <div className="text-sm text-background/70">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Dilsukhnagar, Hyderabad Telangana
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Sri Mahalaxmi Ambulance Services. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-background/60">Managed by: BHIMANAPALLY MADHU</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;