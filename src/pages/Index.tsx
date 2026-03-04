import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Execution Architect for Funded Digital & IT Initiatives</title>
        <meta name="description" content="I build operating systems for funded digital and IT projects — assembling strong teams, defining ownership, and turning budget and ambition into measurable outcomes." />
        <meta property="og:title" content="Execution Architect for Funded Digital & IT Initiatives" />
        <meta property="og:description" content="I build operating systems for funded digital and IT projects — assembling strong teams, defining ownership, and turning budget and ambition into measurable outcomes." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <WhoItsFor />
        <HowIWork />
        <WhatYouGet />
        <Transformation />
        <Contacts />
      </main>
    </>
  );
};

export default Index;