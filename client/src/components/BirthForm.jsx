import { useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

function BirthForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    tob: "",
    place: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

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

    try {
      const response = await axios.post(
        "http://localhost:5000/api/astrology/moon-sign",
        formData
      );

      setResult(response.data.data);

    } catch (error) {
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

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-white text-center mb-8">
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
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-purple-200 outline-none"
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white outline-none"
          />

          <input
            type="time"
            name="tob"
            value={formData.tob}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white outline-none"
          />

          <input
            type="text"
            name="place"
            placeholder="Birth Place"
            value={formData.place}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-purple-200 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition"
          >
            {loading ? "Generating..." : "Generate Horoscope 🔮"}
          </button>

        </form>

      </div>

      <ResultCard result={result} />

    </div>
  );
}

export default BirthForm;