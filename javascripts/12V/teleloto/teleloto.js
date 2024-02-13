// Sukurkite mygtuką: "Ridenti kamuoliuką" ant kurio paspaudus būtų
// generuojamas atsitiktinis skaičius nuo 0 iki 100.

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const arrayFinal = [];

document.querySelector('#loto').onclick = (number) => {
    const array = [];
    
    for(let i = 0; i < arrayFinal.length; i++) {
        array[i] = rand(0, 99);
        arrayFinal.push(array[i]);
        console.log(arrayFinal);
    }
    
    document.querySelector('.result').textContent = `${array.join(` `)}`
    document.innerHTML += `<div>${arrayFinal}</div>`;

}





// Skaičius atvaizduokite eilėje ir stilizuokite juos kaip kamuoliukus.

// Kiekvieną kartą paspaudus ant mygtuko "išridenamas kamuoliukas".

