import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    review:
      "AstroAI generated my Kundli within seconds. The interface is clean and the insights are surprisingly detailed.",
  },
  {
    name: "Priya Verma",
    role: "College Student",
    review:
      "I loved the AI explanations. Instead of complicated astrology terms, everything was explained in simple language.",
  },
  {
    name: "Aman Gupta",
    role: "Entrepreneur",
    review:
      "The UI feels premium and the predictions are easy to understand. Looking forward to more advanced features.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            What Users Say
          </h2>

          <p className="text-gray-400 mt-5">
            Sample testimonials showcasing the AstroAI experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500 transition duration-300"
            >
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 mb-6">
                "{item.review}"
              </p>

              <h3 className="font-semibold text-xl">
                {item.name}
              </h3>

              <p className="text-purple-400">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;