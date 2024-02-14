function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let auksinis = rand(0, 99);
console.log(auksinis);

document.querySelector('#lotto').onclick = (number) => {
    const skaicius = rand(0, 99);
    
    if (skaicius <= 19) {
        
        document.querySelector('.kamuoliukai').innerHTML += `<div style="background-color:black; color:white" class="kamuoliukas"> 
        ${skaicius}</div>`;

    } else if (skaicius > 20 && skaicius <= 39) {
        document.querySelector('.kamuoliukai').innerHTML += `<div style="background-color:yellow;" class="kamuoliukas">
        ${skaicius}</div>`;
        
    } else if (skaicius >= 40 && skaicius <= 59) {
        document.querySelector('.kamuoliukai').innerHTML += `<div style="background-color:red;" class="kamuoliukas">
        ${skaicius}</div>`;
        
    } else if (skaicius >= 60 && skaicius <= 79) {
        document.querySelector('.kamuoliukai').innerHTML += `<div style="background-color:blue;" class="kamuoliukas">
        ${skaicius}</div>`;
        
    } else {
        document.querySelector('.kamuoliukai').innerHTML += `<div style="background-color:green;" class="kamuoliukas">
        ${skaicius}</div>`;
    }
    
    if (skaicius === auksinis) {
        return alert("Skambutis!");
    }
}


