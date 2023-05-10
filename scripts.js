var labels = document.querySelectorAll('label');
labels.forEach(function(label) {
  label.addEventListener('click', function() {
    var radio = label.querySelector('input[type="radio"]');
    radio.checked = true;
  });
});

function checkAnswers() {
    var correctAnswers = ['d', 'b', 'c', 'b', 'a', 'b']; // Respostas corretas (pode ser obtidas de um banco de dados ou outra fonte)
    var userAnswers = [];
    var numQuestions = 6; // Número total de perguntas
  
    for (var i = 1; i <= numQuestions; i++) {
      var selectedAnswer = document.querySelector('input[name="answer' + i + '"]:checked');
      if (selectedAnswer) {
        userAnswers.push(selectedAnswer.value);
      } else {
        userAnswers.push(null);
      }
    }
  
    var numCorrect = 0;
    for (var j = 0; j < numQuestions; j++) {
      var questionNumber = j + 1;
      var options = document.querySelectorAll('input[name="answer' + questionNumber + '"]');
      var answer = correctAnswers[j];
      var userAnswer = userAnswers[j];
      var resultElement = document.querySelector('.result');
  
      if (userAnswer === answer) {
        numCorrect++;
        options.forEach(function(option) {
          if (option.value === userAnswer) {
            option.parentNode.classList.add('correct');
          }
        });
      } else {
        options.forEach(function(option) {
          if (option.value === userAnswer) {
            option.parentNode.classList.add('incorrect');
          }
        });
      }
    }
  
    resultElement.textContent = "Você acertou " + numCorrect + " de " + numQuestions + " perguntas";
    var messageElement = document.querySelector('.message');
    if (numCorrect < 3) {
      messageElement.textContent = "Tente novamente!";
    } else if (numCorrect >= 3 && numCorrect <= 5) {
      messageElement.textContent = "Muito bom!";
    } else {
      messageElement.textContent = "Gênial!";
    }
  }
  