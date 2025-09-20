import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { Phone, Shield, HeartPulse, Flame, Bus, Car, Utensils, Ship } from 'lucide-react';

const helplineNumbers = [
  { name: 'Police', number: '100', icon: Shield, color: 'blue' },
  { name: 'Ambulance', number: '108', icon: Bus, color: 'red' },
  { name: 'Fire', number: '101', icon: Flame, color: 'orange' },
  { name: 'Tourist Helpline', number: '1363', icon: HeartPulse, color: 'green' },
  { name: 'Road Transport', number: '1099', icon: Car, color: 'purple' },
  { name: 'Food Safety', number: '1800-425-1125', icon: Utensils, color: 'yellow' },
  { name: 'Coastal Police', number: '1093', icon: Ship, color: 'teal' },
  { name: 'Women Helpline', number: '1091', icon: HeartPulse, color: 'pink' },
];

const HelplinePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('helplinePage.title')}</title>
        <meta name="description" content={t('helplinePage.metaDescription')} />
      </Helmet>
      <div className="light-page-bg min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{t('helplinePage.emergencyHelpline')}</h1>
            <p className="text-slate-600 mb-8">{t('helplinePage.importantContacts')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helplineNumbers.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 bg-${item.color}-100 text-${item.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800">{item.name}</h2>
                  <p className="text-3xl font-bold text-slate-700 my-2">{item.number}</p>
                  <a href={`tel:${item.number}`} className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
                    <Phone className="w-4 h-4 mr-2" /> {t('helplinePage.callNow')}
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HelplinePage;