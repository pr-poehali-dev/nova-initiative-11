import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhoItsFor from '@/components/WhoItsFor';
import WhatYouGet from '@/components/WhatYouGet';
import HowIWork from '@/components/HowIWork';
import Transformation from '@/components/Transformation';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhoItsFor />
        <WhatYouGet />
        <HowIWork />
        <Transformation />
      </main>
    </>
  );
};

export default Index;