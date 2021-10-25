const box = document.querySelector('.box');

for (let i = 1; i <= 100; i++){
    box.innerHTML += `<div class= "number number-${i}">${i}</div>`;
}

if(i / 3 == 0) {
    i.style.backgrundColor = 'green'
}