import { useState } from "react";

const zodiacSigns = [
  { name: "Aries", symbol: "♈" },
  { name: "Taurus", symbol: "♉" },
  { name: "Gemini", symbol: "♊" },
  { name: "Cancer", symbol: "♋" },
  { name: "Leo", symbol: "♌" },
  { name: "Virgo", symbol: "♍" },
  { name: "Libra", symbol: "♎" },
  { name: "Scorpio", symbol: "♏" },
  { name: "Sagittarius", symbol: "♐" },
  { name: "Capricorn", symbol: "♑" },
  { name: "Aquarius", symbol: "♒" },
  { name: "Pisces", symbol: "♓" },
];

function Horoscope() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <span className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500 text-purple-300">
            🌙 Daily Horoscope
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold">
            Choose Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Zodiac Sign
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Select your zodiac sign to explore your daily horoscope.
            This page is ready for future API integration.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16">

          {zodiacSigns.map((sign) => (

            <button
              key={sign.name}
              onClick={() => setSelected(sign)}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 hover:border-purple-500 hover:bg-purple-600/20 transition"
            >
              <div className="text-5xl mb-4">
                {sign.symbol}
              </div>

              <h3 className="text-lg font-semibold">
                {sign.name}
              </h3>

            </button>

          ))}

        </div>

        {selected && (

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <div className="text-center">

              <div className="text-6xl">
                {selected.symbol}
              </div>

              <h2 className="mt-4 text-4xl font-bold">
                {selected.name}
              </h2>

              <p className="mt-6 text-gray-300 leading-8">

                Horoscope API integration is coming soon.

                <br /><br />

                Soon AstroAI will provide:

                <br /><br />

                🌙 Daily Horoscope

                <br />

                ❤️ Love Predictions

                <br />

                💼 Career Guidance

                <br />

                💰 Finance Forecast

                <br />

                🍀 Lucky Number & Lucky Color

              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Horoscope;