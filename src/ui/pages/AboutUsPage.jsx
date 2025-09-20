import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Instagram } from 'lucide-react';

const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('aboutUsPage.title')}</title>
        <meta name="description" content={t('aboutUsPage.metaDescription')} />
      </Helmet>
      <div className="light-page-bg min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{t('aboutUsPage.aboutAndContact')}</h1>
            <p className="text-slate-600 mb-8">{t('aboutUsPage.getInTouch')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">{t('aboutUsPage.ourMission')}</h2>
                  <p className="text-slate-600 leading-relaxed">
                    {t('aboutUsPage.missionText')}
                  </p>
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">{t('aboutUsPage.contactInfo')}</h2>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">{t('aboutUsPage.email')}</p>
                      <a href="mailto:KERALATOURISM@gmail.com" className="text-emerald-600 hover:underline">KERALATOURISM@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">{t('aboutUsPage.phone')}</p>
                      <a href="tel:140-762-00" className="text-emerald-600 hover:underline">140-762-00</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">{t('aboutUsPage.instagram')}</p>
                      <a href="https://instagram.com/keralatourism" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">@keralatourism</a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;