import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const missionPoints = [
    'Provide authentic and immersive travel experiences',
    'Promote sustainable and responsible tourism',
    'Support local communities and cultures',
    'Ensure safety and comfort for all travelers',
    'Create lasting memories through exceptional service',
  ];

  const coreValues = [
    'Integrity in all our dealings',
    'Passion for travel and exploration',
    'Commitment to customer satisfaction',
    'Respect for local cultures and environment',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black tracking-wider animate-fadeIn">
            WHO WE ARE?
          </h1>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="animate-slideUp">
              <h2 className="text-4xl font-black text-charcoal mb-8 tracking-wider">
                OUR MISSION
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Sri Ram Tour & Travels, we believe that travel is more than just visiting places – 
                it's about creating transformative experiences that broaden horizons, foster understanding, 
                and create lifelong memories.
              </p>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="animate-slideUp">
              <div className="mb-8">
                <img
                  src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Our Team"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-3xl font-bold text-charcoal mb-6">
                Our Core Values
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2010, Sri Ram Tour & Travels has grown from a small family business 
                to one of India's most trusted travel companies. Our commitment to excellence 
                and personalized service has earned us the loyalty of thousands of satisfied travelers.
              </p>
              <ul className="space-y-3">
                {coreValues.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-charcoal mb-8 tracking-wider">
              OUR STORY
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              What started as a dream to share the incredible beauty and rich culture of India 
              has evolved into a mission to provide world-class travel experiences. With over 
              a decade of expertise, we have successfully organized thousands of trips, 
              from intimate family vacations to large group adventures.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of experienced travel professionals brings together local knowledge, 
              international standards, and a genuine passion for hospitality. We take pride 
              in crafting personalized itineraries that cater to diverse interests, budgets, 
              and travel styles.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-slideUp">
              <div className="text-4xl md:text-5xl font-black mb-2">10,000+</div>
              <div className="text-lg">Happy Travelers</div>
            </div>
            <div className="animate-slideUp">
              <div className="text-4xl md:text-5xl font-black mb-2">50+</div>
              <div className="text-lg">Destinations</div>
            </div>
            <div className="animate-slideUp">
              <div className="text-4xl md:text-5xl font-black mb-2">15</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div className="animate-slideUp">
              <div className="text-4xl md:text-5xl font-black mb-2">100%</div>
              <div className="text-lg">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;