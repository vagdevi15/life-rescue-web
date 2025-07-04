const WhyChooseUs = () => {
  const features = [
    {
      icon: "fas fa-clock",
      title: "Rapid Response",
      description: "Average response time under 10 minutes in city areas",
      stat: "<10 Min"
    },
    {
      icon: "fas fa-user-md",
      title: "Certified Medical Staff",
      description: "All our EMTs are certified and regularly trained",
      stat: "100% Certified"
    },
    {
      icon: "fas fa-satellite-dish",
      title: "Real-Time GPS Tracking",
      description: "Track your ambulance in real-time for peace of mind",
      stat: "Live Tracking"
    },
    {
      icon: "fas fa-rupee-sign",
      title: "Transparent Pricing",
      description: "No hidden charges, clear pricing structure",
      stat: "Fair Pricing"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Insurance Accepted",
      description: "We work with major insurance providers",
      stat: "Cashless"
    },
    {
      icon: "fas fa-award",
      title: "Quality Assurance",
      description: "ISO certified processes and equipment maintenance",
      stat: "ISO Certified"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient">Sri Mahalaxmi?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing the highest quality emergency medical services with the latest technology and professional care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${feature.icon} text-primary-foreground text-2xl`}></i>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {feature.stat}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20" data-aos="fade-up">
          <div className="bg-gradient-to-r from-primary/5 to-emergency/5 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Trusted by Thousands of Families
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence has earned us the trust of the Hyderabad community.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Emergency Calls</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5 Years</div>
                <div className="text-muted-foreground">Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;