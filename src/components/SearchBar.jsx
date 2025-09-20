import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { Search, MapPin, Star, Hotel, Utensils } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const keralaCities = [
    { name: 'Kochi', image: 'Historic Chinese fishing nets at Fort Kochi sunset' },
    { name: 'Thiruvananthapuram', image: 'Padmanabhaswamy temple in Thiruvananthapuram' },
    { name: 'Kozhikode', image: 'Kozhikode beach at sunset' },
    { name: 'Thrissur', image: 'Vadakkunnathan Temple in Thrissur' },
    { name: 'Alappuzha', image: 'Houseboat in Alappuzha backwaters' },
    { name: 'Munnar', image: 'Scenic tea plantations in Munnar' },
    { name: 'Wayanad', image: 'Chembra Peak in Wayanad' },
    { name: 'Kollam', image: 'Lighthouse at Kollam beach' },
  ];

  const topTouristSpots = [
    { name: 'Munnar Hill Station', rating: 4.8, cost: '₹3,500/person', image: 'Scenic tea plantations in Munnar with rolling green hills', description: 'Famous for tea gardens and cool climate' },
    { name: 'Alleppey Backwaters', rating: 4.9, cost: '₹4,200/person', image: 'Traditional houseboat in Alleppey backwaters', description: 'Venice of the East with beautiful houseboats' },
    { name: 'Wayanad Wildlife Sanctuary', rating: 4.7, cost: '₹2,800/person', image: 'Wild elephants in Wayanad forest sanctuary', description: 'Rich wildlife and pristine forests' },
    { name: 'Kovalam Beach', rating: 4.6, cost: '₹2,500/person', image: 'Golden sandy beach at Kovalam with palm trees', description: 'Pristine beaches and lighthouse views' },
    { name: 'Thekkady Periyar', rating: 4.8, cost: '₹3,200/person', image: 'Boat safari in Periyar lake with mountains', description: 'Spice gardens and boat safaris' },
    { name: 'Varkala Cliff Beach', rating: 4.7, cost: '₹2,900/person', image: 'Dramatic cliffs overlooking Arabian Sea at Varkala', description: 'Dramatic cliffs and spiritual vibes' },
    { name: 'Athirappilly Waterfalls', rating: 4.6, cost: '₹1,800/person', image: 'Majestic Athirappilly waterfalls cascading down rocks', description: 'Niagara of India with stunning cascades' },
    { name: 'Fort Kochi', rating: 4.4, cost: '₹2,000/person', image: 'Historic Chinese fishing nets at Fort Kochi sunset', description: 'Colonial heritage and Chinese fishing nets' },
  ];

  const searchCategories = [
    { name: 'Hotels', icon: Hotel },
    { name: 'Restaurants', icon: Utensils },
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Enter Search Query",
        description: "Please enter a city name or search term",
        variant: "destructive"
      });
      return;
    }

    const query = searchQuery.toLowerCase();
    let results = [];

    if (query.includes('popular') || query.includes('tourist') || query.includes('top') || query.includes('spots')) {
      results = topTouristSpots.slice(0, 8).map(spot => ({ ...spot, type: 'spot' }));
    } else {
      const cityMatch = keralaCities.find(city => city.name.toLowerCase() === query);
      if (cityMatch) {
        results.push({ ...cityMatch, type: 'city', description: `Explore ${cityMatch.name} and its attractions` });
      }
      
      const categoryMatch = searchCategories.find(cat => cat.name.toLowerCase() === query);
      if (categoryMatch) {
        results.push({ name: categoryMatch.name, type: 'category', description: `Find the best ${categoryMatch.name} in Kerala.` });
      }
    }

    if (results.length === 0) {
      const cityMatches = keralaCities.filter(city => city.name.toLowerCase().includes(query));
      if (cityMatches.length > 0) {
        results = cityMatches.map(city => ({ ...city, type: 'city', description: `Explore ${city.name} and its attractions` }));
      }
    }

    setSearchResults(results);
    setShowResults(true);

    if (results.length === 0) {
      toast({
        title: "No Results Found",
        description: "Try searching for a city, 'popular places', 'hotels', or 'restaurants'.",
        variant: "destructive"
      });
    }
  };

  const handleBookNow = (place) => {
    toast({
      title: "🚧 Feature in progress",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <Card className="p-6 glass-effect border-emerald-200">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4">{t('homePage.discoverKerala')}</h2>
      
      <div className="flex space-x-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-emerald-600" />
          <Input
            placeholder={t('searchBar.placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-10 border-emerald-300 focus:border-emerald-500"
          />
        </div>
        <Button 
          onClick={handleSearch}
          className="kerala-gradient hover:opacity-90 text-white"
        >
          {t('searchBar.search')}
        </Button>
      </div>

      <AnimatePresence>
        {showResults && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-emerald-800">{t('searchBar.results')}</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowResults(false)}
                className="border-emerald-300 text-emerald-700"
              >
                {t('searchBar.close')}
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[500px] overflow-y-auto p-1">
              {searchResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg border border-emerald-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {result.image && (
                    <div className="h-40 overflow-hidden">
                      <img className="w-full h-full object-cover" alt={result.image} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    </div>
                  )}
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-emerald-800">{result.name}</h4>
                      {result.rating && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{result.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3 h-10 line-clamp-2">{result.description}</p>
                    
                    {result.type === 'spot' && (
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-700 font-semibold">{result.cost}</span>
                        <Button
                          size="sm"
                          onClick={() => handleBookNow(result)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white"
                        >
                          {t('searchBar.bookNow')}
                        </Button>
                      </div>
                    )}
                    
                    {result.type === 'city' && (
                      <Button
                        size="sm"
                        onClick={() => handleBookNow(result)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        {t('searchBar.explore', { name: result.name })}
                      </Button>
                    )}
                    {result.type === 'category' && (
                      <Button
                        size="sm"
                        onClick={() => handleBookNow(result)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        <Search className="w-4 h-4 mr-2" />
                        Find {result.name}
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default SearchBar;