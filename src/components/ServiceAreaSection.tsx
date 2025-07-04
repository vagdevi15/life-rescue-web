const ServiceAreaSection = () => {
  const serviceAreas = [
    "Dilsukhnagar", "Kukatpally", "Secunderabad", "Gachibowli", 
    "Hitech City", "Madhapur", "Ameerpet", "Jubilee Hills",
    "Banjara Hills", "Kondapur", "Miyapur", "LB Nagar"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Service <span className="text-gradient">Coverage Area</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide emergency medical services across Hyderabad and surrounding areas with rapid response capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Map */}
          <div data-aos="fade-right">
            <div className="bg-card rounded-2xl p-6 shadow-medium">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Our Coverage Map
              </h3>
              
              {/* Embedded Google Map */}
              <div className="relative h-96 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.5!2d78.3540038!3d17.4599585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Mahalaxmi Ambulance Service Coverage Area"
                ></iframe>
                
                {/* Overlay info */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emergency rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Coverage</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span className="font-semibold">Headquarters</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dilsukhnagar, Hyderabad, Telangana
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <i className="fas fa-clock text-green-500"></i>
                  <span className="text-green-600 font-medium">Currently Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Areas We Serve
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary-foreground text-sm"></i>
                  </div>
                  <span className="font-medium text-card-foreground">{area}</span>
                </div>
              ))}
            </div>

            {/* Response Times */}
            <div className="bg-gradient-to-r from-primary/10 to-emergency/10 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Average Response Times
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">City Center</span>
                  <span className="font-bold text-primary">5-8 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Suburban Areas</span>
                  <span className="font-bold text-primary">8-12 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Outskirts</span>
                  <span className="font-bold text-primary">12-15 minutes</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;