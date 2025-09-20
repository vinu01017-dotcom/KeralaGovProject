import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-emerald-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <MapPin className="w-7 h-7 text-emerald-800" />
              </div>
              <div>
                <p className="text-xl font-bold">Kerala Tourism</p>
                <p className="text-sm text-emerald-200">God's Own Country</p>
              </div>
            </div>
            <p className="text-emerald-200 text-sm">
              Your complete guide to exploring the enchanting beauty of Kerala. Plan your trip, discover hidden gems, and create unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="font-semibold text-lg">{t('footer.quickLinks')}</p>
            <ul className="space-y-2 text-emerald-200">
              <li><NavLink to="/home" className="hover:text-white transition-colors">{t('header.home')}</NavLink></li>
              <li><NavLink to="/places" className="hover:text-white transition-colors">{t('header.places')}</NavLink></li>
              <li><NavLink to="/booking" className="hover:text-white transition-colors">{t('header.booking')}</NavLink></li>
              <li><NavLink to="/saved-plans" className="hover:text-white transition-colors">{t('header.savedPlans')}</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="font-semibold text-lg">{t('footer.contactUs')}</p>
            <ul className="space-y-3 text-emerald-200">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:KERALATOURISM@gmail.com" className="hover:text-white transition-colors">KERALATOURISM@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a href="tel:140-762-00" className="hover:text-white transition-colors">140-762-00</a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="w-5 h-5" />
                <a href="https://instagram.com/keralatourism" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@keralatourism</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <p className="font-semibold text-lg">{t('footer.legal')}</p>
            <ul className="space-y-2 text-emerald-200">
              <li><NavLink to="/about" className="hover:text-white transition-colors">{t('header.aboutUs')}</NavLink></li>
              <li><NavLink to="/helpline" className="hover:text-white transition-colors">{t('header.helpline')}</NavLink></li>
              <li><p className="cursor-pointer hover:text-white transition-colors">{t('footer.privacyPolicy')}</p></li>
              <li><p className="cursor-pointer hover:text-white transition-colors">{t('footer.termsOfService')}</p></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-700 pt-6 text-center text-emerald-300 text-sm">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
