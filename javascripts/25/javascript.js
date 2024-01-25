let vardas= 'Jonas';
console.log(vardas)

let miestas = 'Vilnius';
let adresas = 'Saltoniskiu g. 19'
let telefonas = '+37065345409'


// console.log('Gauti duomenys: ' + miestas + ' ' + adresas + ' ' + telefonas);

let rezultatas = `Gauti duomenys:
                            Miestas: ${miestas}
                            Adresas: ${adresas}
                            Telefonas: ${telefonas}
                            `;

console.log(rezultatas);

console.log(`Gauti duomenys: ${miestas} ${adresas} ${telefonas}`)

console.log(miestas, adresas, telefonas);

let x = 18;
let y = 22;

rezultatas = x + y;

console.log(rezultatas);

console.log(typeof rezultatas);

if (x > y) {
    console.log('X daugiau negu Y');
} else {
    console.log('Y yra daygiau negu X');
}

if(x = y) {
    console.log(x);
}

x = false

if(x) {
    console.log('X reiksme teigiama');
 } else {
    console.log('X reiksme yra neigiama');
}

if (!x) {
    console.log('X reiksme neigiama');
} else {
    console.log('X reiksme yra teigiama');
}

x = 16;
if(x !== 0) {
    console.log('X nelygu 0');
}