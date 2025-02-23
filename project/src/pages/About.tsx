
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
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
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              About AuraBloom
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Empowering individuals to take control of their menstrual health through innovation and compassion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <h2 className="text-3xl font-bold mb-6 text-text-dark">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize period pain management through innovative technology and personalized care, making comfort and well-being accessible to everyone experiencing menstrual discomfort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <h2 className="text-3xl font-bold mb-6 text-text-dark">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where period pain no longer limits anyone's potential, supported by cutting-edge technology and a compassionate community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-center text-text-dark mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col min-h-[400px]"
              >
                <div className="flex-grow">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-button-pink text-center mb-4">{member.position}</p>
                  <p className="text-gray-600 text-center mb-6 h-24 overflow-y-auto">{member.description}</p>
                </div>
                <div className="flex justify-center space-x-4 mt-auto">
                  {member.linkedin && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-600 hover:text-[#0077b5] transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  )}
                  {member.github && (
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-600 hover:text-[#333] transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  )}
                  {member.email && (
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-600 hover:text-button-pink transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const team = [
  {
    name: "Praveen Sandanayaka",
    position: "Founder & Backend Developer",
    description: "Dedicated software engineering student at IIT focused on Python and AI development. I'm passionate about building user-friendly software solutions and love exploring new technologies to grow my skills.",
    image: "/img/praveen.jpg",
    linkedin: "https://www.linkedin.com/in/praveen-yasas-943b6026a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvdVtUUavR3aNt0IrIfoYXQ%3D%3D",
    github: "https://github.com/PraveenYasas",
    email: "praveenyasas2001@gmail.com"
  },
  {
    name: "Sakith Umagiliya",
    position: "Project Manager & Mobile Developer",
    description: "A driven undergraduate at IIT, passionate about software development, exploring full-stack technologies, and honing web and mobile development skills.",
    image: "/img/kulani (part-time).jpg",
    linkedin: "https://www.linkedin.com/in/sakith-umagiliya-8b927a2bb/",
    github: "https://github.com/sakith71",
    email: "sakiththewmika71@gmail.com"
  },
  {
    name: "Modisa Nallaperuma",
    position: "Chief Technology Officer & Backend Developer",
    description: "An enthusiastic IIT undergraduate passionate about backend development and exploring machine learning to build intelligent and efficient systems.",
    image: "/img/modisa.jpg",
    linkedin: "www.linkedin.com/in/modisa-nallaperuma-681435291",
    github: "https://github.com/ModisaY",
    email: "modisa.nallaperuma@gmail.com"
  },
  {
    name: "Risinu Kudagama",
    position: "Head of Product & Cloud Engineer",
    description: "A full-stack developer passionate about building scalable and efficient solutions, exploring the latest technologies in web development and DevOps as an undergraduate at IIT",
    image: "/img/risinu.jpg",
    linkedin: "https://linkedin.com/in/michaelchang",
    github: "https://github.com/mchang_product",
    email: "michael.chang@aurabloom.com"
  },
  {
    name: "Kulani Geethma",
    position: "UI/UX Designer & Full-stack Developer",
    description: "A full-stack developer at Informatic Institute of Technology, passionate about creating seamless and user-friendly digital experiences.",
    image: "/img/kulani.jpg",
    linkedin: "http://www.linkedin.com/in/kulani-pathirana-878868295",
    github: "https://github.com/mchang_product",
    email: "lisa.patel@aurabloom.com"
  },
  {
    name: "Shani Imasha",
    position: "UI/UX Designer & Mobile Developer",
    description: "An enthusiastic undergraduate at the Informatics Institute of Technology, driven by a curiosity for software development and a deep interest in full-stack technologies.",
    image: "/img/shani.jpg",
    linkedin: "http://www.linkedin.com/in/shani-imasha-833141281",
    github: "https://github.com/Shanuu112",
    email: "d.imashashani2002@gmail.com"
  }
];

export default About;