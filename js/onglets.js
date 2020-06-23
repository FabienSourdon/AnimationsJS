let tabArticles =
    [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
    ];
let onglets = document.getElementsByClassName("ong");
let contenu = document.getElementById("contenu");

console.log();


for (let i = 0; i < onglets.length; i++) {
    onglets[i].addEventListener('click', function (e) {
        if (e.target.value === "onglet1") {
            console.log(contenu.innerHTML)
            if (contenu.innerHTML == 0) {
                let article1 = document.createElement('p');
                article1.id = "art";
                article1.innerHTML = tabArticles[0];
                contenu.appendChild(article1);
            }
            else {
                let rmvArt = document.getElementById("art");
                rmvArt.remove();
                let article1 = document.createElement('p');
                article1.id = "art";
                article1.innerHTML = tabArticles[0];
                contenu.appendChild(article1);
            }
        }
        else if (e.target.value === "onglet2") {
            if (contenu.innerHTML == 0) {
                let article2 = document.createElement('p');
                article2.id = "art";
                article2.innerHTML = tabArticles[1];
                contenu.appendChild(article2);
            }
            else {
                let rmvArt = document.getElementById("art");
                rmvArt.remove();
                let article2 = document.createElement('p');
                article2.id = "art";
                article2.innerHTML = tabArticles[1];
                contenu.appendChild(article2);
            }

        }
        else if (e.target.value === "onglet3") {
            console.log("c'est l'onglet 3")
            if (contenu.innerHTML == 0) {
                let article3 = document.createElement('p');
                article3.id = "art";
                article3.innerHTML = tabArticles[2];
                contenu.appendChild(article3);
            }
            else {
                let rmvArt = document.getElementById("art");
                rmvArt.remove();
                let article3 = document.createElement('p');
                article3.id = "art";
                article3.innerHTML = tabArticles[2];
                contenu.appendChild(article3);
            }
        }
    })
}
