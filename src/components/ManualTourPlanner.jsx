import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Bus, Users, Calendar, Wand2, Save, CheckCircle } from 'lucide-react';

const ManualTourPlanner = () => {
  const [destination, setDestination] = useState('');
  const [transportation, setTransportation] = useState('Car');
  const [members, setMembers] = useState(1);
  const [date, setDate] = useState('');
  const [plannedPackage, setPlannedPackage] = useState(null);
  const { toast } = useToast();

  const handlePlanTour = () => {
    if (!destination || !date) {
      toast({
        title: "Missing Information",
        description: "Please fill in destination and date.",
        variant: "destructive"
      });
      return;
    }

    const estimatedCost = (members * 1500) + (transportation === 'Bus' ? 500 : 2000);
    const newPlan = {
      id: Date.now(),
      name: `Trip to ${destination}`,
      destination,
      transportation,
      members,
      date,
      cost: estimatedCost,
      booked: false,
    };
    setPlannedPackage(newPlan);
    toast({
      title: "Tour Planned!",
      description: `Your trip to ${destination} is ready.`
    });
  };

  const savePlan = () => {
    const savedPlans = JSON.parse(localStorage.getItem('savedTourPlans') || '[]');
    savedPlans.push(plannedPackage);
    localStorage.setItem('savedTourPlans', JSON.stringify(savedPlans));
    toast({
      title: "Plan Saved!",
      description: "Your tour plan has been saved for future reference.",
    });
    setPlannedPackage(null);
  };

  const handleBookNow = () => {
    const bookedPlan = { ...plannedPackage, booked: true };
    const savedPlans = JSON.parse(localStorage.getItem('savedTourPlans') || '[]');
    savedPlans.push(bookedPlan);
    localStorage.setItem('savedTourPlans', JSON.stringify(savedPlans));
    toast({
      title: "Plan Booked & Saved!",
      description: "Your tour has been booked and saved to your plans.",
    });
    setPlannedPackage(null);
  };

  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm border-emerald-200">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
        <Wand2 className="w-5 h-5 mr-2" />
        Manual Tour Planner
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="destination" placeholder="e.g., Munnar" value={destination} onChange={e => setDestination(e.target.value)} className="pl-10" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="transportation">Transportation</Label>
          <div className="relative">
            <Bus className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="transportation" placeholder="e.g., Car" value={transportation} onChange={e => setTransportation(e.target.value)} className="pl-10" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="members">Members</Label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="members" type="number" min="1" value={members} onChange={e => setMembers(Number(e.target.value))} className="pl-10" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="date" type="date" value={date} onChange={e => setDate(e.target.value)} className="pl-10" />
          </div>
        </div>
      </div>

      <Button onClick={handlePlanTour} className="w-full kerala-gradient text-white">
        Plan My Tour
      </Button>

      <AnimatePresence>
        {plannedPackage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 bg-emerald-50 rounded-lg p-4 border border-emerald-200"
          >
            <h3 className="font-semibold text-emerald-800 mb-3">Your Planned Trip</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <p><strong className="font-medium">Destination:</strong> {plannedPackage.destination}</p>
              <p><strong className="font-medium">Transportation:</strong> {plannedPackage.transportation}</p>
              <p><strong className="font-medium">Members:</strong> {plannedPackage.members}</p>
              <p><strong className="font-medium">Date:</strong> {plannedPackage.date}</p>
            </div>
            <div className="text-center border-t border-emerald-200 pt-4">
              <p className="text-muted-foreground">Estimated Amount</p>
              <p className="text-2xl font-bold text-emerald-800">₹{plannedPackage.cost.toLocaleString()}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <Button onClick={savePlan} variant="outline" className="w-full">
                <Save className="w-4 h-4 mr-2" /> Save Plan
              </Button>
              <Button onClick={handleBookNow} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <CheckCircle className="w-4 h-4 mr-2" /> Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default ManualTourPlanner;
