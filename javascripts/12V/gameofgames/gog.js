function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const game = document.querySelector(`.game`);
let posTop = 0;
let posLeft = 0;
let time = 0;
let kiekis = 0;
let score = 0;

document.querySelector(`.game`).addEventListener("click", (event) => {
    console.log(event);
    //Ivykdom pakeitima
    kiekis++;
    document.querySelector(".result").innerHTML = `Mygtukas paspaustas ${kiekis} kartu`;
    
    if(kiekis > time) {
        document.location.reload();
    }
});

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}

setInterval(() => {

    if (time === 30) {
        time = 0;
        console.log(`Roundas baigtas`);
        round++ //
        const roundResult = kiekis; // Išsaugojame kiekį, paspaudimų skaičių šiame raunde
        kiekis = 0; // Nustatome paspaudimų kiekį naujam raundui
        document.querySelector(".result").innerHTML = `Round ${round} result: ${roundResult}`;
        console.log('baig');
    }
    
    posTop = rand(50,550);
    posLeft = rand(50,550);
    game.style.top = `${posTop}px`;
    game.style.left = `${posLeft}px`;
    game.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)},${getRandom(0, 255)})`;

    time++;
    // console.log(time);
    document.querySelector('.timer').innerHTML = time 
}, 1000);