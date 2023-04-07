var questions = [
    {
      question: "Quel est le Meilleur Langage de Programmation en 2022",
      choices: [
        {label: "Java", value: "a"},
        {label: "C", value: "b"},
        {label: "Python", value: "c"},
        {label: "JavaScript", value: "d"}
      ],
      correctAnswer: "d"
    },
    // Ajouter d'autres questions ici
    {
        question: "Qui est le fondateur de SpaceX ?",
        choices: [
          {label: "Steve Jobs", value: "a"},
          {label: "Elon Musk", value: "b"},
          {label: "Bill Gates", value: "c"},
          {label: "Mark Zuckerberg", value: "d"}
        ],
        correctAnswer: "b"
      },
      {
        question: "Quel est le langage de programmation le plus utilisé pour les applications mobiles ?",
        choices: [
          {label: "Java", value: "a"},
          {label: "Swift", value: "b"},
          {label: "C++", value: "c"},
          {label: "Python", value: "d"}
        ],
        correctAnswer: "b"
      }
    

  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  var quiz = document.getElementById("quiz");
  var questionEl = document.getElementById("question");
  var choiceList = document.getElementById("choices");
  var nextButton = document.getElementById("next");
  var scoreEl = document.getElementById("score");
  
  function showQuestion(question) {
    questionEl.textContent = question.question;
  
    // Supprimer les anciennes réponses
    while (choiceList.firstChild) {
      choiceList.removeChild(choiceList.firstChild);
    }
  
    // Afficher les nouvelles réponses
    question.choices.forEach(function(choice) {
      var div = document.createElement("div");
      var input = document.createElement("input");
      var label = document.createElement("label");
  
      input.type = "radio";
      input.name = "choice";
      input.value = choice.value;
      input.required = true;
  
      label.textContent = choice.label;
  
      div.classList.add("form-check");
      div.classList.add("my-2");
      div.appendChild(input);
      div.appendChild(label);
      choiceList.appendChild(div);
    });
  }
  
  function checkAnswer() {
    var selected = document.querySelector('input[name="choice"]:checked');
    if (!selected) {
      return false;
    }
    return selected.value == questions[currentQuestion].correctAnswer;
  }
  
  function updateScore() {
    scoreEl.textContent = "Score: " + score;
  }
  
  function nextQuestion() {
    if (checkAnswer()) {
      score++;
      updateScore();
    }
    currentQuestion++;
  
    if (currentQuestion == questions.length) {
      quiz.innerHTML = "<h2>Score Final: " + score + "</h2>";
      return;
    }
  
    showQuestion(questions[currentQuestion]);
    nextButton.disabled = true;
  }
  
  showQuestion(questions[currentQuestion]);
  
  nextButton.addEventListener("click", nextQuestion);
  
  // Activer le bouton suivant lorsque l'utilisateur a coché une réponse
  var choices = document.querySelectorAll('input[name="choice"]');
  for (var i = 0; i < choices.length; i++) {
    console
    choices[i].addEventListener("change", function() {
      nextButton.disabled = false;
    });
  }
  