import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    number: 50000,
    suffix: "+",
    label: "Kundlis Generated",
  },
  {
    number: 99,
    suffix: "%",
    label: "Prediction Accuracy",
  },
  {
    number: 24,
    suffix: "/7",
    label: "AI Availability",
  },
  {
    number: 12,
    suffix: "+",
    label: "Astrology Services",
  },
];

const Stats = () => {
  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Trusted by Astrology Enthusiasts
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
              AstroAI combines Artificial Intelligence and Vedic Astrology
              to deliver fast, accurate and personalized insights.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-5xl font-bold text-purple-400 mb-3">
                  <AnimatedCounter
                    end={item.number}
                    suffix={item.suffix}
                  />
                </div>

                <p className="text-gray-400">
                  {item.label}
                </p>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Stats;