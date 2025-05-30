const questions = [
    {
        question: "O principal cereal cultivado no Brasil é o soja.",
        isCorrect: true
    },
    {
        question: "A pecuária de corte é a criação de animais para a produção de leite e seus derivados.",
        isCorrect: false
    },
    {
        question: "Agrotóxicos e defensivos agrícolas são a mesma coisa, com nomes diferentes.",
        isCorrect: true
    },
    {
        question: "A aquicultura se refere à criação de peixes e outros organismos aquáticos em cativeiro",
        isCorrect: true
    },
    {
        question: "Impostos são a principal forma de arrecadação de recursos do governo.",
        isCorrect: true
    },
    {
        question: "A favelização é um problema social comum em grandes centros urbanos.",
        isCorrect: true
    },
    {
        question: "A decentralização administrativa transfere poder da capital para outras regiões.",
        isCorrect: true
    },
    {
        question: "O setor primário da economia inclui a maioria das indústrias e fábricas.",
        isCorrect: false
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const correctBtn = document.getElementById('correct-btn');
const wrongBtn = document.getElementById('wrong-btn');
const feedbackContainer = document.getElementById('feedback-container');
const scoreDisplay = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn'); // NOVO: Obtenha o botão de reiniciar

function loadQuestion() {
    // Limpa qualquer feedback anterior e esconde os botões de próxima e reiniciar
    feedbackContainer.innerHTML = '';
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'none'; // Esconde o botão de reiniciar no início de cada pergunta

    // Habilita os botões de resposta e os torna visíveis
    correctBtn.disabled = false;
    wrongBtn.disabled = false;
    correctBtn.style.display = 'inline-block'; // Garante que os botões de resposta estejam visíveis
    wrongBtn.style.display = 'inline-block'; // Garante que os botões de resposta estejam visíveis


    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
    } else {
        // Quiz terminou
        questionText.textContent = `Quiz Concluído! Sua pontuação final é ${score} de ${questions.length}.`;
        correctBtn.style.display = 'none'; // Esconde os botões de resposta
        wrongBtn.style.display = 'none'; // Esconde os botões de resposta
        nextBtn.style.display = 'none'; // Esconde o botão de próxima pergunta
        feedbackContainer.innerHTML = '🎉 Parabéns por completar o quiz!';
        restartBtn.style.display = 'block'; // Exibe o botão de reiniciar
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

function restartQuiz() {
    currentQuestionIndex = 0; // Reseta o índice da pergunta
    score = 0; // Reseta a pontuação
    scoreDisplay.textContent = score; // Atualiza a pontuação na tela
    loadQuestion(); // Carrega a primeira pergunta
}

// Event Listeners para os botões de resposta
correctBtn.addEventListener('click', () => checkAnswer(true));
wrongBtn.addEventListener('click', () => checkAnswer(false));

// Event Listener para o botão de próxima pergunta
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

// NOVO: Event Listener para o botão de reiniciar
restartBtn.addEventListener('click', restartQuiz);

// Carrega a primeira pergunta quando a página é carregada
document.addEventListener('DOMContentLoaded', loadQuestion);
