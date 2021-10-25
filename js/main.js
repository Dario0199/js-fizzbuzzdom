const box = document.querySelector('.box');

for (let i = 1; i <= 100; i++){
    box.innerHTML += `<div class= "number number-${i}">${i}</div>`;
}

if(box % 3 == 0) {
    document.box.style.backgrundColor = 'green'

}