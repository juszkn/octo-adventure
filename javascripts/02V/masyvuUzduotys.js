function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write('<h3>Prima užduotis</h3>')
//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), 
// kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const randNumArray = [];
for (let i = 0; i < 30; i++) {
    randNumArray.push(rand(5, 25))
}

document.write(randNumArray);

document.write('<h3>Antra užduotis</h3>')
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


document.write(`<h3>Trečia užduotis</h3>`);
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai
// nuo 100 iki 999. Masyvų ilgiai 100. 
// Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

const array_1= [];
const array_2= [];

for (let i = 0; i < 100; i++) {
    if(i === 0) {
        array_1[i] = rand(100, 999);
    } else {
        let randomnumber = rand(100, 999);
        if(array_1.includes(randomnumber)) {
            i--;
        } else {
            array_1.push(randomnumber);
        }
    }
}
for (let i = 0; i < 100; i++) {
    if(i === 0) {
        array_2[i] = rand(100, 999);
    } else {
        let randomnumber = rand(100, 999);
        if(array_2.includes(randomnumber)) {
            i--;
        } else {
            array_2.push(randomnumber);
        }
    }
}
document.writeln(`${array_1}`);
// document.writeln(`${array_1.length}`);

document.write(`${array_2}`);
// document.writeln(`${array_2.length}`);


document.write(`<h3>Ketvirta užduotis</h3>`);
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra 
// pirmame 3 uždavinio masyve,
// bet nėra antrame 3 uždavinio masyve

const array_3 = [];
let isSame = false;

for(let i = 0; i < array_1.length; i++) {
    // console.log("Pirmas masyvas:" + array_1[i])
    for(let j = 0; j < array_2.length; j++) {
        // console.log("Antras masyvas: " + array_2[j])
        if(array_1[i] === array_2[j]) {
            isSame = true;
            break;
        }
    } 
        if (isSame === false) {
            array_3.push(array_1[i]);
    } 
    isSame = false;
}
document.write(array_3);


document.write(`<h3>Penkta užduotis</h3>`);
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra 
// pirmame 3 uždavinio masyve,
// bet nėra antrame 3 uždavinio masyve

const fourthArray = [];
for (let i = 0; i < array_1.length; i++) {
    for (let j = 0; j < array_2.length; j++) {
        if (array_1[i] === array_2[j]) {
            fourthArray.push(array_1[i])
        }
    }
}
document.write(fourthArray);

document.write(`<h3>Šešta užduotis</h3>`);
//Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- 
// atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. 
// Ketvirtas- antro ir trečio suma.
// Penktas trečio ir ketvirto suma ir t.t.

const unoArray = [rand(5, 25), rand(5, 25)];

for(let i = 2; i < 10; i++) {
    unoArray[i] = unoArray[i - 1] + unoArray[i - 2];
}
document.write(unoArray);


document.write(`<h3>Septinta užduotis</h3>`);
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200.
// Suskaičiuokite kiek yra kiekvienos raidės.

let randAbc = [];
const raides = ["A", "B", "C", "D"];

let kiekisA = 0;
let kiekisB = 0;
let kiekisC = 0;
let kiekisD = 0;

for (let i = 0; i < 200; i++) {
    randAbc.push(raides[rand(0, raides.length - 1)])
    if (randAbc[i] === "A") {
        kiekisA++;
    }
    if (randAbc[i] === "B") {
        kiekisB++;
    }
    if (randAbc[i] === "C") {
        kiekisC++;
    }
    if (randAbc[i] === "D") {
        kiekisD++;
    }
}
document.write(`A: ${kiekisA}, B: ${kiekisB}, C: ${kiekisC}, D: ${kiekisD}`);
console.log(randAbc);

document.write(`<h3>Aštunta užduotis</h3>`);
// Išrūšiuokite 7 uždavinio masyvą pagal abecėlę.

const filtruotas = randAbc.sort();
console.log(filtruotas);

document.write(`<h3>Devinta užduotis</h3>`);
// Sugeneruokite 3 masyvus pagal 7 uždavinio sąlygą. 
// Sudėkite masyvus, sudėdami reikšmes pagal atitinkamus indeksus.

// Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių 
// ir kiek unikalių kombinacijų gavote.

//Pvz.
// [‘AAA’, ‘BBB’, ‘CCC’, ‘ACC’] = Viena unikali reikšmė “ACC”
// [‘ACA’, ‘ABA’, ‘ACA’, ‘ADA’] = Dvi unikalios kombinacijos “ABA” ir “ADA”
// [‘A’, ‘D’, ‘B’]
// [‘B’, ‘A’, ‘D’]
// [‘A’, ‘C’, ‘B’]

const arrayFirst = ["A", "B", "C", "D"];

const newArrayss = [];
const newArrayDu = [];
const newArrayTrys = [];

for(let i = 0; i < 200; i++){

    newArrayss.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
    newArrayDu.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
    newArrayTrys.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
}

const raidziuMasyvas = [];
for(let i = 0; i < 200; i++) {
    raidziuMasyvas.push(newArrayss[i] + newArrayDu[i] +  newArrayTrys[i]);
}

console.log(raidziuMasyvas);

// Apdorojimas

const tikUnikaliosReiksmes = [];

for(let i = 0; i < raidziuMasyvas.length; i++) {
    if(raidziuMasyvas[i] === "AAA" || raidziuMasyvas[i] === "CCC" || raidziuMasyvas[i] === "DDD")
        continue;
    
    tikUnikaliosReiksmes.push(raidziuMasyvas[i]);
}

console.log(tikUnikaliosReiksmes);
