const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Sri Mahalaxmi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted medical emergency services provider in Hyderabad, committed to saving lives with modern equipment and professional care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop&crop=faces"
              alt="Professional paramedics providing emergency medical care"
              className="w-full rounded-2xl shadow-medium"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Modern Emergency Medical Services
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Sri Mahalaxmi Ambulance Services, we understand that every second counts in a medical emergency. 
              Our commitment to excellence has made us a trusted name in Hyderabad's emergency medical services.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-primary-foreground"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">GPS Tracking</h4>
                  <p className="text-muted-foreground text-sm">Real-time location tracking for faster response times and family peace of mind.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user-md text-primary-foreground"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Trained EMTs</h4>
                  <p className="text-muted-foreground text-sm">Certified emergency medical technicians available 24/7 for professional care.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-virus text-primary-foreground"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">COVID-19 Safe</h4>
                  <p className="text-muted-foreground text-sm">Complete sanitization protocols and PPE equipment for safe transportation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-heart text-primary-foreground"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">ICU Equipped</h4>
                  <p className="text-muted-foreground text-sm">Advanced life support systems for critical patient transportation.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Lives Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5 Min</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;