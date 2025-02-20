import React from 'react';
import { Link } from '@remix-run/react';
import HeroBanner from '~/components/HeroBanner'; // Import Hero Banner

export default function Index() {
  return (
    <div>    
      {/* Hero Banner Section */}
      <HeroBanner />
    </div>
  );
}
