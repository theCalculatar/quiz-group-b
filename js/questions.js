
const quizzes = [
  {
    question: "Which company developed the Android operating system?",
    options: ["Google", "Microsoft", "Apple"],
    answer: "Google",
  },
  {
    question: "What is the purpose of Git in software development?",
    options: [
      "To design user interfaces",
      "To manage version control",
      "To create databases",
    ],
    answer: "To manage version control",
  },
  {
    question: "Which of these is a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL"],
    answer: "MongoDB",
  },
  {
    question: 'What does "API" stand for?',
    options: [
      "Application Program Integration",
      "Application Programming Interface",
      "Automated Processing Input",
    ],
    answer: "Application Programming Interface",
  },
  {
    question: "Which of the following is a popular cloud computing platform?",
    options: ["AWS (Amazon Web Services)", "Apache", "MySQL"],
    answer: "AWS (Amazon Web Services)",
  },
].sort(()=> 0.5 - Math.random());

export default quizzes