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
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const validateForm = () => {
    if (
      !formData.name.trim() ||
      !formData.dob ||
      !formData.tob ||
      !formData.place.trim()
    ) {
      setError("Please fill in all the required fields.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await axios.post(API_URL, formData);

      setResult(response.data.data);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
        "Unable to generate your Kundli. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      dob: "",
      tob: "",
      place: "",
    });

    setResult(null);
    setError("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-white mb-2">
          🔮 Generate Your Kundli
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Fill in your birth details to receive your AI-powered astrology report.
        </p>

        {error && (
          <div className="mb-6 rounded-xl border border-red-500 bg-red-500/20 p-4 text-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              className="w-full rounded-xl bg-white/20 p-4 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              disabled={loading}
              className="w-full rounded-xl bg-white/20 p-4 text-white outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Time of Birth
            </label>

            <input
              type="time"
              name="tob"
              value={formData.tob}
              onChange={handleChange}
              disabled={loading}
              className="w-full rounded-xl bg-white/20 p-4 text-white outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Birth Place
            </label>

            <input
              type="text"
              name="place"
              placeholder="e.g. Bilaspur, Chhattisgarh"
              value={formData.place}
              onChange={handleChange}
              disabled={loading}
              className="w-full rounded-xl bg-white/20 p-4 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
            />
          </div>

          <div className="flex gap-4">

            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-xl bg-purple-600 py-4 font-bold text-white transition hover:bg-purple-700 disabled:opacity-70"
            >
              {loading ? "Generating..." : "Generate Kundli 🔮"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              disabled={loading}
              className="rounded-xl border border-gray-500 px-6 py-4 text-white transition hover:bg-white/10 disabled:opacity-70"
            >
              Reset
            </button>

          </div>

        </form>

        {loading && (
          <div className="mt-8">
            <LoadingSpinner />
            <p className="mt-4 text-center text-gray-300">
              Calculating your birth chart...
            </p>
          </div>
        )}

      </div>

      {!loading && result && (
        <div className="mt-10">
          <ResultCard result={result} />
        </div>
      )}

    </div>
  );
}

export default BirthForm;