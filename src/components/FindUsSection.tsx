import { MapPin, Phone, Mail, Clock, HelpCircle } from 'lucide-react';
import { Language } from '../types';

interface FindUsSectionProps {
  language: Language;
}

export default function FindUsSection({ language }: FindUsSectionProps) {
  
  const schedules = [
    { day: language === 'pl' ? 'Poniedziałek' : 'Monday', hours: language === 'pl' ? 'Zamknięte (Odpoczynek)' : 'Closed (Rest Day)' },
    { day: language === 'pl' ? 'Wtorek - Niedziela' : 'Tuesday - Sunday', hours: '11:00 — 01:00' },
  ];

  return (
    <section className="bg-black text-[#F4F0EA] min-h-screen py-16 md:py-24 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title elements */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">
            {language === 'pl' ? 'LOKALIZACJA KRYPTY' : 'DIRECTIONS TO COOP'}
          </span>
          <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-cream">
            {language === 'pl' ? 'Znajdź Nas' : 'Find Us'}
          </h1>
          <div className="h-[1px] bg-neutral-900 w-24 my-1"></div>
          <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-md leading-relaxed text-center">
            {language === 'pl'
              ? 'Ukryty w sercu krakowskiego Kazimierza. Podążaj za zapachem dębu.'
              : 'Located in Krakow\'s Kazimierz.'}
          </p>
        </div>

        {/* Info Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column schedule & contact */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Hours card */}
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 md:p-8">
              <span className="text-[10px] font-mono text-gold tracking-widest uppercase flex items-center gap-1.5 label-icon">
                <Clock size={12} className="text-gold" /> {language === 'pl' ? 'GODZINY OTWARCIA' : 'OPEN HOURS'}
              </span>
              <div className="h-[1px] bg-neutral-900 w-16 my-4"></div>
              <div className="space-y-4">
                {schedules.map((sch) => (
                  <div key={sch.day} className="flex justify-between items-baseline gap-4 text-xs">
                    <span className="font-serif text-cream uppercase font-semibold">{sch.day}</span>
                    <div className="flex-grow border-b border-dotted border-neutral-850 mx-2"></div>
                    <span className="font-mono text-neutral-450 shrink-0">{sch.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakeasy Secret Entry Guide - Removed per user request */}

            {/* Contact Specs */}
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs">
                <div className="w-8 h-8 rounded-none bg-neutral-950 border border-neutral-850 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-neutral-500 uppercase leading-none">{language === 'pl' ? 'ADRES' : 'PHYSICAL ADDRESS'}</p>
                  <p className="font-sans text-cream font-medium mt-1">ul. Józefa Dietla 37, 31-062 Kraków</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="w-8 h-8 rounded-none bg-neutral-950 border border-neutral-850 flex items-center justify-center text-gold shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-neutral-500 uppercase leading-none">{language === 'pl' ? 'REZERWACJA / TELEFON' : 'RESERVATIONS PHONE'}</p>
                  <p className="font-sans text-cream font-medium mt-1">+48 22 555 01 28</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="w-8 h-8 rounded-none bg-neutral-950 border border-neutral-850 flex items-center justify-center text-gold shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-neutral-500 uppercase leading-none">{language === 'pl' ? 'EMAIL' : 'ELECTRONIC MAIL'}</p>
                  <p className="font-sans text-cream font-medium mt-1">contact@barrel37.com</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Polish speakeasy interactive map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="border border-neutral-900 p-2 bg-neutral-950 relative overflow-hidden group flex-grow min-h-[400px] flex flex-col">
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gold z-10 pointer-events-none"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gold z-10 pointer-events-none"></div>
              
              <div className="relative w-full flex-grow bg-[#020202] border border-neutral-900 overflow-hidden min-h-[400px]">
                {/* CSS filtered iframe to enforce luxury dark-mode on standard Google Maps */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=J%C3%B3zefa%20Dietla%2037,%2031-062%20Krak%C3%B3w,%20Poland+(Barrel%2037)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Barrel 37 Location"
                ></iframe>
                
                {/* Edging shadow to blend map into the container seamlessly */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,1)]"></div>
              </div>
            </div>

            {/* Direct Link to open phone app navigation */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Józefa+Dietla+37,+Kraków"
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 px-6 py-4 bg-transparent hover:bg-neutral-900 border border-neutral-800 hover:border-gold text-neutral-400 hover:text-gold text-[10px] font-mono uppercase tracking-[0.2em] transition-all cursor-pointer text-center focus:outline-none flex justify-center items-center gap-2 group"
            >
              <MapPin size={12} className="group-hover:animate-bounce" />
              {language === 'pl' ? 'Otwórz nawigację (Zdobądź Wskazówki)' : 'Get Walking Directions (Open App)'}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
