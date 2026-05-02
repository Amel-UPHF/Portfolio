let scoreJoueur = 0;
let scoreBot = 0;

function play(choice) {
    let options = ["pierre", "feuille", "ciseaux"];
    let bot = options[Math.floor(Math.random() * 3)];
    let resultat = "";

    if (choice === bot) {
        resultat = "Égalité";
    } else if (
        (choice === "pierre" && bot === "ciseaux") ||
        (choice === "feuille" && bot === "pierre") ||
        (choice === "ciseaux" && bot === "feuille")
    ) {
        resultat = "Gagné";
        scoreJoueur++;
    } else {
        resultat = "Perdu";
        scoreBot++;
    }

    document.getElementById("player-choice").innerText = "Ton choix : " + choice;
    document.getElementById("bot-choice").innerText = "Choix du bot : " + bot;
    document.getElementById("result").innerText = "Résultat : " + resultat;
    document.getElementById("score").innerText = "Score : " + scoreJoueur + " - " + scoreBot;

    document.getElementById("result").style.color =
        resultat === "Gagné" ? "green" :
            resultat === "Perdu" ? "red" : "gray";
}

function resetScore() {
    scoreJoueur = 0;
    scoreBot = 0;
    document.getElementById("result").innerText = "Score réinitialisé!";
    document.getElementById("result").style.color = "white";
    document.getElementById("score").innerText = "Score : " + scoreJoueur + " - " + scoreBot;
}

function scrollToGame() {
    document.querySelector('.game').scrollIntoView({ behavior: 'smooth' });
}