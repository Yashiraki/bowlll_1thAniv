const quizData = [
    {
      question: "茶楽田ぼうるチャンネルで一番最初に上がっているショートは何の曲？",
      correct: "ロミオとシンデレラ",
      explanation: "解説：ぼうるちゃんは歌が上手いぞ！！",
      choices: ["ロミオとシンデレラ", "ロウワー", "ソーラン節"]
    },
    {
      question: "「言質」←何と読む？",
      correct: "げんち",
      explanation: "まあさすがにもう覚えてる・・・よねぇ？",
      choices: ["ことじち", "げんち", "げんしつ"]
    },
    {
        question: "モンハンワイルズフルパコラボ(タマミツネ狩り)で、ぼうるちゃんが乙った回数は何回？",
        correct: "6回",
        explanation: "強くなるのだ・・・ぼうるよ・・・",
        choices: ["4回", "5回", "6回"]
    },
    {
        question: "8月32日の水族館では、正解すると水槽内の何が増える？",
        correct: "クラゲ",
        explanation: "レアサソリさんが増えたら面白いやろなあ・・・",
        choices: ["クラゲ", "エイ", "レアサソリさん"]
    },
    {
      question: "最終問題！！忍者になりたいですか？",
      correct: "はい",
      explanation: "おや・・・？ぼうるちゃんの様子が・・・？",
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
  const wfx = document.getElementById("wfx-correct");
  const syutudai = document.getElementById("syutudai");
  const iwau = document.getElementById("iwau");
  
  


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
    syutudai.currentTime = 0;
    syutudai.play();
  
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
    wfx.currentTime = 0;
  
    const quiz = quizData[current];
    if (selected === quiz.correct) {
        correctCount++;
        sfx.play();
    } else {
        wfx.play();
        quizBox.classList.add("hidden");
        explanationBox.classList.add("hidden");
        resultBox.classList.remove("hidden");
        if(quiz.question === "最終問題！！忍者になりたいですか？"){
            resultMessage.innerHTML = "忍者になりたいと、言え～～～！！！！";
        } else {
            resultMessage.innerHTML = `${correctCount}問正解！全問正解するとプレゼントがあるよ！！`;
        }
        // celebrationImg.classList.add("hidden");
        // downloadBtn.classList.add("hidden");
        startButton.classList.add("hidden");
      }
    //quizBox.classList.add("hidden");
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
      resultMessage.innerHTML = "🎉 全問正解！１周年おめでとう～～～！！！";
      startBox.classList.add("hidden");
      questionEl.classList.remove("hidden");
      quizBox.classList.add("hidden");
      celebrationImg.classList.remove("hidden");
      downloadBtn.classList.remove("hidden");
      launchConfetti();
    }
  }
  
  function restartQuiz() {
    resultBox.classList.add("hidden");
    celebrationImg.classList.add("hidden");
    downloadBtn.classList.add("hidden");
    startBox.classList.remove("hidden");
  }
  
  function launchConfetti() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.zIndex = 9999;
    container.style.pointerEvents = "none";
    document.body.appendChild(container);
    iwau.play();
  
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.position = "absolute";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.top = "-10px";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
      confetti.style.animationDuration = (2 + Math.random() * 1.5) + "s";
      container.appendChild(confetti);
    }
  
    setTimeout(() => container.remove(), 3000);
  }