let fullScr = document.getElementById("contFull");
let divImgs = document.querySelectorAll("#vignette");
let tabDiv = Array.from(divImgs);

for (let i = 0; i < tabDiv.length; i++) {

    tabDiv[i].addEventListener('click', function () {
        if (fullScr.innerHTML == 0) {
            let imgFull = document.createElement('div');
            imgFull.innerHTML = tabDiv[i].innerHTML;
            imgFull.id = "imgFull";
            fullScr.appendChild(imgFull);
        }
        else {
            let imgRepl = document.getElementById("imgFull");
            imgRepl.remove();
            let imgFull = document.createElement('div');
            imgFull.innerHTML = tabDiv[i].innerHTML;
            imgFull.id = "imgFull";
            fullScr.appendChild(imgFull);
        }
    });
}