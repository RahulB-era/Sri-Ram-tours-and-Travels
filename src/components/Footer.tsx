import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-2">
          <div className="text-sm">
            <p>Tugalkabad Extn. New Delhi - 110019</p>
            <p>Phone: +91 9818211863 | Email: ayandasn4@gmail.com</p>
          </div>
          <div className="text-sm">
            <p>Alternate Contact: +91 8595498226</p>
          </div>
          <div className="text-sm flex items-center justify-center gap-1 pt-4 border-t border-gray-800">
            <span>Created with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>by Rahul Bera</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;