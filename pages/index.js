import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  { name: "Sports Betting Arbitrage", description: "Typically odds across different sports betting sites differ slightly. Individuals can take advantage of them by hedging all positions in a sports event on two different platforms with distinct odds in such a way as to make a profit.", github: "https://github.com/Vihaan-Narvekar/arbitrage-sports-betting-project" },
  { name: "Black Scholes Option Pricing Visualizer", description: "Given inputs, the program calculates call/put option prices using the Black Scholes pricing model. There are also heatmaps for volatility in relation to price as well as graphics for all greeks.", github: "https://github.com/Vihaan-Narvekar/Black-Scholes-Pricing" },
  { name: "Geospatial Positioning with Landmark Recognition", description: "Our project uses a database of famous landmarks and their surroundings. It uses an algorithm rooted in algebra and trigonometry in order to determine the relative position of the camera in relation to the landmark.", github: "https://devpost.com/software/geospatial-positioning-using-ai-landmark-recognition" },
  { name: "F1 Prediction Analysis", description: "The F1 Race Predictor is a machine learning-based tool designed to predict race outcomes based on historical data, qualifying results, and weather conditions. ", github: "https://github.com/Vihaan-Narvekar/F1_Predictions" }
];

const experience = [
  { company: "LSE Data Science Society", role: "Events Manager", duration: "2024-2025", description: "Worked on data analysis for speakers and managed interorganizational events. Helped develop a workflow for workshops to ease setup and processing time by 10%." },
  { company: "Cisco", role: "Intern", duration: "Summer 2023", description: "Collaborated with technical managers to develop a capstone project that utilized climate-based full-stack observability for day-to-day transactions and app database needs, increasing sustainability in financial services." }
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    document.body.className = darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  }, [darkMode]);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 shadow-md bg-opacity-90 bg-gray-800 dark:bg-gray-900">
        <div className="flex gap-6 text-lg">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#recent experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="text-xl focus:outline-none">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <motion.h1 
          className="text-6xl font-bold mb-4" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm Vihaan Narvekar
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 mt-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Finance & Quantitative Economics | NYU Stern
        </motion.p>
        <motion.div 
          className="flex justify-center gap-8 mt-6 text-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a 
            href="https://github.com/Vihaan-Narvekar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 hover:text-white hover:scale-110 transition-all duration-200"
            style={{pointerEvents: 'auto'}}
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/vihaan-narvekar/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 hover:text-white hover:scale-110 transition-all duration-200"
            style={{pointerEvents: 'auto'}}
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:vihaan.narvekar@stern.nyu.edu?subject=Portfolio Inquiry" 
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 hover:text-white hover:scale-110 transition-all duration-200"
            style={{pointerEvents: 'auto'}}
          >
            <FaEnvelope />
          </a>
        </motion.div>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-3xl" 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ repeat: Infinity, duration: 4 }}
        ></motion.div>
      </motion.section>

      {/* Divider */}
      <div className="w-full max-w-6xl mx-auto border-t border-gray-700 opacity-30 my-10"></div>

      {/* Experience Section */}
      <motion.section 
        className="min-h-screen flex flex-col justify-center items-center px-10 py-20" 
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-5xl font-semibold mb-12">Experience</h2>
        <div className="mt-8 space-y-10 w-full max-w-4xl">
          {experience.map((job, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold">{job.company}</h3>
              <p className="text-lg text-gray-400 my-2">{job.role} | {job.duration}</p>
              <p className="text-gray-300 mt-4">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full max-w-6xl mx-auto border-t border-gray-700 opacity-30 my-10"></div>

      {/* Projects Section */}
      <motion.section 
        className="min-h-screen flex flex-col justify-center items-center px-10 py-20" 
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-5xl font-semibold mb-12">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      className={`bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:rotate-2 hover:scale-105 transition-all duration-300 ${
        index === projects.length - 1 && projects.length % 3 === 1 ? "lg:col-span-3 mx-auto" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold">{project.name}</h3>
      <p className="text-gray-400 mt-4 mb-6">{project.description}</p>
      <a 
        href={project.github} 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition"
      >
        View Project
      </a>
    </motion.div>
  ))}
</div>

      </motion.section>

      {/* Divider */}
      <div className="w-full max-w-6xl mx-auto border-t border-gray-700 opacity-30 my-10"></div>

      {/* Contact Section */}
      <motion.section 
        className="min-h-screen flex flex-col justify-center items-center px-10 py-20" 
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-5xl font-semibold mb-8">Get In Touch</h2>
        <motion.p 
          className="text-lg text-gray-400 mt-6 text-center max-w-2xl mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Feel free to reach out for collaboration or just to say hi!
        </motion.p>
        <motion.a 
          href="mailto:vihaan.narvekar@stern.nyu.edu?subject=Let's Connect&body=Hi, I'd love to get in touch!" 
          className="mt-6 inline-block px-8 py-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-400 transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          Contact Me
        </motion.a>
      </motion.section>
    </div>
  );
}
