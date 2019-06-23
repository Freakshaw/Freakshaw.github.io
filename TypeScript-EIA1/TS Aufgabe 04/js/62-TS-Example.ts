// BEISPIEL UND AUFGABE:
// Dieses Skript soll als Beispiel dazu dienen, wie Interfaces und Arrays genutzt werden können.
// Hier wird ein ungefährer Aufbau eines simplen Klick-Spiels gezeigt. Der Nutzer kann dabei durch Button ein neues Monster erstellen.
// Zu beginn werden hier zuerst Interfaces, danach Variablen deklariert.
// Weiter unten kommen dann die Funktionen.

// EINGEBAUTE FEHLER: Innerhalb jedes Programmteiles wurden ein paar fiese Fehler eingebaut!
// Diese werden vermutlich erst in der Browser-Konsole angezeigt. 
// Testet also alle Funktionen, jeden Button welchen ihr finden könnt!
// Hilfe: Benutzt auf Verdacht ein Konsolen-Log oder ruft die Variable in der Konsole des Browsers auf.
// Hilfe2: Betrachtet den umliegenden Code. Trackt die Werte von Variablen, falls euch etwas komisch vorkommt!

// ------- interfaces --------- //
// INSGESAMT EINGEBAUTE FEHLER beu den interfaces: Keine. (0 / null)

// Monster sind vielfältig und können sehr unterschiedlich sein. Dennoch werden sie durch allgemeine Attribute, wie Name und Lebenspunkte, vereint.
// Deshalb wird hier ein interface genutzt!
// Ein interface erlaubt das erstellen von einem ungefährem Haupt-Objekt.
// Object = Komplexer Datentyp auf Grundlage primitiver Datentypen

interface Monster {
    monsterName: string; // Name des Monsters
    monsterHealthPoints: number; // Lebenspunkte
    monsterExperience: number; // Erfahrungspunkte bei besiegen des Monsters
    monsterModifier: string[]; // Monster-Verstärker. Diese sind in diesem Fall nur Text! (Da hier einfacher Zufall für die Auswahl genutzt wird, kann der gleiche Eintrag auch doppelt vorkommen)
    monsterAttack: number; // Angriffskraft des Monsters
    monsterAge: number; // Alter des Monsters
    monsterLevel: number;
}


// ------- Variablen -------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer)

let monsterHolder: string = "monsterHoldingCell";                                  // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let monsterExperience: number = 0;
let playerName: string = "Antony";                                            // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP: number = 1;                                                          // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel: number = 700;                                                // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.
let playerLevel : number = 1;

// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix: string[] = ["Asozialer ", "Heftiger ", "Komischer ", "Verstörter ", "Zerstörender ", "Elite-Mecha-"]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName: string[] = ["Schleim", "Ork", "Mensch", "Opfer", "Godzilla", "Doomnomitron"]; // length = 3, da 3 Einträge. Von 0-2.
let suffix: string[] = [", Vernichter der Welten", ", der Große", ", der Hässliche", ", der Grausame", ", Ultimativer Zerstörer aller Universen", ", der Herrscher sämtlicher Realitäten"]; // length = 6, da hier 6 Einträge sind. Von 0-5.
let img: string[] = ["alien.png", "loewe.png", "elefant.png", "tod.png", "dino.png", "dinokonda.png", "oktopus.png", "pinguin.png"];
let monsterModifers: string[] = ["Ist nervig", "Linkshänder", "Bier-Connoisseur", "Verfehlt häufig", "Prokrastiniert", "Müde", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.

// -- Initialisierung für viele/variable Anzahl an Monster --
let monsterArray: Monster[] = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.


// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf) 

// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("KillAll").addEventListener("click", KillAll);
    document.getElementById("KillWeak").addEventListener("click", KillWeak);
    document.getElementById("KillWeakest").addEventListener("click", KillWeakest);
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    console.log(document.getElementById("monsterSpawner").innerHTML);
    updatePlayerLevel(); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
}




// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster() {
    let Mons: number = getRNGNumber(3) + 1;

    for (let i: number = 0; i < Mons; i++) {
        let newMonsterName: string = generateMonsterName();                // Eigens-gebaute Funktion, welche einen string zurück gibt.
        let newMonsterHP: number = generateMonsterHitPoints();             // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterXP: number = generateMonsterXP();                    // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterModifier: string[] = generateMonsterModifer();       // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
        let newMonsterAttack: number = generateMonsterAttack();
        let newMonsterAge: number = generateMonsterAge();
        let newMonsterLevel: number = generateMonsterLevel();

        let newMonster: Monster = {                                        // Monster wird erstellt.
            monsterName: newMonsterName,
            monsterHealthPoints: newMonsterHP,
            monsterExperience: newMonsterXP,
            monsterModifier: newMonsterModifier,
            monsterAttack: newMonsterAttack,
            monsterAge: newMonsterAge,
            monsterLevel: newMonsterLevel,
        };

        monsterArray.push(newMonster);                                      // Monster wird erst in diesem Schritt zu dem Array hinzugefügt 

        console.log(monsterArray[0].monsterExperience);                    // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).
    }
    updateHTML();                                                                                   // Triggere die Generierung von HTML
}

function updateHTML() {
    clearMonsterCell();
    monsterGenerateHTMLAll();
    console.log(getMonsterCount() + " Monster greifen an.");
}

function getMonsterCount(): number {
    return monsterArray.length;
}

function monsterGenerateHTMLAll() {
    for (let i: number = 0; i < getMonsterCount(); i++) {
        monsterGenerateHTML(i);
    }
}

function clearMonsterCell() {
    let GoAway: HTMLElement = document.getElementById(monsterHolder);
    while (GoAway.firstChild) {
        GoAway.removeChild(GoAway.firstChild);
    }
}
// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML(i: number) {
    let holdingDiv: HTMLElement = document.createElement("div");       // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + i);     // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster");                        // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv);     // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"

    let monsterName: HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterName.innerHTML = monsterArray[i].monsterName;                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterLevel : HTMLElement = document.createElement("p");
    monsterLevel.innerHTML = "Level " + monsterArray[i].monsterLevel;
    holdingDiv.appendChild(monsterLevel);

    let monsterMod: HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[i].monsterModifier[0] + ", " + monsterArray[i].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterAttack: HTMLElement = document.createElement("p");
    monsterAttack.innerHTML = "Angriffskraft: " + monsterArray[i].monsterAttack;
    holdingDiv.appendChild(monsterAttack);

    let monsterAge: HTMLElement = document.createElement("p");
    monsterAge.innerHTML = "Alter: " + monsterArray[i].monsterAge;
    holdingDiv.appendChild(monsterAge); 

    let monsterImg: HTMLElement = document.createElement("img");       // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", "imgs/" + img[getRNGNumber(img.length)]);      // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "WÄÄÄÄH!");            // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg);                                 // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)

    let monsterBtn: HTMLElement = document.createElement("BUTTON");    // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!";                        // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn);                                 // Füge den Button zu dem holding-div hinzu.

    let monsterCount: number = i;                     

    monsterBtn.addEventListener(                                        // Füge dem Monster eine Funktion hinzu.
        "click", function () {                                           // Wird bei Maus-Click ausgelöst.
            fightMonster(monsterCount);                                 // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false);                                                      // Ignoriert das false.
}


// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber: number): number {
    let rngNumber: number = Math.random();                             // Macht folgendes: Generiere eine zufällige Komma-Zahl zwischen 0 - 1.
    rngNumber = rngNumber * _maxNumber;                                 // Multipliziere diese Zahl mit der Länge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
    rngNumber = Math.floor(rngNumber);                                  // Floore diese Zahl, damit diese nun Ganzzahlig ist.
    return rngNumber;                                                   // Gebe diese Zahl zurück, Funktion kann ähnlich einer Variable in Rechnungen genutzt werden.
}


// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName(): string {
    let generatedMonsterName: string = ""; // Erstelle einen leeren String für das Monster

    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber: number = getRNGNumber(prefix.length);               // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber];                           // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                       // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber];                             // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                            // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber];                          // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    return generatedMonsterName;
}


// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterHitPoints(): number {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterHP: number = 1 + getRNGNumber(10);
    return tempMonsterHP;
}


// Wird für die Erstellung der Monster-Erfahrungspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterXP(): number {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP: number = 100 + getRNGNumber(350);
    return tempMonsterXP;
}


// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer(): string[] {
    let tempMonsterMod: string[] = [];                                         // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod;                                                      // Gebe das hier zusammengesetzte Array wieder zurück.
}

function generateMonsterImage(): string {
    let tempMonsterImg: string = img[getRNGNumber(img.length)];                 // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    return tempMonsterImg;                                                      // Gebe das hier zusammengesetzte Array wieder zurück.
}

function generateMonsterAttack(): number {
    let tempMonsterAtt: number = 50 + getRNGNumber(400);
    return tempMonsterAtt;
}

function generateMonsterAge(): number {
    let tempMonsterAge: number = getRNGNumber(999);
    return tempMonsterAge;
}

function generateMonsterLevel() : number
{
    let tempMonsterLevel: number = getRNGNumber(10);
    return tempMonsterLevel; 
}


// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(i: number)
{
    if ( playerLevel >= monsterArray[i-1].monsterLevel)
    {
        playerXP += monsterArray[i-1].monsterExperience;
        monsterArray.splice(i-1, 1);
        console.log("YAY, you won...");       
        updateHTML();
        updatePlayerLevel();
    }
    else if(playerLevel > 0)
    {
        (playerXP -= monsterArray[i-1].monsterExperience);
        updatePlayerLevel()
        window.alert("Wow, pretty bad...");              
    }                       
    updatePlayerLevel();
    updateHTML();
}

function KillAll() {
    for (let i = monsterArray.length ; i > 0; i--) {
        fightMonster(i);
    }
}


function KillWeak() {
    for (let i = monsterArray.length; i > 0; i--) {
        if (playerLevel >= monsterArray[i - 1].monsterLevel) {
            fightMonster(i);
        }
    }
}

function KillWeakest(){
    let tempWeakest: number = monsterArray.length;
    for (let i: number = monsterArray.length; i > 0; i--){
        if (monsterArray[tempWeakest -1].monsterLevel > monsterArray[i - 1].monsterLevel)
        tempWeakest = i;}
        fightMonster(tempWeakest);
    }
 
// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel()
{
    if (playerLevel < 0)
    playerLevel = 0
    if (playerXP < 0)
    {window.alert("Kekko, it's over...")
    location.reload();
}
    if (playerLevel == 20) {
        window.alert("Real hero here, comin' thru'")
        location.reload();
    }

    playerLevel = Math.floor(playerXP / playerXPperLevel) +1;                                                                           // Spieler-Level = XP / XPproLevel
    let extendedXP: number = playerXPperLevel * playerLevel;

    document.getElementById("xpCounter").innerHTML = "Player-Level: " + playerLevel + " (XP: " + playerXP + " / " + extendedXP + ")";       // Baue den String für die Spieler-Info zusammen
    console.log("Player " + playerName + " is now lvl. " + playerLevel +".");        // Spieler-Level in der Konsole.
    return playerLevel
}
