function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write('<h3>Pirma uzduotis:</h3>');
// Naršyklėje nupieškite linija iš 400 “*”. 
// Naudodami css stilių “suskaldykite” liniją taip, kad visos žvaigždutės matytusi ekrane;
// Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 

let i = 1;
while (i <= 400) {
    document.write('*');
    if (i % 50 === 0) {
        document.write('\n');
    }
    i++;
}

// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300,
// atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.
// Skaičiai didesni nei 275 turi būti raudonos spalvos.
document.write('<h3>Antra uzduotis:</h3>');

// let k = rand(0 ,300);
// document.write(k);


document.write('<h3>Ketvirta uzduotis:</h3>');
// Nupieškite kvadratą iš “*”, kurio kraštinės sudaro 100 “*”.
// Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis. (Priskirkite reikiamą eilučių aukštį)

document.write(`<h5>Kvadratas</h5>`);

let size = 25;
let rezultatas = '<div style="line-height: 8px;">';

for(let y= 0; y < size; y++) {
    for(let x = 0; x < size; x++) {
        if (x === y || x === size - y - 1) {
            rezultatas += '<span style="color: red;">*</span>';
        } else {
            rezultatas += '*';
        }
    }    
    rezultatas += '</br>';
}
rezultatas +='</div>'
document.write(rezultatas);



document.write('<h3>Sesta uzduotis:</h3>');
// Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. 
// Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. 
// Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// Iškritus herbui;
// Tris kartus iškritus herbui;
// Tris kartus iš eilės iškritus herbui;

document.write('<h5>Monetos a)</h5>')
while(true) {
    let moneta = rand(0, 1);

    if (moneta === 0) {
        document.write('H');
        break;
    } else {
    document.write('S');
    }
}

document.write('<h5>Monetos b)</h5>')

let kiekKartu = 0;

while(true) {
    let moneta = rand(0, 1);
    kiekKartu++;
    if (moneta === 0) {
        document.write('H');
    } else {
        document.write('S');
    }
    
    if(kiekKartu >= 3)
        break;
}
console.log(kiekKartu);

document.write('<h5>Monetos c)</h5>')

let tiekKartu = 0;

while(tiekKartu < 3) {
    let moneta = rand(0, 1);
    
    if (moneta === 0) {
        document.write('H');
        tiekKartu++;
    } else {
        document.write('S');
        tiekKartu = 0
    }
    // if(tiekKartu >= 3)
    //     break;
}
console.log(tiekKartu);

document.write('<h3>Septinta uzduotis:</h3>');
// Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25.
// Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: laimėtojo vardas”.
// Taškų kiekį generuokite funkcija rand(). Žaidimą laimi tas, kas greičiau surenka 222 taškus.
// Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.

let petroRezultatas = 0;
let kazioRezultatas = 0;

while (true) {
    let petras = rand(10, 20);
    let kazys = rand(5, 25);

    petroRezultatas += petras;
    kazioRezultatas += kazys;

    console.log(`<p>Partijos taskai: ${petras} ${kazys}</p>`);

    if (petras > kazys) {
        document.write(`<p>Partija laimejo Petras</p>`);
    } else if(petras === kazys) {
        document.write(`<p>Lygiosios</p>`);
    } else {
        document.write(`<p>Partija laimejo Kazys</p>`);
    }
    
    if(petroRezultatas >= 222 || kazioRezultatas >= 222)
        break;
}

document.write(`<p>Petro taskai: ${petroRezultatas}, Kazio taskai: ${kazioRezultatas}</p>`);

if(petroRezultatas > kazioRezultatas) {
    document.write(`<h4>Zaidima laimejo Petras</h4>`);
} else if (petroRezultatas === kazioRezultatas) {
    document.write(`<h4>Lygiosios zaidime</h4>`);
} else {
    document.write(`<h4>Zaidima laimejo Kazys</h4>`);
}

document.write('<h3>Astunta uzduotis:</h3>');
// Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
// “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
// “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti),
// kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.

document.write(`<p>Vinys a)</p>`);

let vinis = 85 * 5;
let bendrasGylis = 0;
let smugiai = 0;

while (bendrasGylis <= vinis) {
    let ikalimoGylis = rand(5, 20);

    bendrasGylis += ikalimoGylis;
    
    smugiai++;
}

document.write(`iklati prireike: ${smugiai} smugiu`);

document.write(`<p>Vinys b)</p>`);

let vinukas = 85 * 5;
let bendrasGyl = 0;
let smugis = 0;

while (bendrasGyl <= vinukas) {
    smugis++;
    
    if(rand(0, 1) === 0) {
        console.log('Nepataikem i vini');
        continue;
    }

    let  ikalimoGyl = rand(20, 30);

    bendrasGyl += ikalimoGyl;
}

document.write(`iklati prireike: ${smugis} smugiu`);

