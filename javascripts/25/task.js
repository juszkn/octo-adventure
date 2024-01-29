function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
// Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

document.write('<h3> Pirmoji užduotis</h3>');

let name = 'Justinas';
let surname = 'Zekonis';
let birthYear = 1996;
let currentYear = 2024;
let rezultatas = currentYear - birthYear;

document.write(`Aš esu ${name} ${surname},
Man yra ${rezultatas} metai`);

//Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
// Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naršyklėje.
// Papildomai:Suapvalinkite skaičių iki dviejų skaičių po kablelio.

document.write('<h3> Antroji užduotis</h3>');

let a = rand(0, 4);
let b = rand(0, 4);
document.write(`<p>Gautos reikšmės: ${a}, ${b}</p>`);


if(a > b) {
    if(b === 0) {
        document.write(`<p>Dalyba iš nulio negalima</p>`);
    } else {
        document.write(`<p>Rezultatas: ${(a / b).toFixed(2)}</p>`);
    }
} else if (a === b) {
    document.write(`<p>Skaičiai yra lygūs</p>`);
} else {
    if (a === 0) {
        document.write(`<p>Rezultatas: 0;</p>`);
    } else {
        document.write(`<p>Rezultatas: ${(b / a).toFixed(2)}</p>`);
    }
}

// if (a > b) {
//     document.write(a/b);
// } else if (b > a) {
//     document.write(b/a);
// } else {
//     document.write(`A ir B yra lygus`)
// }


// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. 
// Raskite ir atspausdinkite kintamąjį turintį vidurinę reikšmę.

document.write('<h3> Trečioji užduotis</h3>');

let pirmasSkaicius = rand(0, 25);
let antrasSkaicius = rand(0, 25);
let treciasSkaicius = rand(0, 25);
document.write(`Gauti skaičiai: ${pirmasSkaicius}, ${antrasSkaicius}, ${treciasSkaicius}`);

if(pirmasSkaicius <= antrasSkaicius) {
    if (antrasSkaicius <= treciasSkaicius) {
        document.write('<p>Antras skaičius yra didesnis nei pirmas</p>');
    } else {
        if(pirmasSkaicius <= treciasSkaicius) {
            document.write('<p>Trecias skaicius yra vidurinis</p>');
        } else {
            document.write('<p>Pirmas skaicius yra vidurinis</p>');
        }
    }
} else {
    if(pirmasSkaicius <= treciasSkaicius) {
        document.write('<p>Pirmas skaicius yra vidurinis</p>');
    } else {
        document.write('<p>Antras skaicius yra vidurinis</p>');
    }
}




// if ( > o) {
//     if (o < u) {
//         console.log('o yra vidurinis skaičius')
//     } else if (u > o) {
//     } else (o < u)
//         console.log('u')
// } else {   
//     console.log('i yra daugiau negu nulis');
// }


// Sukurkite keturis kintamuosius ir rand() funkcija sugeneruokite jiems 
// reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. (sprendimui masyvo nenaudoti).

document.write('<h3> Ketvirtoji užduotis</h3>');

let no1 = rand(0, 2);
let no2 = rand(0, 2);
let no3 = rand(0, 2);
let no4 = rand(0, 2);
let nulliai = 0;
let vienetai = 0;
let dvejetai= 0;

document.write(`</p>Gautos reikmes: ${no1} ${no2} ${no3}</p>`);

if(no1 ===0) {
    nulliai++;
}

if(no2 ===0) {
    nulliai++;
}

if(no3 ===0) {
    nulliai++;
}

document.write(`<p>Nuliai: ${nulliai}, Vienetai: ${no1}, Dvejetai: {$no`)
console.log(nulliai);
// console.log(`${zeroes} ${ones} ${twos}`);
