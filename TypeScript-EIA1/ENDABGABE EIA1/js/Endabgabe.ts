// <-----INTERFACE----->

interface Card {
    CardColor: String;
    CardValue: number;
}                                                                       //Karteninterface

// <-----VARIABLEN----->

let DrawingCards: Card[] = [];                                          //Stapel-Array
let PlayArea: Card[] = [];                                              //Spielkarten-Array
let EnemyHand: Card[] = [];                                             //Computerkarten-Array
let YourHand: Card[] = [];                                              //Spielerkarten-Array

// <-----FUNKTIONEN----->

window.onload = function () {
    document.getElementById("DrawingCards").addEventListener("click", BonusCard, false);
    Play();
}                                                                       //Funktion zum Start des Spiels bei Laden der Seite                               

function GenerateCards() {
    let Color: string;
    for (let i = 1; i <= 8; i++) {
        for (let c = 1; c <= 4; c++) {

            if (c == 1) {
                Color = "Blue"
            }

            if (c == 2) {
                Color = "Red"
            }

            if (c == 3) {
                Color = "Yellow"
            }

            if (c == 4) {
                Color = "Green"
            }

            let NewCard: Card = {
                CardColor: Color, CardValue: i
            }
            DrawingCards.push(NewCard);
        }
    }

    console.log(DrawingCards);
}                                                                       //Kartengenerierung

function shuffle(array: Card[]) {
    let currentIndex = array.length;
    let TempValue;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        TempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = TempValue;
    }
    return array;
}                                                                       //Funktion zum Mischen der Karten

function BonusCard() {
    if (CardCheck(YourHand) == false) {
        YourHand.push(DrawingCards[DrawingCards.length - 1]);
        DrawingCards.splice(DrawingCards.length - 1, 1);
        updateHTML("YourHand");
        updateHTML("DrawingCards");
    }
    if (CardCheck(YourHand) == false) {
        EnemyTurn();
    }
}                                                                       //Funktion zum Ziehen einer Karte

function CardCheck(array: Card[]): boolean {
    let rightCard: boolean = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].CardColor == PlayArea[PlayArea.length - 1].CardColor || array[i].CardValue == PlayArea[PlayArea.length - 1].CardValue) {
            rightCard = true;
            break;
        }
    }
    return rightCard;
}                                                                       //Check, ob eine Karte gespielt werden kann

function updateHTML(Target: string) {
    ClearHTML(Target);
    if (Target == "YourHand") {
        for (let i = 0; i < YourHand.length; i++) {
            CardHTML(YourHand[i], "YourHand", i);
        }
    }
    if (Target == "EnemyHand") {
        for (let i = 0; i < EnemyHand.length; i++) {
            UnknownCard(EnemyHand[i], "EnemyHand", i);
        }
    }
    if (Target == "PlayArea") {
        CardHTML(PlayArea[PlayArea.length - 1], "PlayArea", PlayArea.length - 1);
    }
    if (Target == "DrawingCards") {
        UnknownCard(DrawingCards[DrawingCards.length - 1], "DrawingCards", DrawingCards.length - 1);
    }
}

function ClearHTML(Target: string) {
    let Element: HTMLElement = document.getElementById(Target);
    while (Element.firstChild) {
        Element.removeChild(Element.firstChild);
    }
}

function CardHTML(Card: Card, Target: string, index: number) {
    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", "Card" + " " + Card.CardColor);
    document.getElementById(Target).appendChild(holdingDiv);

    let Number: HTMLElement = document.createElement("p");
    Number.setAttribute("class", "CardValue");
    Number.innerHTML = "" + Card.CardValue;
    holdingDiv.appendChild(Number);

    if (Target == "YourHand") {
        holdingDiv.addEventListener("click", function () { SetCard(Card, index) }, false);
    }
}

function UnknownCard(card: Card, Target: string, index: number) {
    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", "card" + "Unknown");
    document.getElementById(Target).appendChild(holdingDiv);

    let CardBack: HTMLElement = document.createElement("img");
    CardBack.setAttribute("src", "imgs/" + "BackgroundCard.jpg");
    holdingDiv.appendChild(CardBack);
}                                                                       //Funktion zum Verstecken der Karten

function SetCard(card: Card, index: number) {
    if (card.CardValue == PlayArea[PlayArea.length - 1].CardValue || card.CardColor == PlayArea[PlayArea.length - 1].CardColor) {
        PlayArea.push(card);
        YourHand.splice(index, 1);
        if (YourHand.length < 1) { WinOrLose(true); }
        updateHTML("YourHand");
        updateHTML("PlayArea");
        EnemyTurn();
    }
}                                                                       //Funktion, zum Spielen einer Karte

function EnemyTurn() {
    let i = 0;
    for (i; i < EnemyHand.length; i++) {
        if (EnemyHand[i].CardColor == PlayArea[PlayArea.length - 1].CardColor || EnemyHand[i].CardValue == PlayArea[PlayArea.length - 1].CardValue) {
            PlayArea.push(EnemyHand[i]);
            EnemyHand.splice(i, 1);
            if (EnemyHand.length < 1) { WinOrLose(false); }
            updateHTML("PlayArea");
            updateHTML("EnemyHand");
            break;
        }
    }
    if (i >= EnemyHand.length) {
        EnemyHand.push(DrawingCards[DrawingCards.length - 1]);
        DrawingCards.splice(DrawingCards.length - 1, 1);
        updateHTML("DrawingCards");
        updateHTML("EnemyHand");
        if (EnemyHand[EnemyHand.length - 1].CardColor == PlayArea[PlayArea.length - 1].CardColor || EnemyHand[EnemyHand.length - 1].CardValue == PlayArea[PlayArea.length - 1].CardValue) {
            PlayArea.push(EnemyHand[EnemyHand.length - 1]);
            EnemyHand.splice(EnemyHand.length - 1, 1);
            updateHTML("PlayArea");
            updateHTML("EnemyHand");
        }
    }
}                                                                       //Der Zug des Computers

function Play() {
    GenerateCards();
    DrawingCards = shuffle(DrawingCards);
    for (let i = 0; i < 5; i++) {
        YourHand.push(DrawingCards[i]);
        EnemyHand.push(DrawingCards[i + 5]);
    }

    PlayArea.push(DrawingCards[10]);
    DrawingCards.splice(0, 11);

    console.log(YourHand);
    console.log(EnemyHand);
    console.log(DrawingCards);

    for (let i = 0; i < YourHand.length; i++) {
        CardHTML(YourHand[i], "YourHand", i);
    }
    for (let i = 0; i < EnemyHand.length; i++) {
        UnknownCard(EnemyHand[i], "EnemyHand", i);
    }


    CardHTML(PlayArea[PlayArea.length - 1], "PlayArea", PlayArea.length - 1);
    UnknownCard(DrawingCards[DrawingCards.length - 1], "DrawingCards", DrawingCards.length - 1);
}                                                                       //Funktion für das eigentliche Spiel

function WinOrLose(win: boolean) {
    if (win) {
        alert("Winner! Congratulations, you just wasted a minute.");
        location.reload();
    }
    else {
        alert("Loser! Congratulations, you just SUPER wasted a minute.");
        location.reload();
    }
}                                                                       //Alerts für ein erfolgreich beendetes Spiel