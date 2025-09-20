import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { Hotel, Utensils, Trees, Church, Clapperboard, Coffee, Plane, Bus, Mountain, Waves, FerrisWheel, Landmark, Palmtree, Bird, Building2, CalendarDays } from 'lucide-react';

const categories = [
  { name: 'Hotels', icon: Hotel, symbol: '🏨' },
  { name: 'Temples', icon: Landmark, symbol: '🛕' },
  { name: 'Parks', icon: Trees, symbol: '🌳' },
  { name: 'Churches', icon: Church, symbol: '⛪' },
  { name: 'Theaters', icon: Clapperboard, symbol: '🎭' },
  { name: 'Cafes', icon: Coffee, symbol: '☕' },
  { name: 'Airports', icon: Plane, symbol: '✈️' },
  { name: 'Bus Stands', icon: Bus, symbol: '🚏' },
  { name: 'Sceneries', icon: Palmtree, symbol: '🏞️' },
  { name: 'Theme Parks', icon: FerrisWheel, symbol: '🎡' },
  { name: 'Exhibitions', icon: Building2, symbol: '🏛️' },
  { name: 'Water Bodies', icon: Waves, symbol: '💧' },
  { name: 'Hills', icon: Mountain, symbol: '⛰️' },
  { name: 'Beaches', icon: Waves, symbol: '🏖️' },
  { name: 'Wildlife Sanctuaries', icon: Bird, symbol: '🦜' },
];

const placesData = {
  Hotels: Array(8).fill({ name: 'Grand Hyatt Kochi', image: 'Luxury hotel exterior', details: '5-star hotel with backwater views.' }),
  Temples: Array(8).fill({ name: 'Sree Padmanabhaswamy Temple', image: 'Ancient temple gopuram', details: 'Richest temple in the world.' }),
  Parks: Array(8).fill({ name: 'Eravikulam National Park', image: 'Green park with flowers', details: 'Home to the Nilgiri Tahr.' }),
};

const eventsData = [
    { name: 'Thrissur Pooram', date: 'April 2025', location: 'Thrissur', description: 'The most spectacular temple festival in Kerala.' },
    { name: 'Nehru Trophy Boat Race', date: 'August 2025', location: 'Alleppey', description: 'Iconic snake boat race on Punnamada Lake.' },
    { name: 'Kochi-Muziris Biennale', date: 'Dec 2025 - Apr 2026', location: 'Kochi', description: 'International contemporary art exhibition.' },
    { name: 'Onam Festival', date: 'September 2025', location: 'State-wide', description: 'The grand harvest festival of Kerala.' },
];

const PlacesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    toast({
      title: `Selected: ${category.name}`,
      description: "Showing nearby places. Map integration is a future feature.",
    });
  };

  const handleBookNow = () => {
    toast({
      title: "🚧 Booking Feature",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>{t('placesPage.title')}</title>
        <meta name="description" content={t('placesPage.metaDescription')} />
      </Helmet>
      <div className="light-page-bg min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{t('placesPage.discoverPlaces')}</h1>
            <p className="text-slate-600 mb-8">{t('placesPage.browseCategories')}</p>
          </motion.div>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">{t('placesPage.categories')}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
              {categories.map((cat) => (
                <motion.div
                  key={cat.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleCategoryClick(cat)}
                    className={`flex flex-col items-center justify-center space-y-2 p-3 rounded-lg w-full h-full transition-colors ${selectedCategory?.name === cat.name ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-50 hover:bg-slate-100'}`}
                  >
                    <cat.icon className="w-8 h-8" />
                    <span className="text-xs text-center font-medium">{cat.name}</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </Card>

          <AnimatePresence>
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  {selectedCategory.symbol} {selectedCategory.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(placesData[selectedCategory.name] || Array(8).fill({ name: `${selectedCategory.name} Example`, image: 'Placeholder image', details: 'Details about this place.' })).map((place, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <img className="w-full h-40 object-cover" alt={place.image} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      <div className="p-4">
                        <h3 className="font-semibold text-slate-800">{place.name} #{index + 1}</h3>
                        <p className="text-sm text-slate-600 mt-1">{place.details}</p>
                        <div className="flex justify-between items-center mt-4">
                          <Button variant="link" className="p-0">{t('placesPage.viewOnMap')}</Button>
                          <Button size="sm" onClick={handleBookNow} className="bg-emerald-600 hover:bg-emerald-700 text-white">{t('placesPage.book')}</Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <CalendarDays className="w-6 h-6 mr-3 text-emerald-600" />
              {t('placesPage.events')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {eventsData.map((event, index) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="font-semibold text-slate-800 text-lg">{event.name}</h3>
                  <p className="text-sm text-emerald-600 font-medium">{event.date} - {event.location}</p>
                  <p className="text-sm text-slate-600 mt-2">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default PlacesPage;