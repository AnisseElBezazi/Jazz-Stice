var rows = 5;
var columns = 5;
var turns = 0;
let selectedTile = null;

window.onload = function () {
    // Créer une liste des morceaux mélangés
    let pieces = [];
    for (let i = 1; i <= rows * columns - 1; i++) {
        pieces.push(i.toString());
    }
    pieces.push("blank"); // Dernière pièce vide

    // Mélange
    for (let i = pieces.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }

    // Création du plateau
    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        let value = pieces[i];

        tile.src = value === "blank" ? "./Puzzle/blank.png" : `./Puzzle/${value}.png`;
        tile.dataset.value = value;
        tile.style.width = "100px";
        tile.style.height = "100px";
        tile.style.border = "1px solid #ccc";
        tile.style.boxSizing = "border-box";

        tile.addEventListener("click", handleTileClick);

        document.getElementById("board").append(tile);
    }
};

function handleTileClick() {
    if (!selectedTile) {
        selectedTile = this;
        this.style.border = "2px solid red";
        return;
    }

    if (this === selectedTile) {
        this.style.border = "1px solid #ccc";
        selectedTile = null;
        return;
    }

    if (selectedTile.dataset.value === "blank" || this.dataset.value === "blank") {
        // Échange les src et les valeurs
        let tempSrc = this.src;
        let tempVal = this.dataset.value;

        this.src = selectedTile.src;
        this.dataset.value = selectedTile.dataset.value;

        selectedTile.src = tempSrc;
        selectedTile.dataset.value = tempVal;

        turns++;
        document.getElementById("turns").innerText = turns;
    }

    selectedTile.style.border = "1px solid #ccc";
    selectedTile = null;
}
