let points = document.getElementById("points");
let plusTxt = document.getElementById("plus");
let btnPlus = document.getElementById("btnPlus");
let objExpand = document.getElementById("divExpand");

console.log(btnPlus);

function expand() {

    if (points.style.display === "none") {

        points.style.display = "inline";
        btnPlus.innerHTML = "Voir plus...";
        plusTxt.style.visibility = "hidden";
        gsap.to("#divExpand", { duration: 0.2, height: objExpand.offsetHeight - 324 })
        btnPlus.remove();
        points.append(btnPlus);
    }
    else {

        points.style.display = "none";
        btnPlus.innerHTML = "Voir moins...";
        plusTxt.style.visibility = "visible";
        gsap.from("#plus", { duration: 1, opacity: 0 });
        gsap.to("#divExpand", { height: objExpand.offsetHeight + 324 })
        gsap.to("#btnPlus", { y: btnPlus.top + 324 })
        btnPlus.remove();
        plusTxt.append(btnPlus);
    }
}