import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-brand min-h-[50vh] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about AuraBloom and how it can help you manage period pain effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-text-dark">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-button-pink" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-button-pink" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const faqs = [
  {
    question: "What is AuraBloom?",
    answer: "AuraBloom is a comprehensive period pain management mobile application designed to help users track and manage menstrual health. It uses AI-driven insights and offers personalized pain management recommendations, symptom tracking, and a virtual assistant (CareBot) to provide users with knowledge and tools for self-management."
  },
  {
    question: "How does AuraBloom help manage period pain?",
    answer: "AuraBloom helps manage period pain through several key features: \n\nPain relief method recommendations and tracking system to monitor symptom severity. \n\nAI-powered predictive algorithms to forecast cycles and potential symptoms. CareBot that provides context-aware suggestions for pain relief and proactive recommendations"},
  {
    question: "Is my data secure with AuraBloom?",
    answer: "Yes, AuraBloom takes data security seriously. The project documentation shows that the app: Protects user privacy and secures user data. Creates a safe environment for learning and sharing. Implements strong data protection measures. Ensures user anonymity and data protection"
  },
  {
    question: "Can I use the app offline?",
    answer: "Yes, AuraBloom works offline! While some features require internet connectivity, core functionalities like tracking and accessing your personal data remain available offline. Your data will sync automatically when you're back online."
  },
  {
    question: "How does AI improve period tracking?",
    answer: "AI improves period tracking in AuraBloom by: Analyzing user data to recognize patterns and predict future pain triggers. Providing personalized symptom predictions and recommendations. Delivering context-aware suggestions through the CareBot. Generating monthly cycle reports and insights."
  },
  {
    question: "Can I consult a medical professional through the app?",
    answer: "While AuraBloom provides AI-powered health guidance, it's not a substitute for professional medical advice. However, the app can help you track symptoms and generate health reports to share with your healthcare provider during consultations."
  }
];

export default FAQ;