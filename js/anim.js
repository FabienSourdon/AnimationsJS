function expand() {
    var points = document.getElementById("points");
    var plusTxt = document.getElementById("plus");
    var btnPlus = document.getElementById("btnPlus");
    var objExpand = document.getElementById("blocTxt");

    if (points.style.display === "none") {
        points.style.display = "flex";
        btnPlus.innerHTML = "Voir plus...";
        plusTxt.style.display = "none";
    }
    else {
        points.style.display = "none";
        btnPlus.innerHTML = "Voir moins...";
        plusTxt.style.display = "inline";
    }
}