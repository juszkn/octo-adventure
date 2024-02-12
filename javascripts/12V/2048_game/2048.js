//ciklas sukasi 16 kartu
//kiekvieno ciklo eigoj papildyti html koda

let box = '';

for(let i = 0; i < 16; i++) {
    box += '<div></div>'
}

console.log(box)

document.querySelector('.div.container').innerHTML += box;