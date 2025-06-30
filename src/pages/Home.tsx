import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import TourCard from '../components/ui/TourCard';
import ContactForm from '../components/ui/ContactForm';
import { tours } from '../data/tours';

const Home = () => {
  const trendingTours = tours.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white animate-fadeIn">
          <p className="text-xl md:text-2xl font-medium mb-4">
            Explore the Colourful World of
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-wider">
            INDIA
          </h1>
          <Button as={Link} to="/tours" size="lg">
            BOOK NOW
          </Button>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Quote className="w-16 h-16 text-gray-200 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl text-charcoal leading-relaxed mb-8">
              "Travel makes one modest. You see what a tiny place you occupy in the world."
            </blockquote>
            <cite className="text-lg text-gray-600 font-medium">
              – Gustave Flaubert, Author
            </cite>
          </div>
        </div>
      </section>

      {/* Trending Tours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-charcoal mb-16 tracking-wider">
            TRENDING TOURS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {trendingTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore India Parallax */}
      <section 
        className="py-32 relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-wider">
              DISCOVER INCREDIBLE INDIA
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              From the snow-capped Himalayas to the sun-kissed beaches of Goa, 
              from ancient temples to modern metropolises, India offers an 
              unparalleled diversity of experiences that will leave you spellbound.
            </p>
            <Button variant="secondary" as={Link} to="/about" className="text-white hover:text-gray-200">
              Learn More <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Tours & Adventure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideUp">
              <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-8 tracking-wider">
                UPCOMING TOURS & ADVENTURE
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Embark on thrilling adventures across India's most spectacular destinations. 
                From trekking in the Himalayas to wildlife safaris in national parks, 
                we offer carefully curated experiences that combine excitement with cultural immersion.
              </p>
              <Button as={Link} to="/tours" size="lg">
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                alt="Adventure 1"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                alt="Adventure 2"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                alt="Adventure 3"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                alt="Adventure 4"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center text-charcoal mb-16 tracking-wider">
              GET IN TOUCH
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  WE'RE READY, LET'S TALK.
                </h3>
                <ContactForm />
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-charcoal mb-4">CONTACT INFO</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600">Address:</p>
                      <p className="font-medium">123 Travel Street, Tourism District</p>
                      <p className="font-medium">New Delhi - 110001</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Email:</p>
                      <p className="font-medium">info@sriramtours.com</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Phone:</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button 
                    variant="icon" 
                    className="bg-primary hover:bg-red-700"
                    as="a"
                    href="tel:+919876543210"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    CALL US
                  </Button>
                  <Button 
                    variant="icon" 
                    className="bg-whatsapp hover:bg-green-600"
                    as="a"
                    href="https://wa.me/919876543210"
                    target="_blank"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WHATSAPP
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;