import {
  Sparkles,
  Moon,
  Heart,
  Briefcase,
  CalendarDays,
  Bot,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

const features = [
  {
    icon: <Sparkles size={40} />,
    title: "AI Kundli Generator",
    desc: "Generate detailed birth charts instantly using AI and planetary calculations.",
  },
  {
    icon: <Moon size={40} />,
    title: "Moon Sign Analysis",
    desc: "Understand your emotions, strengths and personality through your Moon Sign.",
  },
  {
    icon: <Heart size={40} />,
    title: "Love Compatibility",
    desc: "Analyze compatibility between partners using astrological insights.",
  },
  {
    icon: <Briefcase size={40} />,
    title: "Career Guidance",
    desc: "Discover career opportunities and professional strengths through astrology.",
  },
  {
    icon: <CalendarDays size={40} />,
    title: "Daily Horoscope",
    desc: "Receive fresh daily predictions tailored to your zodiac sign.",
  },
  {
    icon: <Bot size={40} />,
    title: "AI Astrology Assistant",
    desc: "Ask astrology questions and receive AI-powered personalized guidance.",
  },
];

const FeatureCards = () => {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Powerful Features"
          subtitle="AstroAI combines Artificial Intelligence with Vedic Astrology to deliver fast, accurate and personalized insights."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <ScrollReveal key={index}>
              <GlassCard className="p-8 h-full">

                <div className="text-purple-400 mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.desc}
                </p>

              </GlassCard>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeatureCards;