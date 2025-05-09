import AboutUsSection from '@/components/sections/about-us-section';
import WhatWeDoSection from '@/components/sections/what-we-do-section';
import WhereAreWeSection from '@/components/sections/where-are-we-section';
import VolunteerFormSection from '@/components/sections/volunteer-form-section';
import HeroSection from '@/components/sections/hero-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUsSection />
      <WhatWeDoSection />
      <WhereAreWeSection />
      <VolunteerFormSection />
    </div>
  );
}
