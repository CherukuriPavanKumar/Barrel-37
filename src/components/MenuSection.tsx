import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem, Language } from '../types';
import { Flame, X, Info } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { getLocalizedItem } from '../data/menuTranslations';

interface MenuSectionProps {
  language: Language;
  menuItems: MenuItem[];
}

export default function MenuSection({ language, menuItems }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState<'food' | 'alcohol'>('food');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const t = TRANSLATIONS[language];

  // Localize menu items
  const localizedItems = menuItems.map((item) => getLocalizedItem(item, language));

  // Filter items by main tab
  const tabItems = localizedItems.filter(item => 
    activeTab === 'food' ? item.isFood : !item.isFood
  );

  // Group items by their sub-category
  const groupedItems = tabItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  // Helper to format category names nicely
  const formatCategory = (cat: string) => {
    return cat.replace(/_/g, ' ').toUpperCase();
  };

  return (
    <section className="bg-black text-[#F4F0EA] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title area & description */}
        <div className="text-center flex flex-col items-center gap-4 mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">{t.cellarPreTitle}</span>
          <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-cream">
            {t.cellarTitle}
          </h1>
          <div className="h-[1px] bg-neutral-900 w-24 my-1"></div>
          <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-lg leading-relaxed text-center">
            {t.cellarDesc}
          </p>
        </div>

        {/* -------------------- MAIN TABS (Food / Alcohol) -------------------- */}
        
        <div className="flex justify-center border-b border-neutral-900 pb-px mb-16">
          <div className="flex gap-8 justify-center">
            {([
              { key: 'food', label: language === 'pl' ? 'JEDZENIE' : 'FOOD' },
              { key: 'alcohol', label: language === 'pl' ? 'ALKOHOL' : 'DRINKS' }
            ] as const).map((tabObj) => (
              <button
                key={tabObj.key}
                onClick={() => {
                  setActiveTab(tabObj.key);
                  setSelectedItem(null);
                }}
                className={`px-5 py-3.5 text-lg tracking-[0.25em] font-mono uppercase transition-all duration-300 relative border-b-2 rounded-none cursor-pointer ${
                  activeTab === tabObj.key
                    ? 'border-gold text-gold font-bold'
                    : 'border-transparent text-neutral-500 hover:text-white'
                }`}
              >
                {tabObj.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Listings Grouped by Category */}
        <div className="flex flex-col gap-16">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-serif text-cream mb-8 pb-2 border-b border-neutral-800 tracking-wider">
                {formatCategory(category)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                <AnimatePresence mode="popLayout">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      onClick={() => setSelectedItem(item)}
                      className={`p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer group select-none relative ${
                        selectedItem?.id === item.id
                          ? 'bg-[#12100d] border border-gold ring-1 ring-gold/30 scale-[1.03] -translate-y-1 shadow-2xl shadow-[#C29F68]/20'
                          : 'bg-[#090909] border border-neutral-900 hover:border-gold/40 hover:scale-[1.025] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C29F68]/10 hover:bg-[#0c0c0c]'
                      }`}
                    >
                      {item.isPopular && (
                        <span className="absolute top-4 right-4 text-[9px] font-mono tracking-widest uppercase text-gold bg-black/85 px-2.5 py-1 border border-[#cbbba0]/20 flex items-center gap-1">
                          <Flame size={10} className="fill-gold text-gold animate-pulse" /> Popular
                        </span>
                      )}

                      <div>
                        {item.image && (
                          <div className="w-full h-44 mb-4 overflow-hidden border border-neutral-850 bg-neutral-950 relative group-hover:border-gold/30 transition-colors">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8C8476]">
                          {formatCategory(item.category)}
                        </span>
                        
                        <div className="flex justify-between items-baseline gap-4 mt-3">
                          <h3 className={`text-lg md:text-xl font-serif tracking-tight leading-tight uppercase font-medium transition-colors ${
                            selectedItem?.id === item.id ? 'text-gold' : 'text-cream group-hover:text-gold'
                          }`}>
                            {item.name}
                          </h3>
                          <div className="flex-grow border-b border-dotted border-neutral-800 mx-2"></div>
                          <span className="text-gold font-mono font-medium text-sm md:text-base shrink-0">{item.price} ZŁ</span>
                        </div>

                        <p className="text-xs text-neutral-400 font-sans leading-relaxed mt-3">
                           {item.description}
                        </p>
                      </div>

                      <div className={`pt-4 mt-6 border-t border-neutral-900 flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider transition-colors ${
                        selectedItem?.id === item.id ? 'text-gold' : 'text-[#8C8476] group-hover:text-gold'
                      }`}>
                        <Info size={11} className={selectedItem?.id === item.id ? 'text-gold' : 'text-neutral-500 group-hover:text-gold'} /> {language === 'pl' ? 'Szczegóły' : 'Details'}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* -------------------- FLOATING OVERLAY DRAWER -------------------- */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/85 backdrop-blur-xs">
              
              <div 
                className="absolute inset-0 cursor-pointer" 
                onClick={() => setSelectedItem(null)} 
              />
              
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative w-full max-w-lg h-full bg-[#0a0a0a] border-l border-neutral-850 p-8 flex flex-col justify-between overflow-y-auto z-10 text-[#F4F0EA]"
              >
                <div>
                  <div className="absolute top-2 right-2 text-neutral-850/60 font-serif font-extrabold text-9xl select-none pointer-events-none tracking-tighter">
                    37
                  </div>

                  <div className="flex items-center justify-between border-b border-neutral-900 pb-5 mb-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono tracking-widest text-gold uppercase">
                        {formatCategory(selectedItem.category)}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif text-cream tracking-tight font-medium uppercase">
                        {selectedItem.name}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="p-2 border border-neutral-800 rounded-none text-neutral-400 hover:text-white cursor-pointer transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {selectedItem.image && (
                    <div className="w-full h-56 mb-8 overflow-hidden border border-neutral-850 bg-neutral-950 relative animate-fadeIn">
                      <img 
                        src={selectedItem.image} 
                        alt={selectedItem.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <div className="flex justify-between items-center py-4 px-5 bg-neutral-950 border border-neutral-900 mb-8 rounded-none">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#8C8476]">{language === 'pl' ? 'Cena' : 'Price'}</span>
                    <span className="text-gold font-mono text-xl font-semibold">{selectedItem.price}.00 ZŁ</span>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">
                      {language === 'pl' ? 'Opis' : 'Description'}
                    </h4>
                    <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  {selectedItem.ingredients && selectedItem.ingredients.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        {language === 'pl' ? 'Składniki' : 'Ingredients'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.ingredients.map((ing) => (
                          <span 
                            key={ing}
                            className="px-3 py-1.5 bg-neutral-900 border border-neutral-850 text-[11px] text-neutral-300 font-sans uppercase tracking-wider"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span className="uppercase text-gold tracking-widest">KRAKÓW KAZIMIERZ</span>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
