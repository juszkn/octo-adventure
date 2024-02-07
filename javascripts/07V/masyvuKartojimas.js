function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write('<h3>Prima užduotis</h3>');
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29),
// kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const randomArray = [];

for (let i = 0; i < 30; i++) {
    let numbers = rand(5, 29);
    randomArray.push(numbers);
}
document.write(randomArray)

document.write('<h3>Antra užduotis a)</h3>');
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let kiekis = 0;

for(let i = 0; i < randomArray.length; i++) {
     console.log(randomArray[1]);
     if (randomArray[i] > 10) 
         kiekis++;
}
document.write(kiekis);

document.write('<h3>a2)</h3>');
// naudojant metoda filter

const randomSecondArray = randomArray.filter((reiksme) => reiksme > 10);
document.write(randomSecondArray.length);
console.log(randomArray);

document.write('<h3>b)</h3>');
//Raskite didžiausią masyvo reikšmę ir jos indeksą 
// arba indeksus jeigu yra keli;

let max = '';
const maxIndex = [];

for(let i = 0; i < randomArray.length; i++) {
    //Reiksme = masyvas[i]
    //indeksas = i
    //Masyvo ilgis .lenght
    if(max < randomArray[i]) {
        max = randomArray[i];
    }
}

for(let i = 0; i < randomArray.length; i++) {
    if(max === randomArray[i]) 
        maxIndex.push(i);
}

console.log(max);
console.log(maxIndex);

// document.write('<h3>b2)</h3>');

// const thisIndex = randomArray.map((reiksme, indeksas) => {
//         if (max === reiksme) {
//             return indeksas;
//         }
// })


document.write('<h3>c)</h3>');
//Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;


let sum = 0;

for (let i = 0; i < randomArray.length; i++) {
    if (i % 2 === 0) {
        sum += randomArray[i]
    }
}
document.write(sum);

document.write('<h3>d)</h3>');
//Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio 
// masyvo reikšmes minus tos reikšmės indeksas;

const newArray = [];

for (let i = 0; i < randomArray.length; i++) {
    newArray.push(randomArray[i] - i);
}
document.write(newArray);

document.write('<h3>e)</h3>');
//Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, 
// kad bendras masyvas padidėtų iki indekso 39;

for(let i = 0; i < 10; i++) {
    randomArray.push(rand(5, 25));
}
document.writeln(randomArray.length);


document.write('<h3>f)</h3>');
//Iš masyvo elementų sukurkite du naujus masyvus. 
// Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;

const poriniai = [];
const neporiniai = [];

for(let i = 0; i < randomArray.length; i++) {
    if( i % 2 === 0) { 
        poriniai.push(randomArray[i]);
    } else {
        neporiniai.push(randomArray[i]);
    }
}
console.log(`${neporiniai}`);
console.log(`${poriniai}`);


document.write('<h3>g)</h3>');
//Pirminio masyvo elementus su poriniais indeksais 
// padarykite lygius 0 jeigu jie didesni už 15;

console.log(randomArray);

for(let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] > 15 && i % 2 === 0) 
        randomArray[i] = 0;
}
console.log(randomArray);

const NewNewNew = randomArray.map((value, index) => {
    if (value > 15 && index % 2 === 0) {
        return 0;
    } else {
        return value
    }
})
console.log(NewNewNew);

const test = randomArray.map((reiksme, index) => index % 2 === 0 && reiksme > 15 ? reiksme = 0: reiksme);
console.log(test);


document.write('<h3>h)</h3>');
//Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;


let result;

for(let i= 0; i < randomArray.length; i++) {
    if(randomArray[i] > 10){
        result = i;
        break;
    }
}
console.log(result);

// naudojand findIndex metoda
const isLargeNumber = (element) => element > 10;
console.log(randomArray.findIndex(isLargeNumber));

document.write('<h3>i)</h3>');
//Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

console.log(randomArray);
for(let i = 0; i < randomArray.length; i++) {
    if (i % 2 === 0) {
        randomArray.splice(i, 1, 'a');
    }
}
for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] === 'a' ) {
        randomArray.splice(i, 1);
    }
}
console.log(randomArray);