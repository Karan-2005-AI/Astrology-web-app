import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StarBackground from "./StarBackground";
import ShootingStars from "./ShootingStars";
import FloatingPlanets from "./FloatingPlanets";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white flex items-center justify-center">

      <StarBackground />
      <ShootingStars />
      <FloatingPlanets />

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute top-20 right-10 h-56 w-56 rounded-full bg-pink-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-5 py-2 rounded-full border border-purple-500 bg-purple-500/10 text-purple-300 mb-6">
            ✨ AI Powered Astrology Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Discover Your

          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Cosmic Journey
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300"
        >
          Experience AI-powered Kundli generation, Moon Sign analysis,
          horoscope predictions and personalized astrology insights
          through a beautiful modern interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-5"
        >
          <Link
            to="/kundli"
            className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold shadow-lg hover:shadow-purple-500/30"
          >
            Generate Kundli
          </Link>

          <a
            href="#features"
            className="px-8 py-4 rounded-xl border border-gray-600 hover:border-purple-400 hover:bg-white/5 transition font-semibold"
          >
            Explore Features
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;