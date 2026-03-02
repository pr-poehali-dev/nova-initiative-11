import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatYouGet from '@/components/WhatYouGet';
import Transformation from '@/components/Transformation';
import Cases from '@/components/Cases';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatYouGet />
        <Transformation />
        <Cases />
      </main>
    </>
  );
};

export default Index;