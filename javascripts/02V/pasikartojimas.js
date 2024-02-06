function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write('<h3>Prima užduotis</h3>')
//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29),
// kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const masyvas= [];

for(let i = 0; i < 30; i++) {
    let randoms = rand(5, 25);
    masyvas.push(randoms);
}
console.log(masyvas)

document.write('<h3>Antra užduotis</h3>')
document.write('<h3>a)</h3>')
//Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let daugiau = 0;
for (let i = 0; masyvas[i]; i++) {
    if (masyvas[i] > 10)
        daugiau++;
}
console.log(daugiau)

document.write('<h3>b)</h3>');
//Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

let didziausias = 0;
let didziausiasIndex = 0;

for(let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > didziausias) {
        didziausias = masyvas[i]
        didziausiasIndex = i
    }
}
console.log(`index ${didziausiasIndex}`);
console.log(`Reiksme ${didziausias}`)


document.write('<h3>c)</h3>');
//Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;


let sum = 0;

for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 === 0) {
        sum += masyvas[i];
    }
}
document.write(`poriniu indexu reiksmiu suma = ${sum}`)


document.write(`<h3>d)</h3>`);
// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const newMasyvas = [];
for (let i = 0; i < masyvas.length; i++) {
    newMasyvas.push(masyvas[i] - i);
}
document.write(newMasyvas);

document.write(`<h3>Trecia uzduotis</h3>`);
//Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti 
// sudarytas iš neporinių indeksų reikšmių,
// o kitas iš porinių;

const firstArray = [];
const secondArray = [];

for(let i = 0; firstArray.length < 100; i++) {
    let numb = rand(100, 999)
    
    if (!firstArray.includes(numb))
        firstArray.push(numb)
}

for(let i = 0; secondArray.length < 100; i++) {
    let numb = rand(100, 999)
    
    if (!secondArray.includes(numb))
        secondArray.push(numb)
}

console.log(`${firstArray}`);
console.log(`${secondArray}`);

const thirdArray = [];

for (let i = 0; i < thirdArray.length; i++) {
    if(!secondArray.includes(firstArray[i])) {
        thirdArray.push(firstArray[i])
    }
}
console.log(`${thirdArray}`);

document.write(`<h3>Penkta uzduotis</h3>`);

const fourthArray = [];

for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
        if (firstArray[i] === secondArray[j]) {
            fourthArray.push(firstArray[i])
        }
    }
}

document.write(fourthArray);

document.write(`<h3>Sesta uzduotis</h3>`);

const NewArr = [];
let no1 = rand(5, 25);
let no2 = rand(5, 25);

NewArr.push(no1, no2);
console.log(NewArr)

for( i = 2; i < 10; i++) {
    // console.log(i)
    if (NewNew = NewArr[i - 1] + NewArr[i - 2])
        NewArr.push(NewNew)
}

document.write(NewArr)