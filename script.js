function showGame(){
    let screen1 = document.querySelector('.screen1').classList.add('hidden')
    let screen2 = document.querySelector('.screen2').classList.remove('hidden')
}

function howManyCards(){
    let nCards = document.querySelector('.input').value

    if (nCards < 4 || nCards > 14 || nCards % 2 !== 0){
        alert('Burro?')
    }else{
        showGame();
    }
}

