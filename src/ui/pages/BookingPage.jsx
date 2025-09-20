import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { Hotel, Utensils, Clapperboard, Plane, Train, Bus, Car } from 'lucide-react';

const bookingCategories = [
  { name: 'Hotels', icon: Hotel },
  { name: 'Restaurants', icon: Utensils },
  { name: 'Theaters', icon: Clapperboard },
  { name: 'Flights', icon: Plane },
  { name: 'Trains', icon: Train },
  { name: 'Buses', icon: Bus },
  { name: 'Cabs', icon: Car },
];

const BookingPage = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleBooking = (category) => {
    toast({
      title: `Booking ${category}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>{t('bookingPage.title')}</title>
        <meta name="description" content={t('bookingPage.metaDescription')} />
      </Helmet>
      <div className="light-page-bg min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{t('bookingPage.bookingSystem')}</h1>
            <p className="text-slate-600 mb-8">{t('bookingPage.findAndBook')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingCategories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cat.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800 mb-2">{cat.name}</h2>
                  <p className="text-slate-500 mb-4">Find the best deals for {cat.name.toLowerCase()}.</p>
                  <Button onClick={() => handleBooking(cat.name)} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    {t('bookingPage.bookNow', { category: cat.name })}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Card className="p-8 bg-emerald-600 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">{t('bookingPage.allInOne')}</h2>
              <p className="mb-4">{t('bookingPage.manageAll')}</p>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-emerald-600">
                {t('bookingPage.viewMyBookings')}
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;