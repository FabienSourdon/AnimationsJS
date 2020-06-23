let tabImg = [
    "./img/1.jpeg",
    "./img/2.png",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.png"
];

let imgOn = document.getElementById("imgActive");
let btnL = document.getElementById("btnG");
let btnR = document.getElementById("btnD");
let index = 0;

window.addEventListener('onload', updateImg());

btnL.addEventListener('click', function () {
    index--;
    if (index == -1) {
        index = tabImg.length - 1;
    }
    updateImg();
});

btnR.addEventListener('click', function () {
    index++;
    if (index == tabImg.length) {
        index = 0;
    }
    updateImg();
});

function updateImg() {
    imgOn.src = tabImg[index];
};
