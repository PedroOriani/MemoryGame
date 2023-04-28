let nCards = 0;

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
let turned;
let plays = 0;

function turnCard(clickedCard){

    if( card1 === undefined ){
        card1 = clickedCard;
        card1.classList.add('turned');
    }else{
        
        if( card2 === undefined ){
        card2 = clickedCard;
        card2.classList.add('turned');

            if( card2.innerHTML === card1.innerHTML ){
            console.log('iguais')
            }else{
            console.log('diferentes')
            }
    }
    console.log(card1);
    console.log(card2);
    card1 = undefined;
    card2 = undefined;
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
    generateCards();
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
        showGame();
    }
}

