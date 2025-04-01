// src/routes/about.tsx
import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">About FarmLink</h1>


      <section className="mb-12">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-lg">
          Our mission is to empower Ethiopian farmers by providing access to better markets, resources, and opportunities to grow, sell, and succeed in the agricultural sector.
        </p>
      </section>


      <section className="mb-12">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <p className="mt-4 text-lg">
          FarmLink is powered by a passionate team of agricultural experts, tech developers, and entrepreneurs committed to making a difference in the Ethiopian agricultural sector. Together, we are working to create a brighter future for local farmers.
        </p>
      </section>

     
      </section>
    </div>
  );
}
