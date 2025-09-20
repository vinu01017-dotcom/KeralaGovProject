import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Star, MapPin, Calendar, Users, X, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
const HighlightPackages = () => {
  const {
    toast
  } = useToast();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [peopleCount, setPeopleCount] = useState(1);
  const highlightPackages = [{
    id: 1,
    name: 'Kerala Backwater Bliss',
    image: 'Luxury houseboat cruising through serene Kerala backwaters',
    rating: 4.9,
    duration: '4 Days / 3 Nights',
    locations: ['Alleppey', 'Kumarakom', 'Kumbakonam'],
    pricePerPerson: 8500,
    highlights: ['Houseboat Stay', 'Traditional Meals', 'Village Tours'],
    trending: true
  }, {
    id: 2,
    name: 'Munnar Hill Station Escape',
    image: 'Misty tea plantations in Munnar with rolling green hills',
    rating: 4.8,
    duration: '3 Days / 2 Nights',
    locations: ['Munnar', 'Mattupetty', 'Eravikulam'],
    pricePerPerson: 6200,
    highlights: ['Tea Garden Tours', 'Wildlife Sanctuary', 'Mountain Views'],
    trending: false
  }, {
    id: 3,
    name: 'Wayanad Adventure Package',
    image: 'Adventure activities in lush Wayanad forests',
    rating: 4.7,
    duration: '5 Days / 4 Nights',
    locations: ['Wayanad', 'Banasura', 'Chembra Peak'],
    pricePerPerson: 7800,
    highlights: ['Trekking', 'Cave Exploration', 'Zip Lining'],
    trending: true
  }, {
    id: 4,
    name: 'Kochi Heritage & Culture',
    image: 'Historic Chinese fishing nets at Fort Kochi during sunset',
    rating: 4.6,
    duration: '2 Days / 1 Night',
    locations: ['Fort Kochi', 'Mattancherry', 'Marine Drive'],
    pricePerPerson: 4500,
    highlights: ['Heritage Walk', 'Spice Markets', 'Kathakali Show'],
    trending: false
  }, {
    id: 5,
    name: 'Kovalam Beach Paradise',
    image: 'Golden sandy beaches of Kovalam with coconut palms',
    rating: 4.5,
    duration: '3 Days / 2 Nights',
    locations: ['Kovalam', 'Varkala', 'Poovar'],
    pricePerPerson: 5800,
    highlights: ['Beach Resort', 'Ayurveda Spa', 'Lighthouse Visit'],
    trending: true
  }, {
    id: 6,
    name: 'Thekkady Wildlife Safari',
    image: 'Wild elephants in their natural habitat at Thekkady',
    rating: 4.7,
    duration: '3 Days / 2 Nights',
    locations: ['Thekkady', 'Periyar', 'Kumily'],
    pricePerPerson: 6800,
    highlights: ['Boat Safari', 'Spice Plantation', 'Bamboo Rafting'],
    trending: false
  }, {
    id: 7,
    name: 'Complete Kerala Circuit',
    image: 'Panoramic view of Kerala showcasing backwaters, hills and beaches',
    rating: 4.9,
    duration: '8 Days / 7 Nights',
    locations: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey', 'Kovalam'],
    pricePerPerson: 15500,
    highlights: ['All Major Destinations', 'Luxury Accommodations', 'Private Transport'],
    trending: true
  }, {
    id: 8,
    name: 'Ayurveda Wellness Retreat',
    image: 'Peaceful Ayurveda treatment center surrounded by tropical gardens',
    rating: 4.8,
    duration: '6 Days / 5 Nights',
    locations: ['Kovalam', 'Varkala', 'Kumarakom'],
    pricePerPerson: 12200,
    highlights: ['Ayurveda Treatments', 'Yoga Sessions', 'Organic Meals'],
    trending: true
  }];
  const handleBookPackage = pkg => {
    setSelectedPackage(pkg);
    setPeopleCount(1);
    setShowBookingDetails(true);
  };
  const confirmBooking = () => {
    const bookingDetails = {
      ...selectedPackage,
      id: Date.now(),
      name: selectedPackage.name,
      cost: selectedPackage.pricePerPerson * peopleCount,
      members: peopleCount,
      date: new Date().toISOString().split('T')[0],
      booked: true
    };
    const savedPlans = JSON.parse(localStorage.getItem('savedTourPlans') || '[]');
    savedPlans.push(bookingDetails);
    localStorage.setItem('savedTourPlans', JSON.stringify(savedPlans));
    toast({
      title: "Booking Confirmed!",
      description: `${selectedPackage.name} has been added to your saved plans and booking history.`
    });
    setShowBookingDetails(false);
  };
  return <>
      <Card className="p-6 bg-white/70 backdrop-blur-sm border-emerald-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-800">Trending Kerala Packages</h2>
          <div className="flex items-center space-x-2 text-emerald-600">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">Popular Highlights</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightPackages.map((pkg, index) => <motion.div key={pkg.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-emerald-100 relative">
              {pkg.trending && <div className="absolute top-3 left-3 z-10">
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    🔥 TRENDING
                  </span>
                </div>}

              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt={pkg.image} src="https://horizons-cdn.hostinger.com/5428b0f5-0c93-4d79-a541-20b22e3dac53/keralalogo123-LXVFG.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold">{pkg.rating}</span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <h3 className="font-bold text-emerald-800 text-lg leading-tight">{pkg.name}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-emerald-600">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm text-emerald-600">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-2">{pkg.locations.join(', ')}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-emerald-700">Package Highlights:</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.map((highlight, idx) => <span key={idx} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                        {highlight}
                      </span>)}
                  </div>
                </div>

                <div className="pt-3 border-t border-emerald-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-gray-500">Starting from</p>
                      <p className="text-xl font-bold text-emerald-800">
                        ₹{pkg.pricePerPerson.toLocaleString()}
                      </p>
                      <p className="text-xs text-emerald-600">per person</p>
                    </div>
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  
                  <Button onClick={() => handleBookPackage(pkg)} className="w-full kerala-gradient hover:opacity-90 text-white font-semibold">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>)}
        </div>
      </Card>

      <AnimatePresence>
        {showBookingDetails && selectedPackage && <Dialog open={showBookingDetails} onOpenChange={setShowBookingDetails}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Booking Details</DialogTitle>
                <DialogDescription>
                  Review your package details before confirming.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <h3 className="font-semibold text-lg">{selectedPackage.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Price per person:</span>
                  <span className="font-semibold">₹{selectedPackage.pricePerPerson.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="people-count" className="text-muted-foreground">Number of people:</Label>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => setPeopleCount(p => Math.max(1, p - 1))}>-</Button>
                    <span>{peopleCount}</span>
                    <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => setPeopleCount(p => p + 1)}>+</Button>
                  </div>
                </div>
                <div className="border-t pt-2 mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold">Total Amount:</span>
                  <span className="text-lg font-bold">₹{(selectedPackage.pricePerPerson * peopleCount).toLocaleString()}</span>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowBookingDetails(false)}>Cancel</Button>
                <Button onClick={confirmBooking} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Confirm Booking
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>}
      </AnimatePresence>
    </>;
};
export default HighlightPackages;