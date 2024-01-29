// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). 
// Atspausdinti trumpesnį stringą.
//     Pvz:
// Johnny Depp
// Rezultatas: Depp

document.write('<h3>Pirma uzduotis:</h3>');

let name = 'Johnny';
let surname = 'Depp';

if (name.length > surname.length) {
    document.write(`${name}`);
} else if (name.length === surname.length) {
    document.write(`${name} ${surname} yra vienodo ilgio`);
} else {
    document.write(`${surname}`);
}

//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
// Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms.
// Rezultatas: JOHNNY depp

document.write('<h3>Antra uzduotis:</h3>');
document.write(`${name.toUpperCase()} ${surname.toLowerCase()}`);

// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
// Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
// Rezultatas: JD

document.write('<h3>Trecia uzduotis:</h3>');
let shortname = (`${name.charAt(0)}${surname.charAt(0)}`);
document.write(`${shortname}`);

//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
// Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
// Rezultatas: NNYEPP

document.write('<h3>Ketvirta uzduotis:</h3>');
let short = (`${name.slice(-3).toUpperCase()}${surname.slice(-3).toUpperCase()}`);
document.write(`${short}`);


// Sukurti kintamąjį su stringu: “An American in Paris”. 
// Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
// Rezultatas: *n *meric*n in P*ris


document.write('<h3>Penkta uzduotis:</h3>');
let murica = "An American in Paris";
document.write(murica.replaceAll(/[aA]/gi, '*'));

//Sukurti kintamąjį su stringu: “An American in Paris”.
// Suskaičiuoti visas “a” (didžiąsias ir mažąsias) raides. Rezultatą atspausdinti.
// Rezultatas: 4

document.write('<h3>Sesta uzduotis:</h3>');
let countA = (murica.match(/[aA]/g) || []).length;
document.write(countA);

//Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. 
// Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
// Rezultatas: n mrcn n Prs

document.write('<h3>Septinta uzduotis:</h3>');
document.write(murica.replaceAll(/[aAeEiI]/gi, ''));

//Stringe, kurį generuoja toks kodas: `Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`; 
// Surasti ir atspausdinti epizodo numerį.
// Rezultatas: 5 9

document.write('<h3>Astunta uzduotis:</h3>');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let starWars = `Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`;
let episode = starWars.replace(/[^0-9]/g, " ");
document.write(episode);

//Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. 
// Stringo ilgis 3 simboliai.
// Rezultatas: jkr

document.write('<h3>Devinta uzduotis:</h3>');

// let abc = 'abcdefghijklmnopqrstuvwxyz';
