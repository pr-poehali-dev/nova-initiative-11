import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/f944b436-aa70-4c49-aebc-ee28570ab2cd/files/24301001-eb53-4182-8954-427ac819feca.jpg',
  'https://cdn.poehali.dev/projects/f944b436-aa70-4c49-aebc-ee28570ab2cd/files/87a32afb-64f6-49a0-9096-89e39ec57284.jpg',
  'https://cdn.poehali.dev/projects/f944b436-aa70-4c49-aebc-ee28570ab2cd/files/014338c7-b7b2-4621-8c19-715c4cf26f92.jpg',
  'https://cdn.poehali.dev/projects/f944b436-aa70-4c49-aebc-ee28570ab2cd/files/e694426f-e593-4012-820f-3db4ce93e59e.jpg',
];

const cards = [
  {
    label: 'Case 01',
    title: 'From chaos to predictable execution',
    text: 'Delivery becomes structured and transparent in months.',
  },
  {
    label: 'Case 02',
    title: 'From scattered initiatives to a focused product portfolio',
    text: 'AI initiatives evaluated and prioritized in 3 months.',
  },
  {
    label: 'Case 03',
    title: 'From idea and budget to a working execution system',
    text: 'Team, ownership and delivery cadence built from scratch.',
  },
  {
    label: 'Case 04',
    title: 'From endless development to real product releases',
    text: 'Business priorities aligned with engineering.',
  },
  {
    label: 'Case 05',
    title: 'From overloaded teams to focused delivery',
    text: 'Scope drop reduced and roadmap becomes predictable.',
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [cardVisible, setCardVisible] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCardVisible(false);
      setTimeout(() => {
        setCardIndex((prev) => (prev + 1) % cards.length);
        setCardVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(cardInterval);
  }, []);

  const card = cards[cardIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/20" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            {/* Photo + Name + title */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out flex items-center gap-6',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white/30 md:h-24 md:w-24">
                <img
                  src="https://cdn.poehali.dev/projects/f944b436-aa70-4c49-aebc-ee28570ab2cd/bucket/289390e4-480e-42f3-ad45-ad88d98be6c9.jpg"
                  alt="Eugene Abramenko"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
                  Eugene Abramenko
                </p>
                <p className="mt-2 text-lg font-light uppercase tracking-[0.25em] text-white/50">
                  IT & Digital Execution Architect
                </p>
              </div>
            </div>

            {/* Rotating info card */}
            <div
              className={cn(
                'transform transition-all duration-500 ease-in-out',
                cardVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              <div className="border-l-2 border-white/30 pl-6">
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/40">
                  {card.label}
                </p>
                <p className="text-xl font-light leading-snug text-white md:text-2xl">
                  {card.title}
                </p>
                {card.text && (
                  <p className="mt-2 text-base font-light text-white/60">
                    {card.text}
                  </p>
                )}
              </div>
            </div>

            {/* CTA */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:em.abramenko@gmail.com"
                  className="inline-block border border-white/30 px-8 py-3 text-sm font-light uppercase tracking-widest text-white transition-all hover:border-white hover:bg-white hover:text-black"
                >
                  Let's Work Together
                </a>
                <a
                  href="https://wa.me/79117821509"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 px-8 py-3 text-sm font-light uppercase tracking-widest text-white/60 transition-all hover:border-white/40 hover:text-white"
                >
                  Text me on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}