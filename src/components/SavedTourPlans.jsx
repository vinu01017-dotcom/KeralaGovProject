import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Save, Trash2, Share2, Edit, Calendar, Users, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SavedTourPlans = () => {
  const [savedPlans, setSavedPlans] = useState([]);
  const { toast } = useToast();
  const location = useLocation();

  useEffect(() => {
    const plans = JSON.parse(localStorage.getItem('savedTourPlans') || '[]');
    setSavedPlans(plans.filter(plan => !plan.booked)); // Only show non-booked plans here
  }, [location.pathname]);

  const deletePlan = (id) => {
    const allPlans = JSON.parse(localStorage.getItem('savedTourPlans') || '[]');
    const updatedPlans = allPlans.filter(plan => plan.id !== id);
    localStorage.setItem('savedTourPlans', JSON.stringify(updatedPlans));
    setSavedPlans(updatedPlans.filter(plan => !plan.booked));
    toast({
      title: "Plan Deleted",
      description: "The tour plan has been removed.",
      variant: "destructive"
    });
  };

  const handleShare = () => {
    toast({
      title: "🚧 Share Feature",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleEdit = () => {
    toast({
      title: "🚧 Edit Feature",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm border-emerald-200">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
        <Save className="w-5 h-5 mr-2" />
        Saved Tour Plans
      </h2>
      
      <AnimatePresence>
        {savedPlans.length > 0 ? (
          <div className="space-y-4">
            {savedPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg border border-emerald-200 p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-emerald-800">{plan.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {plan.date}</span>
                      <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {plan.members} Members</span>
                    </div>
                  </div>
                  <p className="font-bold text-lg text-emerald-700">₹{plan.cost.toLocaleString()}</p>
                </div>
                <div className="flex gap-2 mt-4 border-t border-emerald-100 pt-3">
                  <Button size="sm" variant="ghost" onClick={handleEdit}><Edit className="w-4 h-4 mr-2" /> Edit</Button>
                  <Button size="sm" variant="ghost" onClick={handleShare}><Share2 className="w-4 h-4 mr-2" /> Share</Button>
                  <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-600" onClick={() => deletePlan(plan.id)}>
                    <Trash2 className="w-4 h-4 mr-2" /> Delete
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <p className="text-muted-foreground">You have no saved tour plans.</p>
            <p className="text-sm text-muted-foreground">Use the Manual Tour Planner to create and save a new plan!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default SavedTourPlans;