import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface TourCardProps {
  tour: {
    id: string;
    title: string;
    description: string;
    image: string;
    slug: string;
  };
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-slideUp">
      <div className="relative overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white px-3 py-1 text-xs font-bold rounded-full">
            TOURS
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {tour.description}
        </p>
        <Link
          to={`/tours/${tour.slug}`}
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-red-700 transition-colors"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default TourCard;