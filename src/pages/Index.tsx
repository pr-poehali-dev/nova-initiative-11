import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhoItsFor from '@/components/WhoItsFor';
import HowIWork from '@/components/HowIWork';
import Transformation from '@/components/Transformation';
import ManifestoSection from '@/components/ManifestoSection';
import CasesWidget from '@/components/CasesWidget';
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
        <ManifestoSection />
        <WhoItsFor />
        <HowIWork />
        <Transformation />
        <CasesWidget />
        <Contacts />
      </main>
    </>
  );
};

export default Index;