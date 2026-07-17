import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does AstroAI generate my Kundli?",
    answer:
      "AstroAI uses your birth date, time, and location to calculate planetary positions and generate your birth chart using astrology APIs and AI-powered analysis.",
  },
  {
    question: "Is AstroAI free to use?",
    answer:
      "Yes. The core features are free. Premium features like advanced reports and AI consultations can be added in future versions.",
  },
  {
    question: "Are my birth details secure?",
    answer:
      "Yes. Your information is processed securely and is not shared with third parties.",
  },
  {
    question: "Can I download my Kundli?",
    answer:
      "Yes. A downloadable PDF report will be available in future updates.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-5">
            Everything you need to know about AstroAI.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">
                  {faq.question}
                </h3>

                <ChevronDown />
              </div>

              <p className="mt-4 text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;