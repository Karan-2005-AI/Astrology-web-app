import { UserPlus, MapPin, Sparkles, FileText } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={40} />,
    title: "Enter Birth Details",
    description:
      "Provide your name, date of birth, time of birth and place of birth.",
  },
  {
    icon: <MapPin size={40} />,
    title: "AI Calculates Planetary Positions",
    description:
      "AstroAI determines planetary placements using astrology APIs and calculations.",
  },
  {
    icon: <Sparkles size={40} />,
    title: "AI Analysis",
    description:
      "Our AI interprets your birth chart to generate meaningful insights.",
  },
  {
    icon: <FileText size={40} />,
    title: "Get Your Report",
    description:
      "Receive a detailed Kundli, horoscope and personalized predictions instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            How AstroAI Works
          </h2>

          <p className="text-gray-400 mt-5">
            Get your complete astrology report in just four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500 transition duration-300"
            >
              <div className="flex justify-center text-purple-400 mb-5">
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400">
                {step.description}
              </p>

              <div className="mt-6 text-purple-400 font-bold text-lg">
                Step {index + 1}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;