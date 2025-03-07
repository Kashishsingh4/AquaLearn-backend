const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json()); 


const quizQuestions = [
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
  {
    id: 3,
    question: "Which process purifies water naturally?",
    options: ["Boiling", "Filtration", "Evaporation", "Chlorination"],
    correctAnswer: "Evaporation",
  },
];


app.get("/questions", (req, res) => {
  res.json(quizQuestions);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
