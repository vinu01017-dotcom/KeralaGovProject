import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Ticket, CheckCircle, Calendar, Users } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Fetch booked items from savedTourPlans in localStorage
    const allPlans = JSON.parse(localStorage.getItem('savedTourPlans') || '[]');
    const bookedItems = allPlans.filter(plan => plan.booked);
    setBookingHistory(bookedItems);
  }, [location.pathname]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Ticket className="w-6 h-6 text-emerald-600" />
          <h2 className="text-lg font-semibold text-slate-800">Booking History</h2>
        </div>
      </CardHeader>
      <CardContent>
        {bookingHistory.length > 0 ? (
          <div className="space-y-4">
            {bookingHistory.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-4 border border-slate-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-slate-800">{booking.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      {booking.date && <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {booking.date}</span>}
                      {booking.members && <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {booking.members} Members</span>}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-emerald-700">₹{booking.cost.toLocaleString()}</p>
                    <span className="flex items-center justify-end text-xs text-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" /> Booked
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">You have no booking history.</p>
            <p className="text-sm text-muted-foreground">Your confirmed bookings will appear here.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingHistory;