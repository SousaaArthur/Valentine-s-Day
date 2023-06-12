let btnNo = document.getElementById('btnNo');
let btnYes = document.getElementById('btnYes')
let secondText = document.getElementById('secondText');
let mainText = document.getElementById('mainText');
let img = document.querySelector('.images');

function btnRun(){
    // Obtém a largura e altura da janela do navegador
    let widthWindow = window.innerWidth;
    let heightWindow = window.innerHeight;

    // Calcula as posições máximas permitidas para o botão
    let maxX = widthWindow - btnNo.offsetWidth;
    let maxY = heightWindow - btnNo.offsetHeight;

    // Gera coordenadas aleatórias dentro dos limites máximos
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

     // Define as posições do botão com base nas coordenadas aleatórias
    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";

    // Altera a imagem, texto principal e segundo texto
    img.src = 'imgs/emoji com raiva.png'
    mainText.innerText = "What are you doing?"
    secondText.innerText = "ACCEPT PLEASE"
}

function btnAccept(){
    // Altera a imagem, texto principal e segundo texto
    img.src = 'imgs/emoji apaixonado.png'
    mainText.innerText = "I love you <3"
    secondText.innerText = "Happy Valentine's Day"

    //Remove os botões da tela
    btnNo.style.display = 'none'
    btnYes.style.display = 'none'
}

function btnAcceptSensor(){
    // Altera a imagem, texto principal e segundo texto
    img.src = 'imgs/emoji bonitinho.png'
    mainText.innerText = "You will not regret!"
    secondText.innerText = "I promise"
}