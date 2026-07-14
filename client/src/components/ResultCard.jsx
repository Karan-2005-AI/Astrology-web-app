function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-8 w-full rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-2xl">

      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white">
          🌙 {result.response.moon_sign}
        </h2>

        <p className="text-purple-200 mt-2">
          Your Cosmic Moon Sign
        </p>
      </div>

      <div className="space-y-5">

        <div className="bg-purple-900/30 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-purple-300 mb-2">
            🤖 AI Summary
          </h3>

          <p className="text-white">
            {result.response.bot_response}
          </p>
        </div>

        <div className="bg-indigo-900/30 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-indigo-300 mb-2">
            📖 Prediction
          </h3>

          <p className="text-white leading-7">
            {result.response.prediction}
          </p>
        </div>

      </div>
    </div>
  );
}

export default ResultCard;