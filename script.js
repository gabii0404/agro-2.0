const questions = [
    {
        question: "A água é essencial para o transporte de nutrientes em poríferos.",
        isCorrect: true
    },
    {
        question: "Poríferos possuem tecidos e órgãos complexos.",
        isCorrect: false
    },
    {
        question: "Cnidócitos são células encontradas em poríferos para filtração.",
        isCorrect: false
    },
    {
        question: "O ósculo é a principal abertura por onde a água entra nos poríferos.",
        isCorrect: false
    },
    {
        question: "Cnidários utilizam os cnidócitos para defesa e captura de presas.",
        isCorrect: true
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const correctBtn = document.getElementById('correct-btn');
const wrongBtn = document.getElementById('wrong-btn');
const feedbackContainer = document.getElementById('feedback-container');
const scoreDisplay = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    // Limpa qualquer feedback anterior e esconde o botão de próxima pergunta
    feedbackContainer.innerHTML = '';
    nextBtn.style.display = 'none';

    // Habilita os botões de resposta
    correctBtn.disabled = false;
    wrongBtn.disabled = false;

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
    } else {
        // Quiz terminou
        questionText.textContent = `Quiz Concluído! Sua pontuação final é ${score} de ${questions.length}.`;
        correctBtn.style.display = 'none';
        wrongBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        feedbackContainer.innerHTML = '🎉 Parabéns por completar o quiz!';
    }
}

function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Desabilita os botões de resposta para evitar cliques múltiplos
    correctBtn.disabled = true;
    wrongBtn.disabled = true;

    // Exibe o botão de próxima pergunta
    nextBtn.style.display = 'block';

    if (userAnswer === currentQuestion.isCorrect) {
        feedbackContainer.innerHTML = '<span class="icon-correct"><i class="fas fa-check-circle"></i></span> Certo!';
        score++;
    } else {
        feedbackContainer.innerHTML = '<span class="icon-wrong"><i class="fas fa-times-circle"></i></span> Errado. A resposta correta era ' + (currentQuestion.isCorrect ? 'Certo' : 'Errado') + '.';
    }
    scoreDisplay.textContent = score;
}

// Event Listeners para os botões de resposta
correctBtn.addEventListener('click', () => checkAnswer(true));
wrongBtn.addEventListener('click', () => checkAnswer(false));

// Event Listener para o botão de próxima pergunta
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

// Carrega a primeira pergunta quando a página é carregada
document.addEventListener('DOMContentLoaded', loadQuestion);
