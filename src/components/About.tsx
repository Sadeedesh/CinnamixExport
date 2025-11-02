import { Award, Globe, Leaf, Heart } from 'lucide-react';
import CINNAMIX from "../assets/CINNAMIX.png";
const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest Ceylon cinnamon, ensuring exceptional quality in every shipment.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Trusted export partner delivering to over 50 countries worldwide with reliable logistics.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly farming practices that protect our environment for future generations.',
    },
    {
      icon: Heart,
      title: 'Fair Trade',
      description: 'Supporting local farmers with fair prices and building lasting partnerships in our communities.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-linear-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">About Cinnamix Export</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over two decades of expertise in the cinnamon industry, we've built our reputation on quality,
            reliability, and authentic Ceylon cinnamon that captures the true essence of this precious spice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-900">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2025, Cinnomen Export began as a small family business with a passion for sharing
              the world's finest cinnamon. Today, we're proud to be one of the leading exporters of premium
              Ceylon cinnamon, trusted by wholesalers, retailers, and food manufacturers globally.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey started in the lush cinnamon plantations of Sri Lanka, where we learned the art
              of selecting and processing the highest quality cinnamon. We work directly with experienced
              farmers who have perfected their craft over generations, ensuring every stick, powder, and
              oil meets our exacting standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What sets us apart is our unwavering commitment to authenticity. True Ceylon cinnamon is not
              just a spice—it's a tradition, a heritage, and a symbol of quality that we're honored to share
              with the world.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={CINNAMIX}
                alt="Cinnamon plantation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-600 rounded-2xl -z-10"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-amber-600"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-amber-700" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
