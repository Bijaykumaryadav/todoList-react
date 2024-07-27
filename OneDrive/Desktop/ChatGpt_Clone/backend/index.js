const express = require("express");
const { OpenAI } = require("openai");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      prompt: message,
      max_tokens: 150,
      temperature: 0.7,
    });

    res.json({ text: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching response from OpenAI" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
