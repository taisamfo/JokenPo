// Selecionar os botões
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// Selecionar as pontuações
const playerScore = document.getElementById('player-score');
const alexaScore = document.getElementById('alexa-score');

// Adicionar os eventos de clique aos botões
rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorsBtn.addEventListener('click', playGame);

// Função para jogar
function playGame(event) {
    // Obter a jogada do jogador
    const playerMove = event.target.id;
    
    // Obter a jogada da Alexa (aleatória)
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    const alexaMove = moves[randomIndex];
    
    // Verificar o vencedor
    let winner = '';
    if (playerMove === alexaMove) {
        winner = 'Empate';
    } else if (
        (playerMove === 'rock' && alexaMove === 'scissors') ||
        (playerMove === 'paper' && alexaMove === 'rock') ||
        (playerMove === 'scissors' && alexaMove === 'paper')
    ) {
        winner = 'Jogador';
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else {
        winner = 'Alexa';
        alexaScore.textContent = parseInt(alexaScore.textContent) + 1;
    }
    
    // Exibir o resultado
    alert(`Você jogou ${playerMove}, a Alexa jogou ${alexaMove}. O vencedor é: ${winner}`);
}