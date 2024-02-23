
// Sukurkite mygtuką “Atnešk nuotrauką” ant kurio paspaudus vartotojui atvaizduojama atsitiktinė šuns nuotrauka.
// Nuotraukos adresui gauti naudokite nemokamą API:
// https://dog.ceo/dog-api/

// let button = document.querySelector('.fetchDog');
// let image = document.querySelector('.image-container-dog');
// button.onclick = () => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(receive => receive.json())
//     .then(receive => {
//         console.log(receive)
//         image.innerHTML = `<img src="${receive.message}" alt="">`
//     })
// }

document.querySelector('.fetchDog').onclick = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(receive => receive.json())
        .then(receive => {
            console.log(receive)
            document.querySelector('.image-container-dog').innerHTML = `<img src="${receive.message}" alt="">`;
        })
}

// Pasinaudodami nemokamu API https://randomfox.ca/ sukurkite aplikaciją kuri atvaizduotų atsitiktinės lapės nuotrauką. 
// Po ja pavaizduokite mygtuką “Atnaujinti” ant kurio paspaudus būtų gaunama vis nauja nuotrauka.


document.querySelector('.fetchFox').onclick = () => {
    fetch("https://randomfox.ca/images/98.jpg")
        .then(receive => receive.json())
        .then(receive => {
            console.log(receive)
            document.querySelector('.image-container-fox').innerHTML = `<img src="${receive.message}" alt="">`;
        })
}

// Pasinaudodami API adresu: https://api.coindesk.com/v1/bpi/currentprice.json paimkite JSON turinį. 
// Jame rasite Bitcoin valiutos kainą realiu laiku dolerio, euro bei svaro atžvilgiu. Atvaizduokite kainas naršyklėje. 

