/*
  ================================================================
  HOW MUCH YOU KNOW ME
  Author: Oduetse Moaletsane
  Corrected Version

  Improvements
  ----------------------------------------------------------------
  ✓ Supports multiple accepted answers.
  ✓ Supports legacy single answer questions.
  ✓ Better normalization.
  ✓ Better date comparison.
  ✓ Better numeric comparison.
  ✓ Better keyword comparison.
  ✓ Improved sound handling.
  ================================================================
*/

const QUESTION_COUNT = 20;

const questionBank = [

  {
    category: "Identity",
    icon: "👤",
    question: "What is my full name?",
    instruction: "Enter my first name and surname.",
    answers: [
      "Oduetse Moaletsane"
    ]
  },

  {
    category: "Identity",
    icon: "😎",
    question: "What is my nickname?",
    instruction: "Enter the nickname only.",
    answers: [
      "Dux",
	  "ducks"
    ]
  },

  {
    category: "Family",
    icon: "👨",
    question: "What is my father's full name?",
    instruction: "Enter his first name and surname.",
    answers: [
      "Diiteo Moaletsane"
    ]
  },

  {
    category: "Family",
    icon: "🕊️",
    question: "Is my father alive or late?",
    instruction: "Answer with alive or late.",
    answers: [
      "late"
    ]
  },

  {
    category: "Family",
    icon: "👩",
    question: "What is my mother's full name?",
    instruction: "Enter her first name and surname.",
    answers: [
      "Alican Moaletsane"
    ]
  },

  {
    category: "Family",
    icon: "❤️",
    question: "Is my mother alive or late?",
    instruction: "Answer with alive or late.",
    answers: [
      "alive"
    ]
  },

  {
    category: "Family",
    icon: "👨‍👩‍👧‍👦",
    question: "How many siblings do I have?",
    instruction: "Enter the number.",
    answers: [
      "6"
    ],
    numeric: true
  },

  {
    category: "Family",
    icon: "👦",
    question: "How many of my siblings are male?",
    instruction: "Enter the number.",
    answers: [
      "2"
    ],
    numeric: true
  },

  {
    category: "Family",
    icon: "👧",
    question: "How many of my siblings are female?",
    instruction: "Enter the number.",
    answers: [
      "4"
    ],
    numeric: true
  },

  {
    category: "Marriage",
    icon: "💍",
    question: "What is my wife's full married name?",
    instruction: "Enter her first name and surname.",
    answers: [
      "Ipuseng Moaletsane"
    ]
  },

  {
    category: "Marriage",
    icon: "📜",
    question: "What is my wife's maiden surname?",
    instruction: "Enter surname only.",
    answers: [
      "Zambo"
    ]
  },

  {
    category: "Family",
    icon: "👨‍👩‍👧",
    question: "How many daughters do we have?",
    instruction: "Enter the number.",
    answers: [
      "1"
    ],
    numeric: true
  },

  {
    category: "Family",
    icon: "👧🏽",
    question: "What is our daughter's full name?",
    instruction: "Enter all three names.",
    answers: [
      "Laciana Loago Moaletsane",
	  "Laciana Moaletsane",
	  "Loago Moaletsane"
    ]
  },

  {
    category: "Personal",
    icon: "🎂",
    question: "What is my full date of birth?",
    instruction: "Use DD Month YYYY.",
    answers: [
      "24 August 1982",
      "24th August 1982",
	  "24-08-1982",
	  "24081982",
	  "240882",
	  "24/08/1982",
	  "24/08/82",
	  "24August1982"
	 
    ],
    date: true
  },

  {
    category: "Faith",
    icon: "✝️",
    question: "What is my religion?",
    instruction: "Enter one word.",
    answers: [
      "Christian",
      "Christianity"
    ]
  },

  {
    category: "Career",
    icon: "🛡️",
    question: "What is my job title?",
    instruction: "Enter the full title.",
    answers: [
      "Data Protection Officer",
      "Specialist Data Protection",
      "Data Protection Specialist",
      "DPO",
	  "Statistician",
	  "Demographer",
	  "Data Scientist",
	  "Data Protection",
	  "Specialist"
    ]
  },

  {
    category: "Career",
    icon: "🏦",
    question: "At which organisation do I work?",
    instruction: "Enter the full name or abbreviation.",
    answers: [
      "Botswana Savings Bank",
      "BSB",
	  "At the Farm",
	  "Odiplus",
	  "Odiplus Investment"
    ]
  },

  {
    category: "Education",
    icon: "🎓",
    question: "What bachelor's degree do I hold?",
    instruction: "Enter the degree.",
    answers: [
      "Bachelor of Arts in Social Science",
      "Bachelor of Arts in Social Sciences",
      "BA Social Science",
      "BA Social Sciences",
	  "BASS",
	  "Social Science",
	  "Social Sciences"
    ]
  },

  {
    category: "Education",
    icon: "📈",
    question: "Which two subjects did I major in?",
    instruction: "Separate them with AND.",
    answers: [
      "Statistics and Demography",
      "Demography and Statistics",
	  "Stats and Demo",
	  "Demo and Stats",
	  "Statistics and Population Studies",
	  "Population Studies and Statistics"
    ]
  },

  {
    category: "Education",
    icon: "💻",
    question: "Which master's degree am I enrolled for?",
    instruction: "Enter the degree.",
    answers: [
      "Master of Science in Data Science",
      "MSc Data Science",
      "MSc in Data Science",
	  "Data Sciences",
	  "Data Science"
    ]
  },
  {
    category: "Education",
    icon: "🧠",
    question: "What are my two master's specialisations?",
    instruction: "Enter both areas separated by AND.",
    answers: [
      "Big Data Analytics and Software Engineering",
      "Software Engineering and Big Data Analytics",
      "Big Data and Software Engineering",
      "Software Engineering and Big Data"
    ]
  },

  {
    category: "Location",
    icon: "🏠",
    question: "Where do I live?",
    instruction: "Enter the village name only.",
    answers: [
      "Oodi",
	  "Gaborone",
	  "Mahalapye",
	  "Seruruma"
    ]
  },

  {
    category: "Location",
    icon: "🏙️",
    question: "In which city do I work?",
    instruction: "Enter the city name only.",
    answers: [
      "Gaborone"
    ]
  },

  {
    category: "Faith",
    icon: "⛪",
    question: "Which church do I attend?",
    instruction: "Enter the church and village.",
    answers: [
      "Assemblies of God Modipane",
      "Assemblies of God in Modipane",
      "Modipane Assemblies of God",
      "Modipane AoG",
	  "AoG Modipane",
	  "Assemly of God",
	  "Assembly of God Modipane",
	  "Modipane Assembly of God"
    ]
  },

  {
    category: "Faith",
    icon: "🙏",
    question: "Who is my pastor?",
    instruction: "Enter his title, first name and surname.",
    answers: [
      "Rev Stephen Motlhagodi",
      "Reverend Stephen Motlhagodi",
      "Stephen Motlhagodi",
	  "Pastor Motlhagodi",
	  "Pastor Stephen Motlhagodi",
	  "Rev. Stephen Motlhagodi"
    ]
  },

  {
    category: "Lifestyle",
    icon: "🐄",
    question: "What do I do besides my professional work?",
    instruction: "Enter the occupation or activity.",
    answers: [
      "Farmer",
      "Farming",
	  "Cattle farming",
	  "Cattle rearing"
    ]
  },

  {
    category: "Lifestyle",
    icon: "🌾",
    question: "Where is my cattle post?",
    instruction: "Enter the place name only.",
    answers: [
      "Seruruma",
	  "Mmaphashalala",
	  "Mookane",
	  "Seroroma"
    ]
  },

  {
    category: "Vehicles",
    icon: "🛻",
    question: "Which Nissan vehicle do I drive?",
    instruction: "Enter the model and specification.",
    answers: [
      "Nissan Navara 4x4 Pro",
      "Navara 4x4 Pro",
      "Nissan Navara",
	  "Navara",
	  "Pro 4x"
    ]
  },

  {
    category: "Vehicles",
    icon: "🚘",
    question: "Which BMW model do I own?",
    instruction: "Enter the model, generation and version.",
    answers: [
      "BMW 320i E90 facelift",
      "BMW 320i E90",
      "320i E90 facelift",
      "BMW E90 facelift",
	  "BMW e90",
	  "e90",
	  "320",
	  "320i"
    ]
  },

  {
    category: "Vehicles",
    icon: "🚚",
    question: "Which GWM vehicle do I own?",
    instruction: "Enter the model and body type.",
    answers: [
      "GWM single cab Cargo",
      "GWM Cargo single cab",
      "GWM Cargo",
      "GWM single cab",
	  "GWM rhino",
	  "Rhino"
    ]
  },

  {
    category: "Vehicles",
    icon: "💚",
    question: "Which of my vehicles do I like most?",
    instruction: "Enter the vehicle name.",
    answers: [
      "GWM Cargo",
      "GWM single cab Cargo",
      "GWM Cargo single cab",
	  "GWM rhino",
	  "Rhino"
    ]
  },

  {
    category: "Vehicles",
    icon: "🐄",
    question: "Why do I like the GWM Cargo most?",
    instruction: "State the main reason in a short phrase.",
    keywords: [
      "cattle post", "cattlepost", "farm", "farming"
    ],
    answerHint: "Because I mostly use it for the cattle post."
  }

];

const state = {
  selectedQuestions: [],
  currentIndex: 0,
  correct: 0,
  answered: false,
  playerName: "",
  soundOn: true
};

const screens = {
  welcome: document.getElementById("welcomeScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen")
};

const els = {
  playerName: document.getElementById("playerName"),
  startBtn: document.getElementById("startBtn"),
  restartTopBtn: document.getElementById("restartTopBtn"),
  soundToggle: document.getElementById("soundToggle"),
  playerGreeting: document.getElementById("playerGreeting"),
  currentQuestionNumber: document.getElementById("currentQuestionNumber"),
  progressBar: document.getElementById("progressBar"),
  correctCount: document.getElementById("correctCount"),
  remainingCount: document.getElementById("remainingCount"),
  questionCategory: document.getElementById("questionCategory"),
  questionIcon: document.getElementById("questionIcon"),
  questionText: document.getElementById("questionText"),
  questionInstruction: document.getElementById("questionInstruction"),
  answerForm: document.getElementById("answerForm"),
  answerInput: document.getElementById("answerInput"),
  answerWrap: document.querySelector(".answer-wrap"),
  answerStatusIcon: document.getElementById("answerStatusIcon"),
  feedbackText: document.getElementById("feedbackText"),
  submitAnswerBtn: document.getElementById("submitAnswerBtn"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  resultHeading: document.getElementById("resultHeading"),
  resultSummary: document.getElementById("resultSummary"),
  scorePercentage: document.getElementById("scorePercentage"),
  scoreRing: document.querySelector(".score-ring"),
  meterFill: document.getElementById("meterFill"),
  meterMarker: document.getElementById("meterMarker"),
  cartoonMessage: document.getElementById("cartoonMessage"),
  knowledgeMessage: document.getElementById("knowledgeMessage"),
  ratingMessage: document.getElementById("ratingMessage"),
  finalCorrect: document.getElementById("finalCorrect"),
  finalWrong: document.getElementById("finalWrong"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  shareBtn: document.getElementById("shareBtn"),
  shareFeedback: document.getElementById("shareFeedback"),
  confetti: document.getElementById("confetti")
};
function showScreen(screenName) {
  Object.values(screens).forEach(screen => {
    if (screen) {
      screen.classList.remove("active");
      screen.setAttribute("aria-hidden", "true");
    }
  });

  const selectedScreen = screens[screenName];

  if (selectedScreen) {
    selectedScreen.classList.add("active");
    selectedScreen.setAttribute("aria-hidden", "false");
  }
}

function shuffle(items) {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffledItems[index], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[index]
    ];
  }

  return shuffledItems;
}

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[.,'’"!?():;]/g, " ")
    .replace(/[-_/\\]+/g, " ")
    .replace(/\s+/g, " ");
}

function normalizeDate(value) {
  return normalize(value)
    .replace(/\b(\d{1,2})(st|nd|rd|th)\b/g, "$1");
}

function getAcceptedAnswers(question) {
  if (Array.isArray(question.answers)) {
    return question.answers;
  }

  if (question.answer !== undefined) {
    return [question.answer];
  }

  return [];
}

function isCorrectAnswer(question, userValue) {
  const rawCandidate = String(userValue ?? "").trim();

  if (!rawCandidate) {
    return false;
  }

  if (Array.isArray(question.keywords) && question.keywords.length > 0) {
    const normalizedCandidate = normalize(rawCandidate);

    return question.keywords.every(keyword =>
      normalizedCandidate.includes(normalize(keyword))
    );
  }

  const acceptedAnswers = getAcceptedAnswers(question);

  if (question.numeric) {
    const candidateMatch = rawCandidate.match(/-?\d+(?:\.\d+)?/);

    if (!candidateMatch) {
      return false;
    }

    const candidateNumber = Number(candidateMatch[0]);

    return acceptedAnswers.some(answer => {
      const expectedMatch = String(answer).match(/-?\d+(?:\.\d+)?/);

      if (!expectedMatch) {
        return false;
      }

      return Number(expectedMatch[0]) === candidateNumber;
    });
  }

  if (question.date) {
    const normalizedCandidate = normalizeDate(rawCandidate);

    return acceptedAnswers.some(answer =>
      normalizeDate(answer) === normalizedCandidate
    );
  }

  const normalizedCandidate = normalize(rawCandidate);

  return acceptedAnswers.some(answer =>
    normalize(answer) === normalizedCandidate
  );
}

function getCorrectAnswerText(question) {
  if (question.answerHint) {
    return question.answerHint;
  }

  const acceptedAnswers = getAcceptedAnswers(question);

  if (acceptedAnswers.length === 0) {
    return "No answer has been provided.";
  }

  return acceptedAnswers.join(" OR ");
}

function updateSoundButton() {
  if (!els.soundToggle) {
    return;
  }

  els.soundToggle.textContent = state.soundOn ? "🔊" : "🔇";
  els.soundToggle.setAttribute(
    "aria-label",
    state.soundOn ? "Turn sound off" : "Turn sound on"
  );

  els.soundToggle.setAttribute(
    "title",
    state.soundOn ? "Sound on" : "Sound off"
  );
}

function playTone(type = "correct") {
  if (!state.soundOn) {
    return;
  }

  const AudioContextClass =
    window.AudioContext ||
    window.webkitAudioContext;

  if (!AudioContextClass) {
    return;
  }

  try {
    const audioContext = new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    const currentTime = audioContext.currentTime;

    if (type === "correct") {
      oscillator.frequency.setValueAtTime(520, currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        780,
        currentTime + 0.18
      );
    } else if (type === "wrong") {
      oscillator.frequency.setValueAtTime(260, currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        150,
        currentTime + 0.25
      );
    } else {
      oscillator.frequency.setValueAtTime(440, currentTime);
    }

    gainNode.gain.setValueAtTime(0.12, currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      currentTime + 0.3
    );

    oscillator.start(currentTime);
    oscillator.stop(currentTime + 0.3);

    oscillator.addEventListener("ended", () => {
      audioContext.close();
    });
  } catch (error) {
    console.warn("Sound could not be played:", error);
  }
}

function resetAnswerArea() {
  state.answered = false;

  if (els.answerInput) {
    els.answerInput.value = "";
    els.answerInput.disabled = false;
    els.answerInput.classList.remove("correct", "incorrect");
  }

  if (els.answerWrap) {
    els.answerWrap.classList.remove("correct", "incorrect");
  }

  if (els.answerStatusIcon) {
    els.answerStatusIcon.textContent = "";
    els.answerStatusIcon.classList.remove("show");
  }

  if (els.feedbackText) {
    els.feedbackText.textContent = "";
    els.feedbackText.className = "feedback-text";
  }

  if (els.submitAnswerBtn) {
    els.submitAnswerBtn.hidden = false;
    els.submitAnswerBtn.disabled = false;
  }

  if (els.nextQuestionBtn) {
    els.nextQuestionBtn.hidden = true;
  }
}

function updateProgress() {
  const totalQuestions = state.selectedQuestions.length;
  const questionNumber = state.currentIndex + 1;
  const remainingQuestions = Math.max(
    totalQuestions - questionNumber,
    0
  );

  if (els.currentQuestionNumber) {
    els.currentQuestionNumber.textContent =
      `${questionNumber} of ${totalQuestions}`;
  }

  if (els.progressBar) {
    const progressPercentage =
      totalQuestions > 0
        ? (questionNumber / totalQuestions) * 100
        : 0;

    els.progressBar.style.width = `${progressPercentage}%`;
    els.progressBar.setAttribute(
      "aria-valuenow",
      String(Math.round(progressPercentage))
    );
  }

  if (els.correctCount) {
    els.correctCount.textContent = String(state.correct);
  }

  if (els.remainingCount) {
    els.remainingCount.textContent = String(remainingQuestions);
  }
}

function displayQuestion() {
  const question = state.selectedQuestions[state.currentIndex];

  if (!question) {
    showResult();
    return;
  }

  resetAnswerArea();
  updateProgress();

  if (els.questionCategory) {
    els.questionCategory.textContent =
      question.category || "Personal";
  }

  if (els.questionIcon) {
    els.questionIcon.textContent = question.icon || "❓";
  }

  if (els.questionText) {
    els.questionText.textContent = question.question;
  }

  if (els.questionInstruction) {
    els.questionInstruction.textContent =
      question.instruction || "Enter your answer.";
  }

  if (els.answerInput) {
    if (question.numeric) {
      els.answerInput.inputMode = "numeric";
      els.answerInput.placeholder = "Enter a number";
    } else {
      els.answerInput.inputMode = "text";
      els.answerInput.placeholder = "Type your answer";
    }

    window.setTimeout(() => {
      els.answerInput.focus();
    }, 150);
  }
}

function startQuiz() {
  const enteredName = els.playerName
    ? els.playerName.value.trim()
    : "";

  state.playerName = enteredName || "Player";
  state.selectedQuestions = shuffle(questionBank).slice(
    0,
    Math.min(QUESTION_COUNT, questionBank.length)
  );
  state.currentIndex = 0;
  state.correct = 0;
  state.answered = false;

  if (els.playerGreeting) {
    els.playerGreeting.textContent =
      `Good luck, ${state.playerName}!`;
  }

  if (els.restartTopBtn) {
    els.restartTopBtn.hidden = false;
  }

  showScreen("quiz");
  displayQuestion();
}
function submitAnswer(event) {
  event.preventDefault();

  if (state.answered) {
    return;
  }

  const question = state.selectedQuestions[state.currentIndex];

  if (!question || !els.answerInput) {
    return;
  }

  const userAnswer = els.answerInput.value.trim();

  if (!userAnswer) {
    if (els.feedbackText) {
      els.feedbackText.textContent =
        "Please enter an answer before continuing.";
      els.feedbackText.className = "feedback-text incorrect";
    }

    els.answerInput.focus();
    return;
  }

  state.answered = true;

  const correct = isCorrectAnswer(question, userAnswer);

  els.answerInput.disabled = true;

  if (els.submitAnswerBtn) {
    els.submitAnswerBtn.hidden = true;
    els.submitAnswerBtn.disabled = true;
  }

  if (els.nextQuestionBtn) {
    els.nextQuestionBtn.hidden = false;

    const isLastQuestion =
      state.currentIndex === state.selectedQuestions.length - 1;

    els.nextQuestionBtn.textContent = isLastQuestion
      ? "See My Result →"
      : "Next Question →";
  }

  if (correct) {
    state.correct += 1;

    if (els.answerInput) {
      els.answerInput.classList.add("correct");
    }

    if (els.answerWrap) {
      els.answerWrap.classList.add("correct");
    }

    if (els.answerStatusIcon) {
      els.answerStatusIcon.textContent = "✓";
      els.answerStatusIcon.classList.add("show");
    }

    if (els.feedbackText) {
      els.feedbackText.textContent =
        "Correct! You know this one.";
      els.feedbackText.className = "feedback-text correct";
    }

    playTone("correct");
  } else {
    const correctAnswer = getCorrectAnswerText(question);

    if (els.answerInput) {
      els.answerInput.classList.add("incorrect");
    }

    if (els.answerWrap) {
      els.answerWrap.classList.add("incorrect");
    }

    if (els.answerStatusIcon) {
      els.answerStatusIcon.textContent = "✕";
      els.answerStatusIcon.classList.add("show");
    }

    if (els.feedbackText) {
      els.feedbackText.textContent =
        `Not quite. Accepted answer: ${correctAnswer}`;

      els.feedbackText.className = "feedback-text incorrect";
    }

    playTone("wrong");
  }

  if (els.correctCount) {
    els.correctCount.textContent = String(state.correct);
  }

  if (els.remainingCount) {
    const remainingQuestions = Math.max(
      state.selectedQuestions.length -
        (state.currentIndex + 1),
      0
    );

    els.remainingCount.textContent =
      String(remainingQuestions);
  }

  if (els.nextQuestionBtn) {
    window.setTimeout(() => {
      els.nextQuestionBtn.focus();
    }, 150);
  }
}

function nextQuestion() {
  if (!state.answered) {
    return;
  }

  const isLastQuestion =
    state.currentIndex >= state.selectedQuestions.length - 1;

  if (isLastQuestion) {
    showResult();
    return;
  }

  state.currentIndex += 1;
  displayQuestion();
}

function getScoreRating(score) {
  if (score === 100) {
    return {
      heading: "Outstanding!",
      message: "You know Oduetse perfectly.",
      cartoon: "You are a true Oduetse expert!"
    };
  }

  if (score >= 80) {
    return {
      heading: "Excellent knowledge!",
      message: "You know Oduetse very well.",
      cartoon: "That was an impressive performance!"
    };
  }

  if (score >= 60) {
    return {
      heading: "Good knowledge!",
      message: "You know quite a lot about Oduetse.",
      cartoon: "You clearly know him well!"
    };
  }

  if (score >= 40) {
    return {
      heading: "Fair knowledge!",
      message: "You know some important things about Oduetse.",
      cartoon: "You are getting to know him!"
    };
  }

  if (score >= 20) {
    return {
      heading: "You are still learning!",
      message: "There is much more to discover about Oduetse.",
      cartoon: "Keep learning more about him!"
    };
  }

  return {
    heading: "The journey has just begun!",
    message: "It is time to learn more about Oduetse.",
    cartoon: "You have many things left to discover!"
  };
}

function getScoreColor(score) {
  if (score >= 80) {
    return "#147a43";
  }

  if (score >= 60) {
    return "#63ad67";
  }

  if (score >= 40) {
    return "#d4a32d";
  }

  if (score >= 20) {
    return "#e38342";
  }

  return "#d94d4d";
}

function showResult() {
  const totalQuestions = state.selectedQuestions.length;

  const score =
    totalQuestions > 0
      ? Math.round((state.correct / totalQuestions) * 100)
      : 0;

  const wrongAnswers = totalQuestions - state.correct;
  const rating = getScoreRating(score);
  const scoreColor = getScoreColor(score);

  showScreen("result");

  if (els.restartTopBtn) {
    els.restartTopBtn.hidden = true;
  }

  if (els.resultHeading) {
    els.resultHeading.textContent = rating.heading;
  }

  if (els.resultSummary) {
    els.resultSummary.textContent =
      `${state.playerName}, you answered ` +
      `${state.correct} out of ${totalQuestions} ` +
      `questions correctly.`;
  }

  if (els.scorePercentage) {
    els.scorePercentage.textContent = `${score}%`;
  }

  if (els.scoreRing) {
    els.scoreRing.style.background =
      `conic-gradient(` +
      `${scoreColor} ${score * 3.6}deg, ` +
      `#ebe8f6 0deg)`;
  }

  if (els.finalCorrect) {
    els.finalCorrect.textContent = String(state.correct);
  }

  if (els.finalWrong) {
    els.finalWrong.textContent = String(wrongAnswers);
  }

  if (els.knowledgeMessage) {
    els.knowledgeMessage.textContent =
      `You know Oduetse ${score}%`;
  }

  if (els.ratingMessage) {
    els.ratingMessage.textContent = rating.message;
  }

  if (els.cartoonMessage) {
    els.cartoonMessage.textContent = rating.cartoon;
    els.cartoonMessage.classList.remove("pop");

    window.setTimeout(() => {
      els.cartoonMessage.classList.add("pop");
    }, 450);
  }

  if (els.meterFill) {
    els.meterFill.style.width = "0%";

    window.setTimeout(() => {
      els.meterFill.style.width = `${score}%`;
    }, 150);
  }

  if (els.meterMarker) {
    els.meterMarker.style.left = "0%";

    window.setTimeout(() => {
      const markerPosition = Math.max(
        1.5,
        Math.min(98.5, score)
      );

      els.meterMarker.style.left =
        `${markerPosition}%`;
    }, 150);
  }

  if (els.shareFeedback) {
    els.shareFeedback.textContent = "";
  }

  if (score >= 60) {
    createConfetti();
  }

  playTone(score >= 60 ? "correct" : "wrong");
}

function restartGame() {
  state.selectedQuestions = [];
  state.currentIndex = 0;
  state.correct = 0;
  state.answered = false;

  if (els.meterFill) {
    els.meterFill.style.width = "0%";
  }

  if (els.meterMarker) {
    els.meterMarker.style.left = "0%";
  }

  if (els.shareFeedback) {
    els.shareFeedback.textContent = "";
  }

  if (els.confetti) {
    els.confetti.innerHTML = "";
  }

  startQuiz();
}

async function shareResult() {
  const totalQuestions = state.selectedQuestions.length;

  const score =
    totalQuestions > 0
      ? Math.round((state.correct / totalQuestions) * 100)
      : 0;

  const shareText =
    `${state.playerName} knows Oduetse ${score}%! ` +
    `Can you do better in “How Much You Know Me?”`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "How Much You Know Me?",
        text: shareText,
        url: window.location.href
      });

      if (els.shareFeedback) {
        els.shareFeedback.textContent =
          "Thank you for sharing your result.";
      }

      return;
    }

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(
        `${shareText} ${window.location.href}`
      );

      if (els.shareFeedback) {
        els.shareFeedback.textContent =
          "Your result has been copied to the clipboard.";
      }

      return;
    }

    if (els.shareFeedback) {
      els.shareFeedback.textContent =
        "Copy the page address to share your result.";
    }
  } catch (error) {
    if (error.name !== "AbortError" && els.shareFeedback) {
      els.shareFeedback.textContent =
        "Sharing was unavailable. Please copy the page link manually.";
    }
  }
}
function createConfetti() {
  if (!els.confetti) {
    return;
  }

  els.confetti.innerHTML = "";

  const confettiSymbols = [
    "🎉",
    "✨",
    "🎊",
    "⭐",
    "💫"
  ];

  const confettiCount = 45;

  for (let index = 0; index < confettiCount; index++) {
    const confettiPiece = document.createElement("span");

    confettiPiece.className = "confetti-piece";

    confettiPiece.textContent =
      confettiSymbols[
        Math.floor(Math.random() * confettiSymbols.length)
      ];

    confettiPiece.style.left =
      `${Math.random() * 100}%`;

    confettiPiece.style.animationDelay =
      `${Math.random() * 1.8}s`;

    confettiPiece.style.animationDuration =
      `${2.5 + Math.random() * 2.5}s`;

    confettiPiece.style.fontSize =
      `${12 + Math.random() * 18}px`;

    els.confetti.appendChild(confettiPiece);
  }

  window.setTimeout(() => {
    if (els.confetti) {
      els.confetti.innerHTML = "";
    }
  }, 6000);
}

function handlePlayerNameEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    startQuiz();
  }
}

function toggleSound() {
  state.soundOn = !state.soundOn;
  updateSoundButton();

  if (state.soundOn) {
    playTone("correct");
  }
}

if (els.startBtn) {
  els.startBtn.addEventListener("click", startQuiz);
}

if (els.playerName) {
  els.playerName.addEventListener(
    "keydown",
    handlePlayerNameEnter
  );
}

if (els.answerForm) {
  els.answerForm.addEventListener(
    "submit",
    submitAnswer
  );
}

if (els.nextQuestionBtn) {
  els.nextQuestionBtn.addEventListener(
    "click",
    nextQuestion
  );
}

if (els.playAgainBtn) {
  els.playAgainBtn.addEventListener(
    "click",
    restartGame
  );
}

if (els.restartTopBtn) {
  els.restartTopBtn.addEventListener(
    "click",
    restartGame
  );
}

if (els.shareBtn) {
  els.shareBtn.addEventListener(
    "click",
    shareResult
  );
}

if (els.soundToggle) {
  els.soundToggle.addEventListener(
    "click",
    toggleSound
  );
}

document.addEventListener("DOMContentLoaded", () => {
  showScreen("welcome");
  updateSoundButton();

  if (els.restartTopBtn) {
    els.restartTopBtn.hidden = true;
  }

  if (els.playerName) {
    els.playerName.focus();
  }
});

/*
  ================================================================
  PRIVACY NOTICE
  ================================================================
*/

const privacyToggle =
  document.getElementById("privacyToggle");

const privacyContent =
  document.getElementById("privacyContent");

const privacyArrow =
  document.getElementById("privacyArrow");

if (privacyToggle && privacyContent) {
  privacyToggle.addEventListener("click", () => {
    const isExpanded =
      privacyToggle.getAttribute("aria-expanded") === "true";

    privacyToggle.setAttribute(
      "aria-expanded",
      String(!isExpanded)
    );

    privacyContent.classList.toggle(
      "open",
      !isExpanded
    );

    privacyContent.setAttribute(
      "aria-hidden",
      String(isExpanded)
    );

    if (privacyArrow) {
      privacyArrow.classList.toggle(
        "rotated",
        !isExpanded
      );
    }
  });
}

/*
  ================================================================
  OPTIONAL KEYBOARD SUPPORT
  ================================================================
*/

document.addEventListener("keydown", event => {
  const quizIsActive =
    screens.quiz &&
    screens.quiz.classList.contains("active");

  if (!quizIsActive) {
    return;
  }

  if (
    event.key === "Enter" &&
    state.answered &&
    els.nextQuestionBtn &&
    !els.nextQuestionBtn.hidden
  ) {
    event.preventDefault();
    nextQuestion();
  }
});
