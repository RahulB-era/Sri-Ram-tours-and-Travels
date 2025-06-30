import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TourCard from '../components/ui/TourCard';
import { tours } from '../data/tours';

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTours = tours.filter(tour =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black tracking-wider animate-fadeIn">
            TOURS
          </h1>
        </div>
      </section>

      {/* Search & Tours Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No tours found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tours;