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
      question: "Which method is best for purifying water at home?",
      options: ["Boiling", "Freezing", "Stirring", "Filtering with sand"],
      correctAnswer: "Boiling",
    },
    {
      id: 2,
      question: "How much of Earth's water is freshwater?",
      options: ["3%", "10%", "25%", "50%"],
      correctAnswer: "3%",
    },
    {
      id: 3,
      question: "How long should you wash your hands with soap to effectively remove germs?",
      options: ["5 seconds", "10 seconds", "20 seconds", "1 minute"],
      correctAnswer: "20 seconds",
    },
    {
      id: 4,
      question: "What is the main cause of water pollution in urban areas?",
      options: ["Air pollution", "Industrial waste", "Noise pollution", "Soil erosion"],
      correctAnswer: "Industrial waste",
    },
    {
      id: 5,
      question: "Why is it important to use a toilet instead of open defecation?",
      options: ["To keep the environment clean", "To prevent diseases", "To maintain dignity and safety", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      id: 6,
      question: "What is the best way to save water while washing clothes?",
      options: ["Using a running tap", "Using a washing machine with a full load", "Washing each item separately", "Using warm water"],
      correctAnswer: "Using a washing machine with a full load",
    },
    {
      id: 7,
      question: "What is the primary reason for handwashing before eating?",
      options: ["To keep hands soft", "To remove germs and prevent illness", "To save water", "To make food taste better"],
      correctAnswer: "To remove germs and prevent illness",
    },
    {
      id: 8,
      question: "Which disease is commonly spread through contaminated water?",
      options: ["Malaria", "Cholera", "Diabetes", "Asthma"],
      correctAnswer: "Cholera",
    },
    {
      id: 9,
      question: "Which of these helps save water at home?",
      options: ["Taking shorter showers", "Watering plants in the afternoon", "Washing cars with a hose", "Leaving taps slightly open"],
      correctAnswer: "Taking shorter showers",
    },
    {
      id: 10,
      question: "What is greywater?",
      options: ["Dirty water from sewage", "Wastewater from sinks, showers, and washing machines", "Polluted water in rivers", "Water that looks grey due to chemicals"],
      correctAnswer: "Wastewater from sinks, showers, and washing machines",
    },
  ],
  scenario: [
    {
      id: 11,
      question: "You notice a leaky faucet in your home, and water is continuously dripping. What should you do?",
      options: [
        "Ignore it",
        "Place a bucket under it to collect the water",
        "Fix the leak or inform an adult to repair it",
        "Let it continue dripping because water is free"
      ],
      correctAnswer: "Fix the leak or inform an adult to repair it",
    },
    {
      id: 12,
      question: "Your friend washes their hands but does not use soap. How would you explain the importance of soap in handwashing?",
      options: [
        "Soap removes germs and bacteria that water alone cannot",
        "Water alone is enough to clean hands",
        "Soap is only needed when hands are visibly dirty",
        "Handwashing is not necessary before eating"
      ],
      correctAnswer: "Soap removes germs and bacteria that water alone cannot",
    },
    {
      id: 13,
      question: "You are camping in a forest with limited water. How would you manage water for drinking, cooking, and hygiene?",
      options: [
        "Wash everything frequently, even if it wastes water",
        "Pour leftover water on the ground",
        "Drink directly from any nearby river or pond",
        "Use only as much water as necessary and store it safely"
      ],
      correctAnswer: "Use only as much water as necessary and store it safely",
    },
    {
      id: 14,
      question: "A school near your house does not have proper toilets. How would you convince authorities to improve sanitation facilities?",
      options: [
        "Explain how poor sanitation leads to diseases and affects students’ health",
        "Say nothing and let the school continue as it is",
        "Tell students to go home whenever they need to use the toilet",
        "Wait for someone else to complain"
      ],
      correctAnswer: "Explain how poor sanitation leads to diseases and affects students’ health",
    },
    {
      id: 15,
      question: "You see someone throwing plastic waste into a river. What would you do to educate them about its effects on water quality?",
      options: [
        "Explain how plastic pollutes water and harms aquatic life",
        "Ignore them because it is not your responsibility",
        "Join them and throw waste in the river",
        "Move the waste to a different place in the water"
      ],
      correctAnswer: "Explain how plastic pollutes water and harms aquatic life",
    },
    {
      id: 16,
      question: "A farmer in your village is using excessive water for irrigation. How would you suggest a more water-efficient method?",
      options: [
        "Tell the farmer to stop farming altogether",
        "Encourage more frequent and longer irrigation",
        "Recommend using drip irrigation or rainwater harvesting",
        "Say nothing and let the farmer continue"
      ],
      correctAnswer: "Recommend using drip irrigation or rainwater harvesting",
    },
    {
      id: 17,
      question: "Your sibling leaves the tap running while brushing their teeth. How would you encourage them to conserve water?",
      options: [
        "Let them continue since water is unlimited",
        "Teach them to turn off the tap while brushing",
        "Suggest using hot water instead",
        "Tell them to use more toothpaste instead of saving water"
      ],
      correctAnswer: "Teach them to turn off the tap while brushing",
    },
    {
      id: 18,
      question: "A child in your neighborhood frequently falls sick due to poor hygiene. What steps would you take to educate them and their family?",
      options: [
        "Teach them about proper handwashing and personal hygiene",
        "Ignore the issue since it's not your problem",
        "Tell them to drink only hot water",
        "Give them medicine without addressing hygiene"
      ],
      correctAnswer: "Give them medicine without addressing hygiene",
    },
    {
      id: 19,
      question: "The public toilets in your area are often dirty and not maintained. How would you address this issue with the community?",
      options: [
        "Stop using public toilets completely",
        "Organize a cleanliness drive and talk to local authorities",
        "Blame others but do nothing",
        "Complain but not take any action"
      ],
      correctAnswer: "Organize a cleanliness drive and talk to local authorities",
    },
    {
      id: 20,
      question: "You are in a school competition to spread awareness about water conservation. What creative ideas would you propose?",
      options: [
        "Tell people they must buy expensive water filters",
        "Waste more water to show how much is used daily",
        "Avoid participating in the competition",
        "Organize a poster campaign and interactive activities"
      ],
      correctAnswer: "Organize a poster campaign and interactive activities",
    }
  ],
  trueFalse: [
    {
      id: 21,
      question: "Turning off the tap while brushing your teeth can save up to 10 liters of water.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      id: 22,
      question: "Boiling water for at least one minute can kill most germs and make it safe to drink.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      id: 23,
      question: "Washing hands with water alone is just as effective as using soap.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
    {
      id: 24,
      question: "Open defecation has no impact on public health.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
    {
      id: 25,
      question: "Rainwater harvesting is a method used to collect and store rainwater for later use.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      id: 26,
      question: "Using a bucket instead of a hose to wash a car helps save water.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      id: 27,
      question: "You only need to wash your hands after using the toilet, not before eating.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
    {
      id: 28,
      question: "Drinking unclean water can lead to diseases like diarrhea and typhoid.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      id: 29,
      question: "Drinking unclean water can lead to diseases like diarrhea and typhoid.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
    {
      id: 30,
      question: "Leaky pipes and taps waste a significant amount of water if not fixed.",
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
