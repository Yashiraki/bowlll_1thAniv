const quizData = [
    { question: "私の好きな色は青である", correct: "yes", explanation: "青はあなたが昔からよく使ってる色です！" },
    { question: "私たちは初めて会ったのは2020年", correct: "yes", explanation: "2020年のイベントで出会いました！" },
    { question: "私は朝が得意である", correct: "no", explanation: "毎朝寝坊してるの、知ってるよ😆" }
  ];
  
  let current = 0;
  let correctCount = 0;
  
  const questionEl = document.getElementById('question');
  const quizBox = document.getElementById('quiz-box');
  const explanationBox = document.getElementById('explanation-box');
  const explanationEl = document.getElementById('explanation');
  const resultBox = document.getElementById('result-box');
  const resultMessage = document.getElementById('result-message');
  const celebrationImg = document.getElementById('celebration-img');
  const downloadBtn = document.getElementById('download-btn');
  const sfx = document.getElementById('sfx-correct');
  
  function submitAnswer(choice) {
    sfx.currentTime = 0;
    sfx.play();
  
    if (choice === quizData[current].correct) {
      correctCount++;
    }
  
    quizBox.classList.remove('visible');
    explanationBox.classList.add('visible');
    explanationEl.textContent = quizData[current].explanation;
  }
  
  function nextQuestion() {
    current++;
    if (current < quizData.length) {
      quizBox.classList.add('visible');
      explanationBox.classList.remove('visible');
      questionEl.textContent = quizData[current].question;
    } else {
      explanationBox.classList.remove('visible');
      showResult();
    }
  }
  
  function showResult() {
    resultBox.classList.remove('hidden');
    if (correctCount === quizData.length) {
      resultMessage.innerHTML = "🎉 全問正解！おめでとう！<br>ご褒美をどうぞ✨";
      celebrationImg.classList.remove('hidden');
      downloadBtn.classList.remove('hidden');
    } else {
      resultMessage.innerHTML = "🙃 間違っちゃったけど、<br>そんな君も大好きだよ💖";
    }
  }
  
  function restartQuiz() {
    current = 0;
    correctCount = 0;
    resultBox.classList.add('hidden');
    celebrationImg.classList.add('hidden');
    downloadBtn.classList.add('hidden');
    quizBox.classList.add('visible');
    questionEl.textContent = quizData[0].question;
  }
  window.onload = () => {
    questionEl.textContent = quizData[0].question;
  };
  