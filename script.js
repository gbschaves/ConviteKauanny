// script.js

// Inicializa o contador
let count = 0;
let firstClick = false;
let noClickedBeforeYes = false; // Variável para rastrear se "Não" foi clicado antes de "Sim"

/* Espera o DOM estar totalmente carregado */
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os botões e o elemento de texto
    const greenButton = document.querySelector('.green');
    const wineButton = document.querySelector('.wine');
    const highlightedTextElement = document.querySelector('.highlighted-text');
    const retryContainer = document.querySelector('.retry-container');
    const retryButton = document.querySelector('.retry');

    // Função para atualizar a mensagem e mostrar o botão de tentar novamente
    function showRetryButton(message) {
        highlightedTextElement.textContent = message;
        greenButton.style.display = 'none';
        wineButton.style.display = 'none';
        retryContainer.style.display = 'block';
    }

    // Adiciona um evento de clique ao botão verde
    if (greenButton && highlightedTextElement) {
        greenButton.addEventListener('click', () => {
            if (!firstClick) {
                // Se o botão "Não" foi clicado antes do "Sim"
                if (noClickedBeforeYes) {
                    showRetryButton('Me fala no zap o dia do zoologico princesa, mas atualiza a página e clica em sim primeiro c=');
                } else {
                    showRetryButton('Muito fácil, era pra ser dificil lembra ? assim não da graça de te conquistar =P');
                }
                firstClick = true;
            } else {
                // Atualiza o texto se o "Sim!!!" foi clicado novamente
                showRetryButton('Muito fácil, era pra ser dificil lembra ? assim não da graça de te conquistar =P');
            }

            // Apenas para debug
            console.log(`Contador: ${count}`);
        });
    } else {
        console.error('Botão ou elemento de texto não encontrado.');
    }

    // Adiciona um evento de clique ao botão "Não"
    if (wineButton) {
        wineButton.addEventListener('click', () => {
            // Posiciona o botão "Não" em uma posição aleatória
            const x = Math.random() * (window.innerWidth - wineButton.offsetWidth);
            const y = Math.random() * (window.innerHeight - wineButton.offsetHeight);
            wineButton.style.position = 'absolute';
            wineButton.style.left = `${x}px`;
            wineButton.style.top = `${y}px`;

            // Marca que o botão "Não" foi clicado antes de "Sim"
            if (!firstClick) {
                noClickedBeforeYes = true;
            }

            // Incrementa o contador
            count++;
            
            // Atualiza o texto do botão "Sim!!!" se não for o primeiro clique
            if (firstClick) {
                highlightedTextElement.textContent = 'Me fala no zap o dia princesa, mas atualiza a página e clica em sim primeiro c=';
            }

            // Apenas para debug
            console.log(`Contador: ${count}`);
        });
    } else {
        console.error('Botão "Não" não encontrado.');
    }

    // Adiciona um evento de clique ao botão de tentar novamente
    if (retryButton) {
        retryButton.addEventListener('click', () => {
            // Reseta o contador e o estado dos botões
            count = 0;
            firstClick = false;
            noClickedBeforeYes = false;
            
            // Restaura o texto e os botões
            highlightedTextElement.textContent = 'Vamo no zoologico kakau games?';
            greenButton.style.display = 'inline-block';
            wineButton.style.display = 'inline-block';
            retryContainer.style.display = 'none';
            
            // Restaura a posição do botão "Não" para o seu local original
            wineButton.style.position = 'static';
            
            // Apenas para debug
            console.log(`Contador resetado: ${count}`);
        });
    } else {
        console.error('Botão de tentar novamente não encontrado.');
    }
});
