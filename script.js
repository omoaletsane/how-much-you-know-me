// Updated quiz version - July 2026
const QUESTION_COUNT = 20;

const questionBank = [
  {
    category: "Identity", icon: "ðŸ‘¤",
    question: "What is my full name?",
    instruction: "Enter my first name and surname.",
    answers: ["Oduetse Moaletsane"]
  },
  {
    category: "Identity", icon: "ðŸ˜Ž",
    question: "What is my nickname?",
    instruction: "Enter the nickname only.",
    answers: ["Dux"]
  },
  {
    category: "Family", icon: "ðŸ‘¨",
    question: "What is my father's full name?",
    instruction: "Enter his first name and surname.",
    answers: ["Diiteo Moaletsane"]
  },
  {
    category: "Family", icon: "ðŸ•Šï¸",
    question: "Is my father alive or late?",
    instruction: "Answer with â€œaliveâ€ or â€œlateâ€.",
    answers: ["late"]
  },
  {
    category: "Family", icon: "ðŸ‘©",
    question: "What is my mother's full name?",
    instruction: "Enter her first name and surname.",
    answers: ["Alican Moaletsane"]
  },
  {
    category: "Family", icon: "â¤ï¸",
    question: "Is my mother alive or late?",
    instruction: "Answer with â€œaliveâ€ or â€œlateâ€.",
    answers: ["alive"]
  },
  {
    category: "Family", icon: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦",
    question: "How many siblings do I have?",
    instruction: "Enter the number as a figure.",
    answers: ["6"], numeric: true
  },
  {
    category: "Family", icon: "ðŸ‘¦",
    question: "How many of my siblings are male?",
    instruction: "Enter the number as a figure.",
    answers: ["4"], numeric: true
  },
  {
    category: "Family", icon: "ðŸ‘§",
    question: "How many of my siblings are female?",
    instruction: "Enter the number as a figure.",
    answers: ["2"], numeric: true
  },
  {
    category: "Marriage", icon: "ðŸ’",
    question: "What is my wife's full married name?",
    instruction: "Enter her first name and current surname.",
    answers: ["Ipuseng Moaletsane"]
  },
  {
    category: "Marriage", icon: "ðŸ“œ",
    question: "What is my wife's maiden surname?",
    instruction: "Enter the surname only.",
    answers: ["Zambo"]
  },
  {
    category: "Family", icon: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§",
    question: "How many daughters do we have?",
    instruction: "Enter the number as a figure.",
    answers: ["1"], numeric: true
  },
  {
    category: "Family", icon: "ðŸ‘§ðŸ½",
    question: "What is our daughter's full name?",
    instruction: "Enter all three names.",
    answers: ["Laciana Loago Moaletsane"]
  },
  {
    category: "Personal", icon: "ðŸŽ‚",
    question: "What is my full date of birth?",
    instruction: "Use the format: DD Month YYYY. Example: 05 January 1990.",
    answers: ["24 August 1982", "24th August 1982"],
    date: true
  },
  {
    category: "Faith", icon: "âœï¸",
    question: "What is my religion?",
    instruction: "Enter one word.",
    answers: ["Christian", "Christianity"]
  },
  {
    category: "Career", icon: "ðŸ›¡ï¸",
    question: "What is my job title?",
    instruction: "Enter the full job title.",
    answers: ["Data Protection Officer", "Specialist Data Protection"]
  },
  {
    category: "Career", icon: "ðŸ¦",
    question: "At which organisation do I work?",
    instruction: "Enter the full name or its abbreviation.",
    answers: ["Botswana Savings Bank", "BSB"]
  },
  {
    category: "Education", icon: "ðŸŽ“",
    question: "What bachelor's degree do I hold?",
    instruction: "Enter the degree and field of study.",
    answers: [
      "Bachelor of Arts in Social Science",
      "Bachelor of Arts in Social Sciences",
      "BA Social Science",
      "BA Social Sciences"
    ]
  },
  {
    category: "Education", icon: "ðŸ“ˆ",
    question: "Which two subjects did I major in for my bachelor's degree?",
    instruction: "Enter both subjects separated by â€œandâ€.",
    answers: ["Statistics and Demography", "Demography and Statistics"]
  },
  {
    category: "Education", icon: "ðŸ’»",
    question: "Which master's degree am I enrolled for?",
    instruction: "Enter the degree and field.",
    answers: ["Master of Science in Data Science", "MSc Data Science", "MSc in Data Science"]
  },
  {
    category: "Education", icon: "ðŸ§ ",
    question: "What are my two master's specialisations?",
    instruction: "Enter both areas separated by â€œandâ€.",
    answers: [
      "Big Data Analytics and Software Engineering",
      "Software Engineering and Big Data Analytics",
      "Big Data and Software Engineering",
      "Software Engineering and Big Data"
    ]
  },
  {
    category: "Location", icon: "ðŸ ",
    question: "Where do I live?",
    instruction: "Enter the village name only.",
    answers: ["Oodi"]
  },
  {
    category: "Location", icon: "ðŸ™ï¸",
    question: "In which city do I work?",
    instruction: "Enter the city name only.",
    answers: ["Gaborone"]
  },
  {
    category: "Faith", icon: "â›ª",
    question: "Which church do I attend?",
    instruction: "Enter the church and village.",
    answers: [
      "Assemblies of God Modipane",
      "Assemblies of God in Modipane",
      "Modipane Assemblies of God",
      "Modipane AoG"
    ]
  },
  {
    category: "Faith", icon: "ðŸ™",
    question: "Who is my pastor?",
    instruction: "Enter his title, first name and surname.",
    answers: ["Rev Stephen Motlhagodi", "Reverend Stephen Motlhagodi", "Stephen Motlhagodi"]
  },
  {
    category: "Lifestyle", icon: "ðŸ„",
    question: "What do I do besides my professional work?",
    instruction: "Enter the occupation or activity.",
    answers: ["Farmer", "Farming"]
  },
  {
    category: "Lifestyle", icon: "ðŸŒ¾",
    question: "Where is my cattle post?",
    instruction: "Enter the place name only.",
    answers: ["Seruruma"]
  },
  {
    category: "Vehicles", icon: "ðŸ›»",
    question: "Which Nissan vehicle do I drive?",
    instruction: "Enter the model and specification.",
    answers: ["Nissan Navara 4x4 Pro", "Navara 4x4 Pro", "Nissan Navara"]
  },
  {
    category: "Vehicles", icon: "ðŸš˜",
    question: "Which BMW model do I own?",
    instruction: "Enter the model, generation and version.",
    answers: [
      "BMW 320i E90 facelift",
      "BMW 320i E90",
      "320i E90 facelift",
      "BMW E90 facelift"
    ]
  },
  {
    category: "Vehicles", icon: "ðŸšš",
    question: "Which GWM vehicle do I own?",
    instruction: "Enter the model and body type.",
    answers: [
      "GWM single cab Cargo",
      "GWM Cargo single cab",
      "GWM Cargo",
      "GWM single cab"
    ]
  },
  {
    category: "Vehicles", icon: "ðŸ’š",
    question: "Which of my vehicles do I like most?",
    instruction: "Enter the vehicle name.",
    answers: ["GWM Cargo", "GWM single cab Cargo", "GWM Cargo single cab"]
  },
  {
    category: "Vehicles", icon: "ðŸ„",
    question: "Why do I like the GWM Cargo most?",
    instruction: "State the main reason in a short phrase.",
    keywords: ["cattle post"],
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

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.,'â€™"]/g, "")
    .replace(/\s+/g, " ");
}

function normalizeDate(value) {
  return normalize(value)
    .replace(/(\d+)(st|nd|rd|th)/g, "$1")
    .replace(/\//g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ");
}

function isCorrectAnswer(question, userValue) {
  if (!userValue.trim()) return false;

  if (question.keywords) {
    const normalized = normalize(userValue);
    return question.keywords.every(keyword => normalized.includes(normalize(keyword)));
  }

  if (question.numeric) {
    const digits = userValue.match(/\d+/);
    return Boolean(digits && question.answers.includes(String(Number(digits[0]))));
  }

  if (question.date) {
    const candidate = normalizeDate(userValue);
    return question.answers.some(answer => normalizeDate(answer) === candidate);
  }

  const candidate = normalize(userValue);
  return question.answers.some(answer => normalize(answer) === candidate);
}

function switchScreen(target) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[target].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGame() {
  state.playerName = els.playerName.value.trim() || "Player";
  state.selectedQuestions = shuffle(questionBank).slice(0, QUESTION_COUNT);
  state.currentIndex = 0;
  state.correct = 0;
  state.answered = false;

  els.playerGreeting.textContent = `Good luck, ${state.playerName}!`;
  els.restartTopBtn.classList.remove("hidden");
  switchScreen("quiz");
  renderQuestion();
  playTone(520, 0.08);
}

function renderQuestion() {
  const question = state.selectedQuestions[state.currentIndex];
  state.answered = false;

  els.currentQuestionNumber.textContent = state.currentIndex + 1;
  els.correctCount.textContent = state.correct;
  els.remainingCount.textContent = QUESTION_COUNT - state.currentIndex;
  els.progressBar.style.width = `${((state.currentIndex + 1) / QUESTION_COUNT) * 100}%`;

  els.questionCategory.textContent = question.category;
  els.questionIcon.textContent = question.icon;
  els.questionText.textContent = question.question;
  els.questionInstruction.textContent = question.instruction;

  els.answerInput.value = "";
  els.answerInput.disabled = false;
  els.answerWrap.classList.remove("correct", "wrong");
  els.answerStatusIcon.textContent = "";
  els.feedbackText.textContent = "";
  els.feedbackText.className = "feedback-text";
  els.submitAnswerBtn.classList.remove("hidden");
  els.nextQuestionBtn.classList.add("hidden");
  els.answerInput.focus();
}

function submitAnswer(event) {
  event.preventDefault();
  if (state.answered) return;

  const userAnswer = els.answerInput.value;
  if (!userAnswer.trim()) {
    els.feedbackText.textContent = "Please enter an answer before continuing.";
    els.feedbackText.className = "feedback-text wrong";
    els.answerInput.focus();
    return;
  }

  state.answered = true;
  const question = state.selectedQuestions[state.currentIndex];
  const correct = isCorrectAnswer(question, userAnswer);

  els.answerInput.disabled = true;
  els.submitAnswerBtn.classList.add("hidden");
  els.nextQuestionBtn.classList.remove("hidden");

  if (correct) {
    state.correct += 1;
    els.answerWrap.classList.add("correct");
    els.answerStatusIcon.textContent = "âœ“";
    els.feedbackText.textContent = "Correct! You know this one.";
    els.feedbackText.className = "feedback-text correct";
    playTone(760, 0.12);
  } else {
    els.answerWrap.classList.add("wrong");
    els.answerStatusIcon.textContent = "âœ•";
    const accepted = question.answerHint || question.answers[0];
    els.feedbackText.textContent = `Not quite. Correct answer: ${accepted}`;
    els.feedbackText.className = "feedback-text wrong";
    playTone(230, 0.16);
  }

  els.correctCount.textContent = state.correct;
  els.remainingCount.textContent = QUESTION_COUNT - (state.currentIndex + 1);
  els.nextQuestionBtn.textContent =
    state.currentIndex === QUESTION_COUNT - 1 ? "See My Result â†’" : "Next Question â†’";
}

function nextQuestion() {
  if (!state.answered) return;

  if (state.currentIndex < QUESTION_COUNT - 1) {
    state.currentIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function scoreRating(score) {
  if (score === 100) return ["Outstanding! You know Oduetse perfectly.", "You are a true Oduetse expert!"];
  if (score >= 80) return ["Excellent knowledge!", "You know him very well."];
  if (score >= 60) return ["Good knowledge!", "You know quite a lot about him."];
  if (score >= 40) return ["Fair knowledge.", "You know some important things about him."];
  if (score >= 20) return ["You are still learning.", "There is much more to discover."];
  return ["The journey has just begun!", "Time to learn more about him."];
}

function scoreColor(score) {
  if (score >= 80) return "#147a43";
  if (score >= 60) return "#63ad67";
  if (score >= 40) return "#d4a32d";
  if (score >= 20) return "#e38342";
  return "#d94d4d";
}

function showResult() {
  const score = Math.round((state.correct / QUESTION_COUNT) * 100);
  const [heading, rating] = scoreRating(score);
  const color = scoreColor(score);

  switchScreen("result");
  els.restartTopBtn.classList.add("hidden");
  els.resultHeading.textContent = heading;
  els.resultSummary.textContent = `${state.playerName}, you answered ${state.correct} out of ${QUESTION_COUNT} questions correctly.`;
  els.scorePercentage.textContent = `${score}%`;
  els.scoreRing.style.background = `conic-gradient(${color} ${score * 3.6}deg, #ebe8f6 0deg)`;

  els.finalCorrect.textContent = state.correct;
  els.finalWrong.textContent = QUESTION_COUNT - state.correct;
  els.knowledgeMessage.textContent = `You know Oduetse ${score}%`;
  els.ratingMessage.textContent = rating;

  setTimeout(() => {
    els.meterFill.style.width = `${score}%`;
    els.meterMarker.style.left = `${Math.max(1.5, Math.min(98.5, score))}%`;
  }, 150);

  els.cartoonMessage.classList.remove("pop");
  setTimeout(() => els.cartoonMessage.classList.add("pop"), 450);

  if (score >= 60) createConfetti();
  playTone(score >= 60 ? 660 : 360, 0.18);
}

function restartGame() {
  els.meterFill.style.width = "0";
  els.meterMarker.style.left = "0";
  els.shareFeedback.textContent = "";
  startGame();
}

async function shareResult() {
  const score = Math.round((state.correct / QUESTION_COUNT) * 100);
  const shareText = `${state.playerName} knows Oduetse ${score}%! Can you do better in â€œHow Much You Know Me?â€`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "How Much You Know Me?",
        text: shareText,
        url: window.location.href
      });
    } else {
      await navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      els.shareFeedback.textContent = "Result copied to your clipboard.";
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      els.shareFeedback.textContent = "Sharing was not available. You can copy the page link manually.";
    }
  }
}

function createConfetti() {
  els.confetti.innerHTML = "";
  const colors = ["#5536d8", "#ff9f43", "#1f9d67", "#e54d4d", "#efc94c"];

  for (let i = 0; i < 46; i++) {
    const piece = document.createElement("span");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 260}px`);
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    piece.style.animationDuration = `${2 + Math.random() * 1.4}s`;
    els.confetti.appendChild(piece);
  }

  setTimeout(() => { els.confetti.innerHTML = ""; }, 3800);
}

function playTone(frequency, duration) {
  if (!state.soundOn || !window.AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.06, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration);
}

els.startBtn.addEventListener("click", startGame);
els.answerForm.addEventListener("submit", submitAnswer);
els.nextQuestionBtn.addEventListener("click", nextQuestion);
els.playAgainBtn.addEventListener("click", restartGame);
els.restartTopBtn.addEventListener("click", restartGame);
els.shareBtn.addEventListener("click", shareResult);

els.soundToggle.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  els.soundToggle.firstElementChild.textContent = state.soundOn ? "ðŸ”Š" : "ðŸ”‡";
  els.soundToggle.setAttribute("aria-label", state.soundOn ? "Mute sound" : "Enable sound");
});

els.playerName.addEventListener("keydown", event => {
  if (event.key === "Enter") startGame();
});

document.getElementById("year").textContent = new Date().getFullYear();


// Collapsible Privacy Notice
const privacyToggle = document.getElementById("privacyToggle");
const privacyContent = document.getElementById("privacyContent");

if (privacyToggle && privacyContent) {
  privacyToggle.addEventListener("click", () => {
    const isOpen = privacyContent.classList.toggle("open");
    privacyToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

