const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Dilsukhnagar, Hyderabad",
      rating: 5,
      text: "When my father had a heart attack, Sri Mahalaxmi ambulance reached us within 8 minutes. The EMT team was professional and kept us informed throughout. They truly saved his life.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      location: "Kukatpally, Hyderabad",
      rating: 5,
      text: "Excellent service during my pregnancy emergency. The ambulance was clean, well-equipped, and the staff was very caring. The GPS tracking helped my family know exactly where we were.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b131?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mohammed Ali",
      location: "Secunderabad, Hyderabad",
      rating: 5,
      text: "Used their inter-city service to transport my mother to Chennai. The journey was smooth, continuous monitoring was provided, and the pricing was very reasonable. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real families who trusted us in their time of need.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-500"></i>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-primary rounded-2xl p-8 md:p-12 shadow-medium">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Hundreds of Satisfied Families
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Experience the same professional care and reliability that our patients trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9550166967" 
                className="bg-emergency hover:bg-emergency-light text-emergency-foreground px-8 py-4 rounded-lg font-bold text-lg shadow-medium hover:shadow-strong transition-all duration-300 flex items-center justify-center gap-3"
              >
                <i className="fas fa-phone"></i>
                Call Now
              </a>
              <a 
                href="https://wa.me/919550166967" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-medium hover:shadow-strong transition-all duration-300 flex items-center justify-center gap-3"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;