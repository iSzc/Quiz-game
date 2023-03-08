let questionVar = document.getElementById("question");
let btn1 = document.getElementById("resp1");
let btn2 = document.getElementById("resp2");
let btn3 = document.getElementById("resp3");
let btn4 = document.getElementById("resp4");
const root = document.querySelector(":root");
let saveAnswer = [];
let currentAnswer = "";
let current = 0;

const questions = [
  {
    question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
    options: ["12 Minutos", "1 Dia", "12 Horas", "8 Minutos"],
    answers: "8 Minutos",
  },
  {
    question: "Qual a velocidade da luz?",
    options: [
      "299 792 458 (m/s)",
      "150 000 000 (m/s)",
      "199 792 458 (m/s)",
      "30 000 000 (m/s)",
    ],
    answers: "299 792 458 (m/s)",
  },
  {
    question: "Qual o maior animal terrestre?",
    options: ["Baleia Azul", "Dinossauro", "Elefante africano", "Girafa"],
    answers: "Elefante africano",
  },
  {
    question:
      "Qual o tema do famoso discurso 'Eu Tenho um Sonho, de Martin Luther King'?",
    options: [
      "Igualdade das raças",
      "Justiça para os menos favorecidos",
      "Prêmio Nobel da Paz",
      "Luta contra o Apartheid",
    ],
    answers: "Igualdade das raças",
  },
  {
    question: "Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?",
    options: [
      "Yuri Gagarin, em 1961",
      "Buzz Aldrin, em 1969",
      "Neil Armstrong, em 1965",
      "Neil Armstrong, em 1969",
    ],
    answers: "Neil Armstrong, em 1969",
  },
  {
    question:
      "As pessoas de qual tipo sanguíneo são consideradas doadores universais?",
    options: ["Tipo A", "Tipo B", "Tipo O", "Tipo ABO"],
    answers: "Tipo O",
  },
  {
    question: "Qual o metal cujo símbolo químico é o Au?",
    options: ["Cobre", "Prata", "Mercúrio", "Ouro"],
    answers: "Ouro",
  },
  {
    question: "Quem inventou a lâmpada?",
    options: ["Thomas Hobbes", "Steve Jobs", "Thomas Edison", "Isaac Newton"],
    answers: "Thomas Edison",
  },
  {
    question: "De onde é a invenção do chuveiro elétrico?",
    options: ["França", "Brasil", "Italia", "Inglaterra"],
    answers: "Brasil",
  },
  {
    question:
      "Júpiter e Plutão são os correlatos romanos de quais deuses gregos?",
    options: ["Ares e Hermes", "Zeus e Ares", "Zeus e Hades", "Cronos e Apolo"],
    answers: "Zeus e Hades",
  },
];

function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function changeQuestion() {
  const currentQuestion = questions[current];

  let questionVar = document.getElementById("question");

  const { question, options, answers } = currentQuestion;
  currentAnswer = answers;

  const shuffleOptions = shuffleArr(options);

  questionVar.innerText = question;
  btn1.innerText = shuffleOptions[0];
  btn2.innerText = shuffleOptions[1];
  btn3.innerText = shuffleOptions[2];
  btn4.innerText = shuffleOptions[3];
}

[btn1, btn2, btn3, btn4].forEach((btn) => {
  btn.addEventListener("click", () => {
    if (saveAnswer.length === questions.length) {
      alert("Você já respondeu todas as perguntas.");
      window.location.reload(true);
      return;
    }

    if (btn.innerText === currentAnswer) {
      saveAnswer.push("Acertou");
      btn.style.backgroundColor = "#4dff91";
    } else {
      saveAnswer.push("Errou");
      btn.style.backgroundColor = "#ff6961";
    }

    let nextQuestion = questions[current + 1];
    // undefined

    if (nextQuestion) {
      setTimeout(() => {
        current++;
        changeQuestion();
        btn.style.backgroundColor = "rgba(138, 43, 226, 0.8)";
      }, 800);
    } else {
      const showAnswer = [];
      const showError = [];
      for (let i = 0; i < saveAnswer.length; i++) {
        if (saveAnswer[i] === "Acertou") {
          showAnswer.push("Acertou");
        } else if (saveAnswer[i] === "Errou") {
          showError.push("Errou");
        }
        if (showAnswer.length > showError.length) {
          questionVar.innerText =
            "Você acertou " + showAnswer.length + " de " + questions.length;
        } else {
          questionVar.innerText =
            "Você errou " + showError.length + " de " + questions.length;
        }
      }
    }
  });
});

window.addEventListener("load", () => {
  changeQuestion();
});
