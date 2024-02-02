let pavadinimas = 'UAB "Gera Imone"';

let masyvas = ['Pavadinimas', 15, false, null, undefined, 'Brandas'];

console.log(masyvas[5]);

console.log(masyvas);

console.log(masyvas.length);

console.log(typeof masyvas);

masyvas[6] = 'Naujai prideta reiksme';
console.log(masyvas);

masyvas[masyvas.length] = 'Dar vienas pridetas elementas';

const naujasMasyvas = [10, 15, 25];

naujasMasyvas.splice(2, 1);

console.log(naujasMasyvas);



//Patikrink pirminius skaicius
const string = '54 77 2 59 17 19 108';
const numbers = string.split(' ');
const filteredNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    const digit = numbers[i];
    let isPrime = true;
    for(let x = 2; x < digit; x++) {
        if(digit % x === 0) {
            isPrime = false;
        }
    }
    if(isPrime) {
        filteredNumbers.push(digit);
    }
}

console.log(filteredNumbers)