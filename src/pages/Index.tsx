import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhoItsFor from '@/components/WhoItsFor';
import WhatYouGet from '@/components/WhatYouGet';
import HowIWork from '@/components/HowIWork';
import Transformation from '@/components/Transformation';
import Contacts from '@/components/Contacts';

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
        <Contacts />
      </main>
    </>
  );
};

export default Index;