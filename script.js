const quizData = [
    {
      question: "私の好きな色は青である",
      correct: "青",
      explanation: "青はあなたが昔からよく使ってる色です！",
      choices: ["赤", "青", "緑"]
    },
    {
      question: "私たちは初めて会ったのはいつ？",
      correct: "2020年",
      explanation: "2020年のイベントで出会いました！",
      choices: ["2019年", "2020年", "2021年"]
    },
    {
      question: "私は朝が得意である",
      correct: "いいえ",
      explanation: "毎朝寝坊してるの、知ってるよ😆",
      choices: ["はい", "いいえ"]
    }
  ];
  
  let current = 0;
  let correctCount = 0;
  
  const startBox = document.getElementById("start-box");
  const quizBox = document.getElementById("quiz-box");
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const explanationBox = document.getElementById("explanation-box");
  const explanationEl = document.getElementById("explanation");
  const resultBox = document.getElementById("result-box");
  const resultMessage = document.getElementById("result-message");
  const celebrationImg = document.getElementById("celebration-img");
  const downloadBtn = document.getElementById("download-btn");
  const sfx = document.getElementById("sfx-correct");
  
  function startQuiz() {
    startBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    current = 0;
    correctCount = 0;
    showQuestion();
  }
  
  function showQuestion() {
    const quiz = quizData[current];
    questionEl.textContent = quiz.question;
    choicesEl.innerHTML = "";
  
    quiz.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.className = "btn animate";
      btn.onclick = () => submitAnswer(choice);
      btn.onmousedown = () => btn.classList.add("active");
      btn.onmouseup = () => btn.classList.remove("active");
      choicesEl.appendChild(btn);
    });
  }
  
  function submitAnswer(selected) {
    sfx.currentTime = 0;
    sfx.play();
  
    const quiz = quizData[current];
    if (selected === quiz.correct) {
      correctCount++;
    }
  
    quizBox.classList.add("hidden");
    explanationBox.classList.remove("hidden");
    explanationEl.textContent = quiz.explanation;
  }
  
  function nextQuestion() {
    current++;
    if (current < quizData.length) {
      explanationBox.classList.add("hidden");
      quizBox.classList.remove("hidden");
      showQuestion();
    } else {
      explanationBox.classList.add("hidden");
      showResult();
    }
  }
  
  function showResult() {
    resultBox.classList.remove("hidden");
    if (correctCount === quizData.length) {
      resultMessage.innerHTML = "🎉 全問正解！おめでとう！<br>ご褒美をどうぞ✨";
      celebrationImg.classList.remove("hidden");
      downloadBtn.classList.remove("hidden");
    } else {
      resultMessage.innerHTML = "🙃 間違っちゃったけど、<br>そんな君も大好きだよ💖";
    }
  }
  
  function restartQuiz() {
    resultBox.classList.add("hidden");
    celebrationImg.classList.add("hidden");
    downloadBtn.classList.add("hidden");
    startBox.classList.remove("hidden");
  }
  