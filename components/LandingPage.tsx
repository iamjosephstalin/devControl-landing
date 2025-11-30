import React from 'react';
import Hero from './Hero';
import FeaturesBento from './FeaturesBento';
import DetailedFeatures from './DetailedFeatures';
import TechStackLogos from './TechStackLogos';
import ClientPortalSection from './ClientPortalSection';
import Security from './Security';
import Pricing from './Pricing';
import Testimonials from './Testimonials';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <TechStackLogos />
      <FeaturesBento />
      <ClientPortalSection />
      <DetailedFeatures />
      <Security />
      <Testimonials />
      <Pricing />
    </>
  );
};

export default LandingPage;