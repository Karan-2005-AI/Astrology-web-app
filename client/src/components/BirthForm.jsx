import { useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";
import LoadingSpinner from "./LoadingSpinner";

const API_URL = `${import.meta.env.VITE_API_URL}/astrology/moon-sign`;

function BirthForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    tob: "",
    place: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [aiExplanation, setAiExplanation] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResult(null);
    setAiExplanation("");

    try {
      const response = await axios.post(API_URL, formData);

      console.log("API Response:", response.data);

      setResult(response.data.data);
      setAiExplanation(response.data.aiExplanation);

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl">

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-white mb-8">
          🔮 Discover Your Cosmic Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-purple-200 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="time"
            name="tob"
            value={formData.tob}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            name="place"
            placeholder="Birth Place"
            value={formData.place}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-purple-200 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-bold transition duration-300"
          >
            {loading ? "Generating Horoscope..." : "Generate Horoscope 🔮"}
          </button>

        </form>

        {loading && <LoadingSpinner />}

      </div>

      {!loading && result && (
        <div className="mt-8">
          <ResultCard result={result} />
        </div>
      )}

      {!loading && aiExplanation && (
        <div className="mt-8 rounded-3xl bg-white/10 border border-purple-500/30 backdrop-blur-xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold text-purple-400 mb-6">
            🤖 AI Astrology Report
          </h2>

          <div className="whitespace-pre-wrap leading-8 text-gray-200">
            {aiExplanation}
          </div>

        </div>
      )}

    </div>
  );
}

export default BirthForm;