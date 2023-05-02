let nCards = 0;
let nCards5;
let nCards14;

const card = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];

const cards = [];

let card1, card2;
let turned = 0
let plays = 0;
let time;
let timer;

function generateFinalPage(){
    let finalText = document.querySelector('.final-texts');
    finalText.innerHTML = '';

    console.log(nCards);
    console.log(nCards5);
    console.log(nCards14);

    if (timer.innerHTML <= nCards && nCards <= 6){
        finalText.innerHTML += `
        <p>Parabéns pelo seu desempenho!</p>
        <p>Você acertou os ${nCards/2} pares em ${timer.innerHTML} segundos!</p>
        <p>Isso significa que você nao é tão burro assim</p>
        <p>Gostaria de jogar novamente?</p>
        `
    }else if(timer.innerHTML <= nCards5 && nCards >= 8 && nCards <= 10){
        finalText.innerHTML += `
        <p>Parabéns pelo seu desempenho!</p>
        <p>Você acertou os ${nCards/2} pares em ${timer.innerHTML} segundos!</p>
        <p>Isso significa que você nao é tão burro assim</p>
        <p>Gostaria de jogar novamente?</p>
        `
    }else if(timer.innerHTML <= nCards14 && nCards >= 12 && nCards <= 14){
        finalText.innerHTML += `
        <p>Parabéns pelo seu desempenho!</p>
        <p>Você acertou os ${nCards/2} pares em ${timer.innerHTML} segundos!</p>
        <p>Isso significa que você nao é tão burro assim</p>
        <p>Gostaria de jogar novamente?</p>
        `
    }else{
        finalText.innerHTML += `
        <p>Deve ser probelma mental!</p>
        <p>Você acertou os ${nCards/2} pares em ${timer.innerHTML} segundos!</p>
        <p>Como alguem é tão ruim assim no jogo da memória?</p>
        <p>Clica ai e reinicia isso, uma batata termina o jogo antes que você</p>
        `
    }
}

function finalPage(){
    let screen1 = document.querySelector('.screen1').classList.add('hidden')
    let screen2 = document.querySelector('.screen2').classList.add('hidden')
    let screen3 = document.querySelector('.screen3').classList.remove('hidden')
    generateFinalPage();
}

function verifyGame(){
    if (turned == nCards){
        console.log(timer.innerHTML);
        clearInterval(time)
        finalPage();
    }
}

function urturnCard(){
    card1.classList.remove('turned');
    card2.classList.remove('turned');
    card1 = undefined;
    card2 = undefined;
}

function turnCard(clickedCard){
    if (clickedCard.classList.contains('turned')){
        return;
    }

    if( card1 === undefined ){
        card1 = clickedCard;
        card1.classList.add('turned');
        plays ++;
    }else{
        
        if( card2 === undefined ){
        card2 = clickedCard;
        card2.classList.add('turned');
        plays ++;

            if( card2.innerHTML === card1.innerHTML ){
            turned += 2;
            card1 = undefined;
            card2 = undefined;
            }else{
            setTimeout(urturnCard, 1000); 
            }
    }

    verifyGame();
}
}

function spreadingCards(){
    const ulBoard = document.querySelector('.container-cards');

    for(let i = 0; i < cards.length; i++){
        ulBoard.innerHTML += `
        <li onclick="turnCard(this)" class ="card">
            <div class='front-face face'>
                <img src='img/back.png'/>
            </div>
            <div class='back-face face'>
                <img src='img/${cards[i]}.gif'>
            </div>
        </li>      
        `;   
}
    console.log(cards);
}

function showGame(){
    let screen1 = document.querySelector('.screen1').classList.add('hidden')
    let screen2 = document.querySelector('.screen2').classList.remove('hidden')
    let screen3 = document.querySelector('.screen3').classList.add('hidden')
    generateCards();
    iniciateTimer();
}

function comparador() { 
	return Math.random() - 0.5;
}

function generateCards(){
    for (let i = 0; i < nCards/2; i++){
        let iCard = card[i];
        cards.push(iCard);
        cards.push(iCard);
    }
    cards.sort(comparador); 
    spreadingCards()
}

function howManyCards(){
    nCards = document.querySelector('.input').value

    if (nCards < 4 || nCards > 14 || nCards % 2 !== 0){
        alert('Burro?')
        document.querySelector('.input').value = "";
    }else{
        nCards5 = Number(nCards) + 5;
        nCards14 = Number(nCards) + 14;
        showGame();
    }
}

function sumTime(){
    timer = document.querySelector('.timer')
    timer.innerHTML ++;
}


function iniciateTimer(){
    time = setInterval(sumTime, 1000);
}