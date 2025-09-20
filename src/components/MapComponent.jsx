import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Loader2, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const MapComponent = ({ selectedPlace }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const getCurrentLocation = () => {
    setLoading(true);
    
    if (!navigator.geolocation) {
      toast({
        title: "Location Not Supported",
        description: "Your browser doesn't support geolocation",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLoading(false);
        toast({
          title: "Location Found!",
          description: "Your current location has been detected"
        });
      },
      (error) => {
        setLoading(false);
        toast({
          title: "Location Error",
          description: "Unable to get your location. Please enable location services.",
          variant: "destructive"
        });
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const handleFeatureToast = () => {
    toast({
      title: "🚧 Feature in progress",
      description: "This map is a visual representation. Real-time GPS tracking and nearby options are planned for a future update! 🚀"
    });
  };

  return (
    <div className="h-full relative">
      <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg relative overflow-hidden" onClick={handleFeatureToast}>
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-60" 
            alt="Stylized map of Kerala with major cities"
           src="https://images.unsplash.com/photo-1640179840059-ffb51b831e06" />
        </div>

        {location && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative group">
              <MapPin className="w-8 h-8 text-red-500 drop-shadow-lg" fill="currentColor" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                You are here
              </div>
            </div>
          </motion.div>
        )}
        
        {selectedPlace && (
           <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ top: `${selectedPlace.y || 30}%`, left: `${selectedPlace.x || 70}%` }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative group">
              <MapPin className="w-8 h-8 text-blue-500 drop-shadow-lg" fill="currentColor" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {selectedPlace.name}
              </div>
            </div>
          </motion.div>
        )}

        {loading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin text-emerald-600 mx-auto mb-2" />
              <p className="text-sm text-emerald-700">Finding your location...</p>
            </div>
          </div>
        )}

        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <Button
            onClick={getCurrentLocation}
            size="icon"
            className="bg-white/80 hover:bg-white text-slate-700 shadow-lg"
            disabled={loading}
          >
            <Navigation className="w-4 h-4" />
          </Button>
           <Button size="icon" className="bg-white/80 hover:bg-white text-slate-700 shadow-lg" onClick={handleFeatureToast}><ZoomIn className="w-4 h-4" /></Button>
           <Button size="icon" className="bg-white/80 hover:bg-white text-slate-700 shadow-lg" onClick={handleFeatureToast}><ZoomOut className="w-4 h-4" /></Button>
        </div>

        {location && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
          >
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <div>
                <p className="font-medium text-emerald-800">Current Location</p>
                <p className="text-emerald-600 text-xs">
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MapComponent;