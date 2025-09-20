import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Users, ChevronDown, Star, MapPin, Calendar } from 'lucide-react';

const MembersDropdown = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const { toast } = useToast();

  const memberOptions = [
    { id: 'single', label: 'Single Member', icon: '👤' },
    { id: 'couples', label: 'Couples', icon: '💑' },
    { id: 'gang', label: 'Gang', icon: '👥' },
    { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
    { id: 'boys-gang', label: 'Boys Gang', icon: '👨‍👨‍👦‍👦' },
    { id: 'girls-gang', label: 'Girls Gang', icon: '👩‍👩‍👧‍👧' },
    { id: 'old-agers', label: 'Old Agers Gang', icon: '👴👵' },
    { id: 'school-students', label: 'School Students', icon: '🎒' },
    { id: 'college-students', label: 'College Students', icon: '🎓' }
  ];

  const getRecommendations = (memberType) => {
    const recommendationsMap = {
      'single': [
        { name: 'Munnar Solo Trek', rating: 4.8, cost: '₹2,500', description: 'Perfect for solo travelers seeking peace' },
        { name: 'Varkala Beach Retreat', rating: 4.7, cost: '₹2,200', description: 'Spiritual and relaxing solo experience' },
        { name: 'Wayanad Nature Walk', rating: 4.6, cost: '₹1,800', description: 'Connect with nature in solitude' },
        { name: 'Fort Kochi Heritage Walk', rating: 4.5, cost: '₹1,500', description: 'Explore history at your own pace' },
        { name: 'Thekkady Spice Tour', rating: 4.4, cost: '₹2,000', description: 'Learn about spices independently' }
      ],
      'couples': [
        { name: 'Alleppey Houseboat Romance', rating: 4.9, cost: '₹8,500', description: 'Romantic backwater cruise for two' },
        { name: 'Munnar Honeymoon Package', rating: 4.8, cost: '₹7,200', description: 'Tea gardens and cozy resorts' },
        { name: 'Kovalam Beach Resort', rating: 4.7, cost: '₹6,800', description: 'Beachside romance and sunset views' },
        { name: 'Wayanad Tree House Stay', rating: 4.6, cost: '₹5,500', description: 'Unique romantic accommodation' },
        { name: 'Kumarakom Lake Resort', rating: 4.8, cost: '₹9,200', description: 'Luxury lakeside romantic getaway' }
      ],
      'gang': [
        { name: 'Goa-Kerala Road Trip', rating: 4.8, cost: '₹4,500', description: 'Adventure-packed group journey' },
        { name: 'Wayanad Adventure Camp', rating: 4.7, cost: '₹3,800', description: 'Trekking and camping with friends' },
        { name: 'Kochi Party Cruise', rating: 4.6, cost: '₹3,200', description: 'Fun-filled group cruise experience' },
        { name: 'Thekkady Wildlife Safari', rating: 4.5, cost: '₹2,800', description: 'Group wildlife exploration' },
        { name: 'Varkala Beach Volleyball', rating: 4.4, cost: '₹2,500', description: 'Beach sports and group fun' }
      ],
      'family': [
        { name: 'Kerala Family Tour Package', rating: 4.9, cost: '₹12,500', description: 'Complete family-friendly itinerary' },
        { name: 'Munnar Family Resort', rating: 4.8, cost: '₹8,800', description: 'Kid-friendly hill station stay' },
        { name: 'Alleppey Family Houseboat', rating: 4.7, cost: '₹10,200', description: 'Spacious boat for families' },
        { name: 'Kochi Science Museum Tour', rating: 4.5, cost: '₹3,500', description: 'Educational family experience' },
        { name: 'Kovalam Family Beach Resort', rating: 4.6, cost: '₹9,500', description: 'Safe beach fun for all ages' }
      ],
      'boys-gang': [
        { name: 'Wayanad Adventure Sports', rating: 4.8, cost: '₹4,200', description: 'Extreme sports and challenges' },
        { name: 'Thekkady Jungle Trek', rating: 4.7, cost: '₹3,500', description: 'Wild jungle exploration' },
        { name: 'Kochi Nightlife Tour', rating: 4.6, cost: '₹3,800', description: 'Experience local nightlife' },
        { name: 'Varkala Cliff Jumping', rating: 4.5, cost: '₹2,800', description: 'Adrenaline-pumping activities' },
        { name: 'Munnar Bike Tour', rating: 4.7, cost: '₹4,000', description: 'Scenic mountain biking adventure' }
      ],
      'girls-gang': [
        { name: 'Alleppey Spa Houseboat', rating: 4.9, cost: '₹6,500', description: 'Relaxing spa treatments on water' },
        { name: 'Munnar Tea Garden Photoshoot', rating: 4.8, cost: '₹3,200', description: 'Instagram-worthy locations' },
        { name: 'Kochi Shopping & Culture Tour', rating: 4.6, cost: '₹2,800', description: 'Shopping and cultural experiences' },
        { name: 'Kovalam Ayurveda Retreat', rating: 4.7, cost: '₹5,500', description: 'Traditional wellness treatments' },
        { name: 'Varkala Yoga & Meditation', rating: 4.5, cost: '₹3,800', description: 'Peaceful yoga sessions by the sea' }
      ],
      'old-agers': [
        { name: 'Kerala Ayurveda Wellness Tour', rating: 4.9, cost: '₹8,500', description: 'Health-focused gentle tour' },
        { name: 'Alleppey Comfortable Houseboat', rating: 4.8, cost: '₹7,200', description: 'Easy access, comfortable cruise' },
        { name: 'Munnar Senior-Friendly Resort', rating: 4.7, cost: '₹6,800', description: 'Accessible hill station stay' },
        { name: 'Kochi Heritage Guided Tour', rating: 4.6, cost: '₹3,500', description: 'Comfortable historical exploration' },
        { name: 'Kovalam Beach Relaxation', rating: 4.5, cost: '₹4,200', description: 'Peaceful beach resort stay' }
      ],
      'school-students': [
        { name: 'Kerala Educational Tour', rating: 4.8, cost: '₹2,500', description: 'Learning-focused group tour' },
        { name: 'Science City Kochi Visit', rating: 4.7, cost: '₹1,800', description: 'Interactive science experiences' },
        { name: 'Wayanad Nature Study Camp', rating: 4.6, cost: '₹2,200', description: 'Environmental education program' },
        { name: 'Thekkady Wildlife Learning', rating: 4.5, cost: '₹2,000', description: 'Wildlife conservation education' },
        { name: 'Munnar Geography Field Trip', rating: 4.4, cost: '₹2,300', description: 'Hands-on geography learning' }
      ],
      'college-students': [
        { name: 'Kerala Backpacking Adventure', rating: 4.8, cost: '₹3,500', description: 'Budget-friendly exploration' },
        { name: 'Varkala Beach Hostel Stay', rating: 4.7, cost: '₹1,800', description: 'Social backpacker experience' },
        { name: 'Wayanad Camping & Trekking', rating: 4.6, cost: '₹2,800', description: 'Adventure camping with peers' },
        { name: 'Kochi Cultural Immersion', rating: 4.5, cost: '₹2,200', description: 'Deep cultural learning experience' },
        { name: 'Alleppey Budget Houseboat', rating: 4.4, cost: '₹3,200', description: 'Affordable group houseboat stay' }
      ]
    };

    return recommendationsMap[memberType] || [];
  };

  const handleMemberSelect = (member) => {
    setSelectedMember(member);
    const recs = getRecommendations(member.id);
    setRecommendations(recs);
    
    toast({
      title: `${member.label} Selected!`,
      description: `Found ${recs.length} perfect recommendations for you`
    });
  };

  const handleBookNow = (place) => {
    toast({
      title: "🚧 Booking Feature",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <Card className="p-6 glass-effect border-emerald-200">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4">Choose Your Travel Group</h2>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="w-full justify-between border-emerald-300 hover:bg-emerald-50"
          >
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-emerald-600" />
              <span>{selectedMember ? `${selectedMember.icon} ${selectedMember.label}` : 'Select Member Type'}</span>
            </div>
            <ChevronDown className="w-4 h-4 text-emerald-600" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full min-w-[300px]">
          {memberOptions.map((member) => (
            <DropdownMenuItem
              key={member.id}
              onClick={() => handleMemberSelect(member)}
              className="cursor-pointer hover:bg-emerald-50"
            >
              <span className="mr-3 text-lg">{member.icon}</span>
              {member.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <AnimatePresence>
        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 space-y-4"
          >
            <h3 className="text-lg font-semibold text-emerald-800">
              Recommended for {selectedMember?.label}
            </h3>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {recommendations.map((place, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg border border-emerald-200 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-emerald-800">{place.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{place.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{place.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700 font-semibold">{place.cost}</span>
                    <Button
                      size="sm"
                      onClick={() => handleBookNow(place)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      Book Now
                    </Button>
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

export default MembersDropdown;