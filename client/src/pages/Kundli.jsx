import { motion } from "framer-motion";
import BirthForm from "../components/BirthForm";

function Kundli() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500 text-purple-300 mb-6">
            🔮 AstroAI Kundli Generator
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Generate Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Powered Kundli
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Enter your birth details below and receive an AI-powered
            astrology report including Moon Sign, planetary insights,
            personality analysis and future guidance.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

            <BirthForm />

          </div>
        </motion.div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              🌙 Moon Sign
            </h3>

            <p className="text-gray-400">
              Discover your emotional personality and natural strengths
              through your Moon Sign.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
              💼 Career Insights
            </h3>

            <p className="text-gray-400">
              Receive AI-generated career guidance based on your birth
              chart and planetary positions.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-2xl font-bold text-pink-400 mb-3">
              ❤️ Love & Relationships
            </h3>

            <p className="text-gray-400">
              Understand compatibility, relationships and emotional
              connections through astrology.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Kundli;