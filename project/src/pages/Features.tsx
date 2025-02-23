
import { motion } from 'framer-motion';
import { Brain, Heart, Sparkles, Bell, Users, Shield, Clock, Smartphone } from 'lucide-react';

const Features = () => {
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
              Powerful Features for Better Health
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover how AuraBloom helps you take control of your menstrual health with innovative features and personalized care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <feature.icon className="h-12 w-12 text-button-pink" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-button-pink" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: Brain,
    title: "AI-Powered Period Tracking",
    description: "Our advanced AI algorithm learns from your unique patterns to provide accurate predictions and personalized insights.",
    benefits: [
      "Smart cycle predictions",
      "Personalized health insights",
      "Pattern recognition"
    ]
  },
  {
    icon: Heart,
    title: "Comprehensive Pain Management",
    description: "Access a wide range of pain management solutions tailored to your specific needs and preferences.",
    benefits: [
      "Natural remedy suggestions",
      "Exercise recommendations",
      "Diet tips for pain relief"
    ]
  },
  {
    icon: Sparkles,
    title: "24/7 AI Health Assistant",
    description: "Meet your personal health companion, available anytime to answer questions and provide guidance.",
    benefits: [
      "Instant health advice",
      "Symptom analysis",
      "Wellness recommendations"
    ]
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Never miss important health-related reminders with our intelligent notification system.",
    benefits: [
      "Medication reminders",
      "Cycle predictions",
      "Appointment alerts"
    ]
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Connect with others who understand your journey in our safe and supportive community space.",
    benefits: [
      "Anonymous sharing",
      "Expert advice",
      "Group discussions",
      "Peer support"
    ]
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your health data is protected with industry-leading security measures and encryption.",
    benefits: [
      "End-to-end encryption",
      "GDPR compliance",
      "Data anonymization",
      "Secure cloud storage"
    ]
  }
];

export default Features;