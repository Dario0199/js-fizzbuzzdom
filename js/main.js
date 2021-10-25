const box = document.querySelector('.box');

for (let i = 1; i <= 100; i++){
    box.innerHTML += `<div class= "number number-${i}">${i}</div>`;

    if ( (i % 3 == 0) && (i % 5 == 0) ){
        box.innerHTML += `<div class= "number number-${i}">fizzbuzz</div>`;
    } else if(i % 3 == 0) {
        box.innerHTML += `<div class= "number number-${i} bg-green">fizz</div>`;
    } else if (i % 5 == 0){
        box.innerHTML += `<div class= "number number-${i}">buzz</div>`;
    }  else {
    }
}

