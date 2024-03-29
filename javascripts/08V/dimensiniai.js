function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai
// iš 5 elementų su reikšmėmis nuo 5 iki 25.                        1↓

const array = [];

for(let i = 0; i < 10; i++) {
    array[i] = [];

    for(let x = 0; x < 5; x++) {
        array[i][x] = rand(5, 25);
    }
}

console.log(array);

// Suskaičiuokite kiek masyve yra elementų didesnių už 10;          2a↓

let sum = 0;

for(let i = 0; i < array.length; i++) {
    for(let x = 0; x < array[x].length; x++) {
        if (array[i][x] > 10)
            sum++
    }
}
console.log(sum);

//  naudojant reduce 

didesni = array.reduce(
    (didesniP, array) =>
        didesniP +
        array.reduce((didesniA, val) => (val > 10 ? didesniA + 1 : didesniA), 0),
    0
);
console.log(didesni);

// Raskite didžiausio elemento reikšmę;                             2b↓

let max = 0;

for(let i = 0; i < array.length; i++) {
    for(let x = 0; x < array[x].length; x++) {
        if(array [x][i] > max)
            max = array[x][i];
    }
}
console.log (max);

// naudojant Math.max

let maxNum = Math.max(...array.flat())
console.log(maxNum);

// Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas
// (t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.)               2c↓

const sumos = [0, 0, 0, 0, 0];

for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
        sumos[x] += array[i][x];
    }
}
console.log(sumos);

// Naudojant funkcija

const columnSum = (array) => {
    const sumArray = [];
    for (let i = 0; i < array[i].length; i++) {
        let sum = 0;
        for (let j = 0; x < array.length; x++) {
            sum += array[x][i];
        }
        sumArray.push(sum);
    }
    return sumArray;
}

// Visus antro lygio masyvus “pailginkite” iki 7 elementų           2d↓

for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < 2; x++) {
     number = rand(5, 25)
        array[i].push(number);
    }
}
console.log(array);

// funkcija 

// const extendSecondLevels = (arrayWithChildArrays) => {
//     for (let i = 0; i < arrayWithChildArrays.length; i++) {
//         arrayWithChildArrays[i] = [...arrayWithChildArrays[i], rand(5, 25), rand(5, 25)];
//     }
//     return arrayWithChildArrays;
// }
//
// console.log(extendSecondLevels(generate2dArray()));

// Suskaičiuokite kiekvieno iš antro lygio masyvų elementų sumą atskirai 
// ir sumas panaudokite kaip reikšmes sukuriant naują masyvą.
// T.y. pirma naujo masyvo reikšmė turi būti lygi mažesnio masyvo,
// turinčio indeksą 0 dideliame masyve, visų elementų sumai         2e↓

const rowSums = [];

for(let i = 0; i < array.length; y++) {
    let sum = 0;
    
    for(let x = 0; x < array[x].length; x++) {
        sum += array[i][x];
    }
    rowSums.push(sum);
    break;
}
console.log(`${rowSums}`);


//Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti
// masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų.
// Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z.
// Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).
//                                                                   3↓

// const thirdArray = [];
//    
//     for (let c = 0; c < 10; c++) {
//         thirdArray[c] = [];
//         let numb = rand(2, 20);
//             for(let b = 0; b < rand(2, 20); b++) {
//                 let r = Math.floor(Math.random() * 26);
//                 let strinChar = String.fromCharCode(65 + r);
//                 thirdArray[c].push(strinChar);
//         }
//     }
//    
//     console.log(thirdArray);

const raidziuMasyvas = [];
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(let i = 0; i < 10; i++) {
    raidziuMasyvas[i] = [];
    const ilgis= rand(2, 20);

    for(let x = 0; x < ilgis; x++) {
        raidziuMasyvas[i][x] = letters[rand(0, letters.length - 1)];
    }
}

console.log(raidziuMasyvas);

// Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai
// kurių masyvai trumpiausi eitų pradžioje. 
// Masyvai kurie turi bent vieną “K” raidę, 
// visada būtų didžiojo masyvo visai pradžioje.                      4↓


let ar3 = [];
for (let p = 0; p < 10; p++) {
    const arrLength = rand(2, 20);
    const arr = new Array(arrLength);
    for (let a = 0; a < arr.length; a++) {
        arr[a] = String.fromCharCode(rand(65, 90));
    }
    ar3.push(arr.sort());
}

console.log(ar3);

ar3.sort((a, b) => {
    // Sort by length first
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    // If lengths are equal, sort by presence of 'K'
    if (a.includes('K') && !b.includes('K')) {
        return -1;
    } else if (!a.includes('K') && b.includes('K')) {
        return 1;
    }
    // If lengths and presence of 'K' are equal, maintain order
    return 0;
});

console.log(ar3);

for(let i = 0; i < raidziuMasyvas.length; i++) {
    raidziuMasyvas[i].sort();
}
console.log(raidziuMasyvas);

const tempArray = [15, 4, 5, 400, 1500];

tempArray.sort(function (pirma,antra) {
   return 1;
   return 0;
   return -100;
   
});
console.log(tempArray);


raidziuMasyvas.sort(function (a, b) {
    return a.length - b.length;
});
console.log(raidziuMasyvas);

raidziuMasyvas.sort((a, b) => a.length - b.length);
console.log(raidziuMasyvas);