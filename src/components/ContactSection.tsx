import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const whatsappMessage = `Hello, I'm ${formData.name}. Phone: ${formData.phone}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919550166967?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need immediate assistance or have questions? We're here to help 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-8">
              {/* Emergency Contact */}
              <div className="bg-emergency rounded-xl p-6 shadow-medium">
                <h4 className="text-xl font-bold text-emergency-foreground mb-4 flex items-center gap-3">
                  <i className="fas fa-exclamation-triangle"></i>
                  Emergency Hotline
                </h4>
                <div className="space-y-3">
                  <a 
                    href="tel:9550166967" 
                    className="flex items-center gap-4 text-emergency-foreground hover:text-emergency-foreground/80 transition-colors"
                  >
                    <i className="fas fa-phone text-xl"></i>
                    <div>
                      <div className="font-bold text-xl">95501 66967</div>
                      <div className="text-sm opacity-90">Primary Emergency Line</div>
                    </div>
                  </a>
                  <a 
                    href="tel:9307284511" 
                    className="flex items-center gap-4 text-emergency-foreground hover:text-emergency-foreground/80 transition-colors"
                  >
                    <i className="fas fa-phone text-xl"></i>
                    <div>
                      <div className="font-bold text-xl">93072 84511</div>
                      <div className="text-sm opacity-90">Alternative Emergency Line</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Regular Contact */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-primary-foreground"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-card-foreground mb-2">Email</h5>
                    <a 
                      href="mailto:bheemanappallimadhu1430@gmail.com"
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      bheemanappallimadhu1430@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary-foreground"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-card-foreground mb-2">Address</h5>
                    <p className="text-muted-foreground">
                      Dilsukhnagar, Hyderabad<br />
                      Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <i className="fab fa-whatsapp text-white"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-card-foreground mb-2">WhatsApp</h5>
                    <a 
                      href="https://wa.me/919550166967" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-500 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-card rounded-2xl p-8 shadow-medium">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background resize-none"
                    placeholder="Describe your requirements or ask any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 rounded-lg font-semibold text-lg shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  Send Message via WhatsApp
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  For emergencies, please call directly: 
                  <a href="tel:9550166967" className="text-emergency font-bold ml-1">
                    95501 66967
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;