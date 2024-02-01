document.write(`<h3>Pirma užduotis</h3>`);
// Naršyklėje atspausdinkite visus nelyginius skaičius nuo 7 iki 31.

let r;

for(r = 7; r <= 31; r = r+1 ) {
    // console.log(r);
    if (r > 7) {
        r++;
    }
    document.write(` ${r} `);
    console.log(` ${r} `);
}

document.write('<h3>Antra užduotis</h3>');
// Aprašykite ciklą kuris naršyklėje atspausdintų skaičių didėjimo modelį iki dešimties.
// Rezultato pavyzdys:

let totalRows = 10;
let result = '';

for(let i = 1; i <= totalRows; i++) {
    for (let j = 1; j <= i; j++) {
        result += j + '  ';
    }
    document.write(`<p style="letter-spacing: 3px">${result}</p>`)
    console.log(result);
    result = '';
}


document.write('<h3>Trečia užduotis</h3>');
// Jums duotas stringas: “Žalgiris, Anadolu Efes, Barcelona BC”. 
// Pasinaudodami ciklų pagalba iš stringo ištraukite vieną atsitiktinį komandos pavadinimą.
// Rezultate kablelių ir tarpų neturi būti. 

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
    
    let newstring = 'Žalgiris, Anadolu Efes, Barcelona BC'
    console.log(newstring.length)

    let komanda = '';
    while (true) {
        komanda = rand(0, 2);
        console.log(komanda);
        if (komanda === 0) {
            document.write(`<p>${newstring.substring(0, 8)}</p>`)
        } else if (komanda === 1) {
            document.write(`<p>${newstring.substring(10, 22)}</p>`)
        } else {
            document.write(`<p>${newstring.substring(24, 36)}</p>`)
        }
        break;
    }

document.write('<h3>Ketvirta užduotis</h3>');
//Jums duotas stringas: “54 77 2 59 17 19 108”. 
// Paimkite jame esančius skaičius ir patikrinkite juos ar jie yra pirminiai. 
// T.y. ar natūralusis skaičius yra didesnis nei 1 ir be liekanos,
// dalinasi tik iš savęs ir iš vieneto. 
// https://en.wikipedia.org/wiki/Prime_number 

// Jums duotas stringas: “54 77 2 59 17 19 108”. Paimkite jame esančius skaičius ir patikrinkite juos ar jie yra pirminiai. T.y. ar natūralusis skaičius yra didesnis nei 1 ir be liekanos dalinasi tik iš savęs ir iš vieneto

let stringas = '54 77 2 59 17 19 108';
let skaicius = '';
let isPrime = true
for(let i = 0; i < stringas.length; i++) {
    // console.log(stringas[i])
    if(stringas[i] === ' ') {
        for (let i = 2; i < skaicius; i++) {

            if (skaicius % i == 0) {
                isPrime = false;
                console.log(`next ${skaicius}`)
                break;
            } // console.log(skaicius)
        }
        skaicius = '';
    } else {
        skaicius += stringas[i];
    }
}