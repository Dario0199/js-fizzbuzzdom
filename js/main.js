const box = document.querySelector('.box')

for(let i = 1; i <= 100; i++){

    let element = '';

    if(i % 3 == 0 && i % 5 == 0){
        element = '<div class="number bg-red">fizzbuzz</div>';
    } else if (i % 3 == 0){
        element = '<div class="number bg-green">fizz</div>';
    } else if (i % 5 == 0){
        element = '<div class="number bg-yellow">buzz</div>';
    } else {
        element = `<div class="number">${i}</div>`;
    }

    box.innerHTML += element;
}