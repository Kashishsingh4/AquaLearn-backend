const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const quizQuestions = {
  general: [
    {
      id: 1,
      question: "What is the main source of freshwater?",
      options: ["Rivers", "Lakes", "Glaciers", "Oceans"],
      correctAnswer: "Glaciers",
    },
    {
      id: 2,
      question: "How much of Earth's water is freshwater?",
      options: ["3%", "10%", "25%", "50%"],
      correctAnswer: "3%",
    },
  ],
  scenario: [
    {
      id: 3,
      question: "You see a leaking tap in a public restroom. What should you do?",
      options: [
        "Ignore it",
        "Report it to maintenance",
        "Use it as is",
        "Try to fix it yourself"
      ],
      correctAnswer: "Report it to maintenance",
    },
  ],
  trueFalse: [
    {
      id: 4,
      question: "Boiling water kills most harmful bacteria. (True/False)",
      options: ["True", "False"],
      correctAnswer: "True",
    },
  ],
};

app.get("/questions", (req, res) => {
  const { type } = req.query;
  if (type && quizQuestions[type]) {
    res.json(quizQuestions[type]);
  } else {
    res.status(400).json({ error: "Invalid question type" });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
