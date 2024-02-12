function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateMultiArray(stop) {
    let limit = rand(10, 20);
    const array = [];
    
    for(let i = 0; i < limit; i++) {
        if(i === limit - 1){
            if(stop > 0)
                array[i] = generateMultiArray(stop - 1);
        } else {
            array[i] = rand(0, 10);
        }
    }
    return array;
}

console.log(generateMultiArray(2));


// Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų 
// masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.                    1↓




// Sukurkite masyvą iš 10 elementų. Masyvo reikšmes užpildykite pagal taisyklę:
// generuokite skaičių nuo 0 iki 5. Ir sukurkite tokio ilgio masyvą.
// Jeigu reikšmė yra 0 masyvo nekurkite. 
// Antro lygio masyvo reikšmes užpildykite atsitiktiniais skaičiais
// nuo 0 iki 10. Ten kur masyvo nekūrėte reikšmę nuo 0 iki 10
// įrašykite tiesiogiai.                                                5↓

const array = [];

for(let i = 0; i < 10; i++) {
    let numbers = rand(0, 5)

    if(numbers === 0) {
        array[i] = numbers
    } else {
        array[i] = []
        for (let x = 0; x < numbers; x++) {
            numbers = rand(0, 10)
            array[i].push(numbers)
        }
    }
}
console.log(array);



const arrayone = [];

for (let i = 0; i < 10; i++) {
    let numbers = rand(0, 5);
    if (numbers === 0) {
        arrayone[i] = numbers;
    } else {
        arrayone[i] = [];
        let sum = 0;
        for (let x = 0; x < numbers; x++) {
            let randomNumber = rand(0, 10);
            arrayone[i].push(randomNumber);
            sum += randomNumber;
        }
        arrayone[i].sum = sum;
    }
}
console.log(arrayone)