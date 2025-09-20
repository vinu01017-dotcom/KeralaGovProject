import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Bot, User, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hello! I'm your Kerala Tourism AI assistant. How can I help you plan your trip today?" }
  ]);
  const [input, setInput] = useState('');
  const { toast } = useToast();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes('munnar')) {
      return {
        from: 'bot',
        text: "Munnar is a beautiful hill station known for its tea plantations. Would you like to see a picture?",
        image: "Scenic tea plantations in Munnar with rolling green hills"
      };
    }
    if (lowerInput.includes('best time to visit')) {
      return { from: 'bot', text: "The best time to visit Kerala is from September to March when the weather is cool and pleasant." };
    }
    if (lowerInput.includes('houseboat')) {
      return {
        from: 'bot',
        text: "Alleppey is famous for its houseboat cruises on the backwaters. It's a must-do experience!",
        image: "Traditional houseboat in Alleppey backwaters"
      };
    }
    if (lowerInput.includes('help') || lowerInput.includes('feature')) {
      return { from: 'bot', text: "You can use this app to find places, plan tours based on your budget, see trending packages, and save your plans. What would you like to do?" };
    }
    return { from: 'bot', text: "I'm still learning about all the wonders of Kerala! For now, you can ask me about popular places like Munnar or houseboats. This feature is a work in progress! 🚀" };
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-center space-x-2">
          <Bot className="w-6 h-6 text-emerald-600" />
          <h2 className="text-lg font-semibold text-slate-800">AI Travel Assistant</h2>
        </div>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-end gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.from === 'bot' && <Bot className="w-6 h-6 text-slate-500 flex-shrink-0" />}
              <div className={`max-w-[80%] rounded-lg p-3 ${msg.from === 'user' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                <p className="text-sm">{msg.text}</p>
                {msg.image && (
                  <div className="mt-2">
                    <img className="rounded-lg" alt={msg.image} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <p className="text-xs text-slate-500 mt-1 italic">{msg.image}</p>
                  </div>
                )}
              </div>
              {msg.from === 'user' && <User className="w-6 h-6 text-slate-500 flex-shrink-0" />}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="p-4 border-t flex-shrink-0">
        <div className="flex w-full items-center space-x-2">
          <Input
            placeholder="Ask about your trip..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend} className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AIChatbot;