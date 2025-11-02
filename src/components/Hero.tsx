import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-amber-900">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center bg-[url('https://images.pexels.com/photos/1717768/pexels-photo-1717768.jpeg?auto=compress&cs=tinysrgb&w=1920')]" />
      </div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-amber-300 mr-2" size={32} />
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Cinnamix Export
            </h1>
            <Sparkles className="text-amber-300 ml-2" size={32} />
          </div>

          <p className="text-xl md:text-3xl text-amber-100 mb-4 font-light">
            Premium Ceylon Cinnamon for Global Markets
          </p>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Delivering the finest quality cinnamon from sustainable plantations to your doorstep.
            Experience the authentic taste and aroma of true Ceylon cinnamon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('products')}
              className="group px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center"
            >
              Explore Our Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
