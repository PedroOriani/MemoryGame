const cartas = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];

const baralho = [];

let qtdeCartas = 0;

let jogadas = 0, acertos = 0;

let primeiraCarta, segundaCarta;

function verificarFimJogo(){

    if ( acertos === baralho.length ){
        alert(`Você ganhou em ${jogadas} jogadas!`);
    }

}

function desvirarCartas(){
    primeiraCarta.classList.remove('virada');
    segundaCarta.classList.remove('virada');
                
    primeiraCarta = undefined;
    segundaCarta = undefined;
}

function virarCarta(cartaClicada){

    if ( cartaClicada.classList.contains('virada')){
        return;
    }

    jogadas++;

    if ( primeiraCarta === undefined ){
        primeiraCarta = cartaClicada;
        primeiraCarta.classList.add('virada');
    }else{
        if ( segundaCarta === undefined){
            
            segundaCarta = cartaClicada;
            
            segundaCarta.classList.add('virada');

            if ( segundaCarta.innerHTML === primeiraCarta.innerHTML ){
                
                acertos = acertos + 2;

                primeiraCarta = undefined;
                segundaCarta = undefined;

                verificarFimJogo();

            }else{  

                setTimeout( desvirarCartas, 1000);
                
            }
        }
    }   

    console.log(primeiraCarta);
    console.log(segundaCarta);
    
}

function comparador() { 
	return Math.random() - 0.5; 
}

function distribuirCartas(){

    const tabuleiro = document.querySelector('.tabuleiro');

    for( let i = 0; i < baralho.length; i++){
        
        let carta = baralho[i];

        tabuleiro.innerHTML += `
            <li class="carta" onclick="virarCarta(this)">
                <div class='front-face face'>
                    <img src='imagens/front.png'>
                </div>
                <div class='back-face face'>
                    <img src='./imagens/${carta}.gif'>
                </div>
            </li>
        `;
    }

}

function gerarBaralho(){

    for ( let i = 0; i < qtdeCartas/2 ; i++){
        let carta = cartas[i];
        baralho.push(carta);
        baralho.push(carta);
    }
    
    baralho.sort(comparador);

    console.log(baralho);

    distribuirCartas();
}

function pergutarQtdeCartas(){
    
    qtdeCartas = Number(prompt('Com quantas cartas você quer jogar?'));
    
    /*while( qtdeCartas === NaN || qtdeCartas % 2 !== 0 || qtdeCartas < 4 || qtdeCartas > 14 ){
        qtdeCartas = Number(prompt('Com quantas cartas você quer jogar?'));
    }*/

    gerarBaralho();
}

pergutarQtdeCartas();

