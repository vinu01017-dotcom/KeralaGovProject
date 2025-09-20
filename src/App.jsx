import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import PlacesPage from '@/pages/PlacesPage';
import BookingPage from '@/pages/BookingPage';
import SavedPlansPage from '@/pages/SavedPlansPage';
import HelplinePage from '@/pages/HelplinePage';
import AboutUsPage from '@/pages/AboutUsPage';
import SurveyPage from '@/pages/SurveyPage';
import ProfilePage from '@/pages/ProfilePage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/i18n';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/*" element={<MainLayout />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </Suspense>
  );
}

const MainLayout = () => (
  <>
    <Header />
    <main className="flex-grow">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/saved-plans" element={<SavedPlansPage />} />
        <Route path="/helpline" element={<HelplinePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;