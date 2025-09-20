import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AIChatbot from '@/components/AIChatbot';
import BookingHistory from '@/components/BookingHistory';

const ProfilePage = () => {
  const { t, i18n } = useTranslation();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    language: 'en',
    age: '',
    address: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const userAuth = JSON.parse(localStorage.getItem('keralaTourismUser') || '{}');
    const currentLanguage = localStorage.getItem('i18nextLng') || 'en';
    
    setProfile(prev => ({
      ...prev,
      ...savedProfile,
      name: savedProfile.name || userAuth.name || '',
      email: savedProfile.email || userAuth.email || '',
      language: currentLanguage,
    }));
    
    if (i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [i18n]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
  };

  const handleLanguageChange = (lang) => {
    setProfile(prev => ({ ...prev, language: lang }));
    i18n.changeLanguage(lang);
    // i18next-browser-languagedetector will save it to localStorage
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profile));
    toast({
      title: "Profile Updated",
      description: "Your personal details have been saved.",
    });
  };

  return (
    <>
      <Helmet>
        <title>{t('profilePage.title')} - Kerala Tourism</title>
        <meta name="description" content={t('profilePage.metaDescription')} />
      </Helmet>
      <div className="light-page-bg min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{t('profilePage.header')}</h1>
            <p className="text-slate-600 mb-8">{t('profilePage.subHeader')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('profilePage.name')}</Label>
                      <Input id="name" value={profile.name} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('profilePage.email')}</Label>
                      <Input id="email" type="email" value={profile.email} onChange={handleChange} disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('profilePage.phone')}</Label>
                      <Input id="phone" type="tel" value={profile.phone} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">{t('profilePage.age')}</Label>
                      <Input id="age" type="number" value={profile.age} onChange={handleChange} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">{t('profilePage.address')}</Label>
                      <Input id="address" value={profile.address} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label>{t('profilePage.language')}</Label>
                      <Select onValueChange={handleLanguageChange} value={profile.language}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="ta">Tamil</SelectItem>
                          <SelectItem value="ml">Malayalam</SelectItem>
                          <SelectItem value="hi">Hindi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    {t('profilePage.saveButton')}
                  </Button>
                </form>
              </Card>
              <BookingHistory />
            </div>
            <div className="lg:col-span-1">
              <AIChatbot />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;