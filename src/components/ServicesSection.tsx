const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-ambulance",
      title: "Emergency Response",
      description: "Immediate medical response for life-threatening emergencies with advanced life support equipment.",
      features: ["<10 min response", "24/7 availability", "Advanced equipment"]
    },
    {
      icon: "fas fa-heart",
      title: "ICU Ambulance",
      description: "Critical care transportation with ventilators, monitors, and experienced medical staff.",
      features: ["Ventilator equipped", "Cardiac monitors", "Expert medical team"]
    },
    {
      icon: "fas fa-wheelchair",
      title: "Non-Emergency Transport",
      description: "Comfortable medical transportation for routine appointments and non-critical transfers.",
      features: ["Scheduled pickups", "Comfortable ride", "Trained attendants"]
    },
    {
      icon: "fas fa-road",
      title: "Inter-City Transfers",
      description: "Safe long-distance medical transportation between cities with continuous monitoring.",
      features: ["Long distance", "Medical monitoring", "Family coordination"]
    },
    {
      icon: "fas fa-users",
      title: "Event Medical Coverage",
      description: "On-site medical support for events, festivals, and large gatherings.",
      features: ["Event standby", "First aid team", "Emergency evacuation"]
    },
    {
      icon: "fas fa-home",
      title: "Home Care Services",
      description: "Medical care and health monitoring services in the comfort of your home.",
      features: ["Home visits", "Health monitoring", "Medication support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive emergency medical services designed to provide immediate, professional care when you need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-primary-foreground text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <i className="fas fa-check text-primary"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full btn-primary py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Emergency CTA */}
        <div className="mt-16 text-center" data-aos="zoom-in">
          <div className="bg-emergency rounded-2xl p-8 md:p-12 shadow-medium">
            <h3 className="text-3xl md:text-4xl font-bold text-emergency-foreground mb-4">
              Emergency? Don't Wait!
            </h3>
            <p className="text-xl text-emergency-foreground/90 mb-8">
              Every second counts in a medical emergency. Our team is ready to respond immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9550166967" 
                className="bg-white text-emergency px-8 py-4 rounded-lg font-bold text-lg shadow-medium hover:shadow-strong transition-all duration-300 flex items-center justify-center gap-3"
              >
                <i className="fas fa-phone"></i>
                Call: 95501 66967
              </a>
              <a 
                href="tel:9307284511" 
                className="bg-white text-emergency px-8 py-4 rounded-lg font-bold text-lg shadow-medium hover:shadow-strong transition-all duration-300 flex items-center justify-center gap-3"
              >
                <i className="fas fa-phone"></i>
                Alt: 93072 84511
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;