var rows = 5;
var columns = 5;
var turns = 0;
let selectedTile = null;

window.onload = function () {
    let pieces = [];
    for (let i = 1; i <= rows * columns - 1; i++) {
        pieces.push(i.toString());
    }
    pieces.push("blank"); // dernière case vide

    // Mélange
    for (let i = pieces.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }

    // Création des tuiles
    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        let value = pieces[i];

        tile.src = value === "blank" ? "./Puzzle/blank.png" : `./Puzzle3/${value}.png`;
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
        // Échange
        let tempSrc = this.src;
        let tempVal = this.dataset.value;

        this.src = selectedTile.src;
        this.dataset.value = selectedTile.dataset.value;

        selectedTile.src = tempSrc;
        selectedTile.dataset.value = tempVal;

        turns++;
        document.getElementById("turns").innerText = turns;

    
        if (checkVictory()) {
            showVictoryMessage(turns);
        }
    }

    selectedTile.style.border = "1px solid #ccc";
    selectedTile = null;
}

function checkVictory() {
    const tiles = document.querySelectorAll("#board img");
    for (let i = 0; i < tiles.length - 1; i++) {
        if (tiles[i].dataset.value !== (i + 1).toString()) {
            return false;
        }
    }
    return tiles[tiles.length - 1].dataset.value === "blank";
}

function showVictoryMessage(turns) {
    const message = document.getElementById("victory-message");
    message.style.display = "block";
    message.innerText = `Bravo ! Tu viens de reconstituer une scène inspirée de l’univers de Billie Holiday. Une voix douce mais indomptable, capable de faire trembler un pays avec une chanson. Avec “Strange Fruit”, elle a transformé la douleur en mélodie, et la mélodie en mémoire collective. Le jazz, dans sa bouche, n’était pas qu’un art : c’était une preuve, une plainte, un cri contre l’injustice. Un chant fragile, mais impossible à faire taire.` ;
}
