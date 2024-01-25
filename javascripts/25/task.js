function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
// Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

let name = 'Justinas';
let surname = 'Zekonis';
let birthYear = "1996";
let currentYear = "2024";

rezultatas = currentYear - birthYear;

console.log(`Aš esu ${name} ${surname},
Man yra ${rezultatas} metai`);

//Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
// Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naršyklėje.
// Papildomai:Suapvalinkite skaičių iki dviejų skaičių po kablelio.

let a = rand(0, 4);
let b = rand(0, 4);
console.log(a, b);

if (a > b) {
    document.write(a/b);
} else if (b > a) {
    document.write(b/a);
} else {
    document.write(`A ir B yra lygus`)
}


// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. 
// Raskite ir atspausdinkite kintamąjį turintį vidurinę reikšmę.

let i = rand(0, 25);
let o = rand(0, 25);
let u = rand(0, 25);
console.log(i, o, u);

if (i > o) {
    if (o < u) {
        console.log('o yra vidurinis skaičius')
    } else if (u > o) {
    } else (o < u)
        console.log('u')
} else {   
    console.log('i yra daugiau negu nulis');
}


// Sukurkite keturis kintamuosius ir rand() funkcija sugeneruokite jiems 
// reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. (sprendimui masyvo nenaudoti).


const random_no1 = rand(0, 2);
const random_no2 = rand(0, 2);
const random_no3 = rand(0, 2);
const random_no4 = rand(0, 2);

let zeroes = 0;
let ones = 0;
let twos = 0;

console.log(`${zeroes} ${ones} ${twos}`);
