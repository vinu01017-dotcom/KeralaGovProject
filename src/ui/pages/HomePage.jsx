import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import MapComponent from '@/components/MapComponent';
import WeatherWidget from '@/components/WeatherWidget';
import SearchBar from '@/components/SearchBar';
import MembersDropdown from '@/components/MembersDropdown';
import BudgetPlanner from '@/components/BudgetPlanner';
import HighlightPackages from '@/components/HighlightPackages';
import ManualTourPlanner from '@/components/ManualTourPlanner';
import SavedTourPlans from '@/components/SavedTourPlans';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    const userData = localStorage.getItem('keralaTourismUser');
    if (!userData) {
      navigate('/');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  if (!user) return null;

  return (
    <>
      <Helmet>
        <title>{t('homePage.title')}</title>
        <meta name="description" content={t('homePage.metaDescription')} />
      </Helmet>

      <div className="min-h-screen home-page-bg">
        <main className="container mx-auto px-4 py-8 space-y-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="p-6 h-96 bg-white/70 backdrop-blur-sm border-emerald-200">
                <h2 className="text-xl font-semibold text-emerald-800 mb-4">{t('homePage.yourLocation')}</h2>
                <MapComponent />
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <WeatherWidget />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <SearchBar />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <MembersDropdown />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <BudgetPlanner />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <HighlightPackages />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ManualTourPlanner />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <SavedTourPlans />
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default HomePage;