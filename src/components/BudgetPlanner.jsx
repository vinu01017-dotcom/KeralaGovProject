import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/components/ui/use-toast';
import { Calculator, MapPin, Star, Shuffle } from 'lucide-react';

const BudgetPlanner = () => {
  const [budget, setBudget] = useState([10000]);
  const [days, setDays] = useState(3);
  const [people, setPeople] = useState(2);
  const [customPackage, setCustomPackage] = useState(null);
  const { toast } = useToast();

  const touristPlaces = [
    { name: 'Munnar', cost: 3500, type: 'Hill Station', rating: 4.8 },
    { name: 'Alleppey', cost: 4200, type: 'Backwaters', rating: 4.9 },
    { name: 'Wayanad', cost: 2800, type: 'Wildlife', rating: 4.7 },
    { name: 'Kovalam', cost: 2500, type: 'Beach', rating: 4.6 },
    { name: 'Thekkady', cost: 3200, type: 'Spice Gardens', rating: 4.8 },
    { name: 'Kumarakom', cost: 2200, type: 'Bird Sanctuary', rating: 4.5 },
    { name: 'Varkala', cost: 2900, type: 'Cliff Beach', rating: 4.7 },
    { name: 'Athirappilly', cost: 1800, type: 'Waterfalls', rating: 4.6 },
    { name: 'Fort Kochi', cost: 2000, type: 'Heritage', rating: 4.4 },
    { name: 'Bekal', cost: 1500, type: 'Fort', rating: 4.3 },
    { name: 'Vagamon', cost: 2600, type: 'Meadows', rating: 4.5 },
    { name: 'Ponmudi', cost: 2100, type: 'Hill Station', rating: 4.4 }
  ];

  const generateCustomPackage = () => {
    const totalBudget = budget[0];
    const perPersonBudget = totalBudget / people;
    const dailyBudget = perPersonBudget / days;
    
    // Filter places that fit the budget
    const affordablePlaces = touristPlaces.filter(place => 
      place.cost <= dailyBudget * 1.5 // Allow some flexibility
    );
    
    if (affordablePlaces.length === 0) {
      toast({
        title: "Budget Too Low",
        description: "Please increase your budget for better recommendations",
        variant: "destructive"
      });
      return;
    }

    // Randomly select 3-5 places
    const numberOfPlaces = Math.min(Math.max(Math.floor(days / 2) + 1, 3), 5);
    const shuffled = [...affordablePlaces].sort(() => 0.5 - Math.random());
    const selectedPlaces = shuffled.slice(0, numberOfPlaces);
    
    // Calculate total cost
    const totalPlaceCost = selectedPlaces.reduce((sum, place) => sum + place.cost, 0);
    const accommodationCost = days * 1500 * people; // Estimated accommodation
    const foodCost = days * 800 * people; // Estimated food
    const transportCost = 2000 * people; // Estimated transport
    const totalEstimatedCost = totalPlaceCost + accommodationCost + foodCost + transportCost;
    
    const packageData = {
      places: selectedPlaces,
      totalCost: totalEstimatedCost,
      breakdown: {
        places: totalPlaceCost,
        accommodation: accommodationCost,
        food: foodCost,
        transport: transportCost
      },
      savings: totalBudget - totalEstimatedCost,
      days,
      people
    };
    
    setCustomPackage(packageData);
    
    toast({
      title: "Package Generated!",
      description: `Custom ${days}-day package created for ${people} people`
    });
  };

  const handleBookPackage = () => {
    toast({
      title: "🚧 Booking Feature",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <Card className="p-6 glass-effect border-emerald-200">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
        <Calculator className="w-5 h-5 mr-2" />
        Budget-Based Tour Planner
      </h2>
      
      <div className="space-y-6">
        {/* Budget Input */}
        <div className="space-y-3">
          <Label className="text-emerald-700 font-medium">Total Budget: ₹{budget[0].toLocaleString()}</Label>
          <Slider
            value={budget}
            onValueChange={setBudget}
            max={50000}
            min={5000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-emerald-600">
            <span>₹5,000</span>
            <span>₹50,000</span>
          </div>
        </div>

        {/* Days and People */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="days" className="text-emerald-700">Number of Days</Label>
            <Input
              id="days"
              type="number"
              value={days}
              onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              max="14"
              className="border-emerald-300 focus:border-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="people" className="text-emerald-700">Number of People</Label>
            <Input
              id="people"
              type="number"
              value={people}
              onChange={(e) => setPeople(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              max="20"
              className="border-emerald-300 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Generate Button */}
        <Button
          onClick={generateCustomPackage}
          className="w-full kerala-gradient hover:opacity-90 text-white"
        >
          <Shuffle className="w-4 h-4 mr-2" />
          Generate Custom Package
        </Button>

        {/* Generated Package */}
        <AnimatePresence>
          {customPackage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <h3 className="font-semibold text-emerald-800 mb-3">
                  Your Custom {customPackage.days}-Day Kerala Package
                </h3>
                
                {/* Places to Visit */}
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-emerald-700">Places to Visit:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {customPackage.places.map((place, index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded p-2 border border-emerald-100">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          <span className="font-medium">{place.name}</span>
                          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                            {place.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs">{place.rating}</span>
                          </div>
                          <span className="text-sm font-medium text-emerald-700">₹{place.cost}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="bg-white rounded p-3 border border-emerald-100 mb-4">
                  <h4 className="font-medium text-emerald-700 mb-2">Cost Breakdown:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Tourist Places:</span>
                      <span>₹{customPackage.breakdown.places.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accommodation:</span>
                      <span>₹{customPackage.breakdown.accommodation.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Food & Dining:</span>
                      <span>₹{customPackage.breakdown.food.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transportation:</span>
                      <span>₹{customPackage.breakdown.transport.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-emerald-200 pt-1 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total Estimated Cost:</span>
                        <span>₹{customPackage.totalCost.toLocaleString()}</span>
                      </div>
                      {customPackage.savings > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>You Save:</span>
                          <span>₹{customPackage.savings.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleBookPackage}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Book This Package
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default BudgetPlanner;