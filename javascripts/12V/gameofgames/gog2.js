function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const box = document.querySelector(`.box`);

let posTop = 0;
let posLeft = 0;
let time = 0;

let playerScore = 0;
let round = 0;
let limit = 5;
let gameWinner = '';

document.querySelector(".box").addEventListener("click", () => {
    playerScore++;
});

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}

let intervaloId = setInterval(() => {
    if (time === limit) {
        let computerScore = limit - playerScore;
        time = 0;
        console.log('Roundas baigesi')
        round++
        
        if(playerScore > computerScore) {
            document.querySelector(".result").innerHTML += `<div> ${round} Roundą laimėjo: Žaidėjas surinkęs: ${playerScore} taškų </div>`;
        } else if (playerScore < computerScore) {
            document.querySelector(".result").innerHTML += `<div> ${round} Roundą laimėjo: Kompiuteris surinkęs: ${computerScore} taškų </div>`;
        } else {
            document.querySelector(".result").innerHTML += `<div> lygiosios </div>`;
        }
        playerScore = 0;
       
        if (round === 2) {
            clearInterval(intervaloId);
            
            // zaidimo pabaiga
            if (playerScore < computerScore) {
                gameWinner = 'Kompiuteris';
            } else if (playerScore > computerScore) {
                gameWinner = 'Žaidėjas';
            } else {
                document.querySelector('.bendras').innerHTML =
                    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px">
                        <h1>Žaidimas baigėsi lygiosiomis</h1>
                        <button class="reset" onClick="window.location.reload()">Bandykite dar kartą</button>
                    </div>`;
            }
            document.querySelector('.bendras').innerHTML =
                `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px">
                    <h1>Žaidimą laimėjo ${gameWinner}, laimėjęs ${intervaloId} roundus</h1>
                    <button class="reset" onClick="window.location.reload()">Bandykite dar kartą</button>
                </div>`;
        }
    }

    posTop = rand(50, 550);
    posLeft = rand(50, 550);
    box.style.left = `${posLeft}px`;
    box.style.top = `${posTop}px`;
    box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)},${getRandom(0, 255)})`;

    time++;
    console.log(time);
    document.querySelector(".time").innerHTML = time
}, 1000);