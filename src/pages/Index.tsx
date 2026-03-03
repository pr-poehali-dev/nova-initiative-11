import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhoItsFor from '@/components/WhoItsFor';
import WhatYouGet from '@/components/WhatYouGet';
import Transformation from '@/components/Transformation';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhoItsFor />
        <WhatYouGet />
        <Transformation />
      </main>
    </>
  );
};

export default Index;