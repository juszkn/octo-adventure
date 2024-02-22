let seconds = 40;
let timer;

const start = (e) => {

    if (seconds === 0) {
        return;
    }

    // console.log()
    // if (button.textContent === `Start`) {
    //     button.textContent = `Stop`;
    // } else {
    //     button.textContent = `Start`;
    // }

    timer = setInterval(() => {
        seconds--;
        document.querySelector(`.minutes`).textContent = Math.floor(seconds / 60);
        document.querySelector(`.seconds`).textContent = seconds % 60;

        if (seconds === 0) {
            clearInterval(timer);
            return;
        }
    }, 1000);
}

const reset = (e) => {
    seconds = 0;
}
