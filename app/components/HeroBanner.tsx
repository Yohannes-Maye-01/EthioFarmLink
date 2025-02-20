import React from 'react';
import { Link } from '@remix-run/react';

export default function HeroBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-32 text-center text-white"
      style={{ backgroundImage: "url('/fields-6558064.jpg')" }} // Corrected image path
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Connect with Farmers and Markets Across Ethiopia
        </h1>
        <p className="text-xl mb-8">
          Empowering local farmers to grow, sell, and succeed in the agriculture marketplace.
        </p>
        <Link
          to="/signup"
          className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition"
        >
          Join Now
        </Link>
      </div>
    </section>
  );
}
