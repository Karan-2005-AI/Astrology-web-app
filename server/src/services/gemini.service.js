const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateAstrologyExplanation(astrologyData) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const response = astrologyData.response || {};

  const prompt = `
You are an experienced Vedic astrologer.

Analyze this birth information.

Moon Sign:
${response.moon_sign}

Prediction:
${response.prediction}

Generate a beautiful astrology report.

Return the report in this format:

🌙 Moon Sign

🧠 Personality

💼 Career

❤️ Love Life

💰 Finance

🏥 Health

💪 Strengths

⚠️ Weaknesses

🎨 Lucky Color

🔢 Lucky Number

🕉️ Simple Remedies

Write in simple English.

Keep the tone friendly and positive.

Maximum 500 words.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = {
  generateAstrologyExplanation,
};