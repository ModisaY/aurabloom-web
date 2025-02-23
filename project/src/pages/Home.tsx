import { motion } from 'framer-motion';
import { Heart, Brain, Sparkles, Bell, Users, Shield } from 'lucide-react';

const Home = () => {
  const floatingBubbles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: Math.random() * 120 + 40,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-brand min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        {floatingBubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-white/5"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.initialX}%`,
              top: `${bubble.initialY}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + bubble.id * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 
                }}
              >
                <Heart className="h-24 w-24 text-white mx-auto mb-6 stroke-[2]" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Smart Period Pain Management
                <br />
                at Your Fingertips
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Take control of your menstrual health with AI-powered tracking,
                personalized insights, and comprehensive pain management solutions.
              </p>
              <motion.button 
                className="bg-button-pink text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-text-dark mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-button-pink mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
    title: "AI-Powered Tracking",
    description: "Advanced cycle predictions and personalized insights using artificial intelligence."
  },
  {
    icon: Heart,
    title: "Pain Management",
    description: "Comprehensive solutions combining natural remedies and medical approaches."
  },
  {
    icon: Sparkles,
    title: "Smart CareBot",
    description: "24/7 AI assistant providing health guidance and support."
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Timely notifications for medication and self-care routines."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others, share experiences, and get advice."
  },
  {
    icon: Shield,
    title: "Data Privacy",
    description: "Your health data is encrypted and securely protected."
  }
];

export default Home;