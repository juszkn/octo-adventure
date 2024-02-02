function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write('<h3>Prima uzduotis</h3>')
//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), 
// kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const randNumArray = [];
for (let i = 0; i < 30; i++) {
    randNumArray.push(rand(5, 25))
}

document.write(randNumArray);

document.write('<h3>Antra uzduotis</h3>')
document.write('<h3>a)</h3>')
//Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let kiekis = 0;
for(let i = 0; i < randNumArray.length; i++) {
    if (randNumArray[i] > 10) {
        kiekis++;
    }
}
document.write(kiekis);

document.write('<h3>b)</h3>');
//Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

let max = 0;
let indeksas = [0];

for(let i = 0; i < randNumArray.length; i++) {
    if (randNumArray[i] > max) {
        indeksas = [0];
        indeksas[0] = i;
        max = randNumArray[i];
    } else if (randNumArray[i] === max) {
        indeksas.push(i);
    }
}
document.write(indeksas);

document.write('<h3>c)</h3>');
//Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

let sum = 0;
for (let i = 0; i < randNumArray.length; i++) {
    if (i % 2 === 0) {
        sum += randNumArray[i];
    }
}
document.write(`poriniu indexu reiksmiu suma = ${sum}`)


document.write(`<h3>d)</h3>`);
// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const newArray = [];
for (let i = 0; i < randNumArray.length; i++) {
    newArray.push(randNumArray[i] - i);
}
document.write(newArray);

document.write(`<h3>e)</h3>`);
// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, 
// kad bendras masyvas padidėtų iki indekso 39;

for(let i = 0; i < 10; i++) {
    randNumArray.push(rand(5, 25));
}
document.writeln(randNumArray);

document.write(`<h3>f)</h3>`);
//Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti 
// sudarytas iš neporinių indeksų reikšmių,
// o kitas iš porinių;

const poriniai = [];
const neporiniai = [];

for(let i = 0; i < randNumArray.length; i++) {
    if(randNumArray[i] % 2 === 0) {
        poriniai.push(randNumArray[i]);
    } else {
        neporiniai.push(randNumArray[i]);
    }
}
document.write(`Poriniai: ${poriniai}</br>`);
document.write(`Neporiniai: ${neporiniai}`);

document.write(`<h3>g)</h3>`);
//Pirminio masyvo elementus su poriniais indeksais 
// padarykite lygius 0 jeigu jie didesni už 15;

for(let i = 0; i < randNumArray.length; i++) {
    if (i % 2 === 0 && randNumArray[i] > 15) {
        randNumArray.splice(i, 1, 0);
    }
}
document.write(randNumArray);

document.write(`<h3>h)</h3>`);
//Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10; 

for(let i = 0; i < randNumArray.length; i++ ) {
    if (randNumArray[i] > 10) {
        document.write(i);
        break;
    }
}

document.write(`<h3>i)</h3>`);
//Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

for(let i = 0; i < randNumArray.length; i++) {
    if (i % 2 === 0) {
        randNumArray.splice(i, 1, 'a');
    }
}
for (let i = 0; i < randNumArray.length; i++) {
    if (randNumArray[i] === 'a' ) {
        randNumArray.splice(i, 1);
    }
}
document.write(randNumArray);