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

let k = rand(0 ,300);
document.write(k);


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
