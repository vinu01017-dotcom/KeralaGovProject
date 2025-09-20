import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const surveyQuestions = [
  { id: 'q1', text: 'What is your age group?', type: 'radio', options: ['Under 18', '18-30', '31-50', 'Above 50'] },
  { id: 'q2', text: 'Is there sufficient public transportation (bus, train, etc.) in your area?', type: 'radio', options: ['Yes', 'No', 'Somewhat'] },
  { id: 'q3', text: 'How often do you use public transport?', type: 'radio', options: ['Daily', 'Weekly', 'Monthly', 'Rarely/Never'] },
  { id: 'q4', text: 'What are the biggest challenges with current transportation?', type: 'text', placeholder: 'e.g., Crowding, Delays, Cost' },
  { id: 'q5', text: 'What improvements would you suggest for the transportation system?', type: 'text', placeholder: 'e.g., More routes, Better frequency' },
  { id: 'q6', text: 'How far is your usual travel distance to work/school/market?', type: 'radio', options: ['Less than 5 km', '5-15 km', '15-30 km', 'More than 30 km'] },
];

const SurveyPage = () => {
  const [answers, setAnswers] = useState({});
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleAnswerChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(answers).length < surveyQuestions.length) {
      toast({
        title: "Incomplete Survey",
        description: "Please answer all questions before submitting.",
        variant: "destructive"
      });
      return;
    }
    localStorage.setItem('surveyAnswers', JSON.stringify(answers));
    toast({
      title: "Survey Submitted!",
      description: "Thank you for your valuable feedback.",
    });
    setAnswers({});
  };

  return (
    <>
      <Helmet>
        <title>{t('surveyPage.title')}</title>
        <meta name="description" content={t('surveyPage.metaDescription')} />
      </Helmet>
      <div className="light-page-bg min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{t('surveyPage.surveyTitle')}</h1>
            <p className="text-slate-600 mb-8">{t('surveyPage.surveySubtitle')}</p>
          </motion.div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {surveyQuestions.map((q, index) => (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <Label className="text-base font-semibold text-slate-700">{index + 1}. {q.text}</Label>
                  {q.type === 'radio' && (
                    <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)} className="space-y-2">
                      {q.options.map(opt => (
                        <div key={opt} className="flex items-center space-x-2">
                          <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                          <Label htmlFor={`${q.id}-${opt}`}>{opt}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                  {q.type === 'text' && (
                    <Input
                      placeholder={q.placeholder}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      required
                    />
                  )}
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">{t('surveyPage.submit')}</Button>
              </motion.div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SurveyPage;