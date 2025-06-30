import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, Facebook, Twitter, Share } from 'lucide-react';
import Button from '../components/ui/Button';
import TourCard from '../components/ui/TourCard';
import { tours } from '../data/tours';

const TourDetail = () => {
  const { slug } = useParams();
  const tour = tours.find(t => t.slug === slug);
  const relatedTours = tours.filter(t => t.slug !== slug).slice(0, 3);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-charcoal mb-4">Tour Not Found</h1>
          <Link to="/tours" className="text-primary hover:text-red-700">
            Return to Tours
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-end bg-cover bg-center"
        style={{
          backgroundImage: `url("${tour.image}")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pb-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-wider">
            {tour.title.toUpperCase()}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          {/* Post Meta */}
          <div className="mb-8 text-gray-600">
            <span>Posted on December 1, 2024</span>
            <span className="mx-2">•</span>
            <Link to="#comments" className="text-primary hover:text-red-700">
              No Comments
            </Link>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {tour.description}
            </p>
            
            <div className="my-8">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Discover the breathtaking beauty and rich cultural heritage of {tour.title}. 
              Our carefully crafted itinerary ensures you experience the best this destination 
              has to offer, from iconic landmarks to hidden gems known only to locals.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you're seeking adventure, relaxation, or cultural immersion, 
              this tour provides the perfect blend of experiences. Our expert guides 
              will share fascinating stories and insights that bring each location to life.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button as={Link} to="/contact" size="lg">
              GET IN CONTACT WITH US
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

          {/* Social Sharing */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200">
            <span className="font-bold text-charcoal">SHARE:</span>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-whatsapp text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div id="comments" className="mb-16">
            <h3 className="text-3xl font-bold text-charcoal mb-8">LEAVE A COMMENT</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="comment-name" className="block text-charcoal font-medium mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="comment-name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="comment-email" className="block text-charcoal font-medium mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="comment-email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="comment-message" className="block text-charcoal font-medium mb-2">
                  Comment <span className="text-primary">*</span>
                </label>
                <textarea
                  id="comment-message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical"
                ></textarea>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="save-info" className="w-4 h-4 text-primary" />
                <label htmlFor="save-info" className="text-gray-700">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
              <Button type="submit" size="lg">
                POST COMMENT
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-charcoal mb-16 tracking-wider">
            RELATED POSTS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetail;