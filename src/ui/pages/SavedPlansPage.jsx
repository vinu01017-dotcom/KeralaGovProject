import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SavedTourPlans from '@/components/SavedTourPlans';

const SavedPlansPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('savedPlansPage.title')}</title>
        <meta name="description" content={t('savedPlansPage.metaDescription')} />
      </Helmet>
      <div className="light-page-bg min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{t('savedPlansPage.yourSavedPlans')}</h1>
            <p className="text-slate-600 mb-8">{t('savedPlansPage.allYourPlans')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SavedTourPlans />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SavedPlansPage;