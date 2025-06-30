import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Button from '../components/ui/Button';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black tracking-wider animate-fadeIn">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slideUp">
              <h2 className="text-4xl font-black text-charcoal mb-8 tracking-wider">
                WE'RE READY, LET'S TALK.
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="animate-slideUp">
              <h3 className="text-3xl font-black text-charcoal mb-8 tracking-wider">
                CONTACT INFO
              </h3>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Address</h4>
                    <p className="text-gray-600">
                      Tugalkabad Extn. New Delhi - 110019
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Email</h4>
                    <p className="text-gray-600">
                      ayandasn4@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Phone</h4>
                    <p className="text-gray-600 mb-4">
                      +91 9818211863<br />
                      +91 8595498226
                    </p>
                    <Button 
                      variant="icon" 
                      className="bg-primary hover:bg-red-700 mr-4"
                      as="a"
                      href="tel:+919818211863"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      CALL US
                    </Button>
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <Button 
                    variant="icon" 
                    className="bg-whatsapp hover:bg-green-600"
                    as="a"
                    href="https://wa.me/919818211863"
                    target="_blank"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WHATSAPP
                  </Button>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="font-bold text-charcoal mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-charcoal mb-16 tracking-wider">
            FIND US HERE
          </h2>
          <div className="bg-gray-300 h-96 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-gray-600 text-xl">Interactive Map Would Load Here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;