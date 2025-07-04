const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919550166967"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>

      {/* Call Button */}
      <a
        href="tel:9550166967"
        className="floating-btn btn-emergency w-14 h-14 flex items-center justify-center"
        title="Call Emergency: 95501 66967"
      >
        <i className="fas fa-phone text-xl"></i>
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="floating-btn bg-primary hover:bg-primary-light text-primary-foreground w-14 h-14 flex items-center justify-center"
        title="Back to Top"
      >
        <i className="fas fa-chevron-up text-xl"></i>
      </button>
    </div>
  );
};

export default FloatingButtons;