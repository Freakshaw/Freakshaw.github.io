console.log("Dieser Test ist nur für Testzwecke bestimmt"); // 1. Konsolenausgabe
// Variablen
var a = "Jägi";
var b = "Voddes";
var c = "Whiskey";
var d = "Rum";
var e = "LELELELELELELELELEL";
var Zeit = new Date().getHours();
var x = 15;
var y = 12;
var z = 18;
//Funktionen
window.onload = function () {
    console.log("SKREEEEEEE");
    document.getElementById("Info").addEventListener("click", DoThings);
    document.getElementById("Info").addEventListener("click", function () {
        document.getElementById("Artikel 2").innerHTML = "Die Gründung erfolgte im Jahr 1766 durch James Christie. Die erste Auktion führte der Gründer am 5. Dezember 1766 durch. Er arbeitete für die Aristokratie und für die königliche Familie. Im 18. und 19. Jahrhundert stand das Auktionshaus unter anderem in Verbindung mit Katharina II. und verkaufte ihr die Gemäldesammlung Robert Walpoles, die einen wichtigen Beitrag für die Eremitage in Sankt Petersburg bedeutete. Heute operiert Christie’s weltweit und hat einen jährlichen Umsatz von 6,3 Milliarden US-Dollar (2007). Die wichtigsten Auktionsorte sind London, New York, Paris und Hongkong. In letzter Zeit verkaufte Christie’s unter anderem Werke und persönlichen Besitz von Pablo Picasso, Rembrandt, Leonardo da Vinci, Vincent van Gogh und Napoleon Bonaparte. Eigentümer von Christie’s ist die Groupe Artémis, die dem französischen Milliardär François Pinault gehört und zu der zahlreiche Unternehmen und Marken aus dem Luxusgüterbereich gehören: Gucci, Puma, Ponant, Château Latour. 2008 wurde aufgrund von Wertverlusten von Pinaults Beteiligungen über einen Verkauf von Christie’s spekuliert, laut einem Artikel der „Times“ vom Ende Dezember 2008 waren mehrere Investorengruppen an einem Kauf interessiert.[3] 2009 beschäftigte das Unternehmen 1900 Mitarbeiter weltweit.[4] Am 1. Januar 2017 wurde Guillaume Cerutti Chief Executive Officer von Christie’s, auf Empfehlung von Patricia Barbizet und der Familie Pinault. Herr Pinault übernahm die Rolle des Vorsitzenden des Vorstands und Mme. Barbizet wurde zum stellvertretenden Vorsitzenden bestellt.[5] Die Französin Madame Patricia Barbizet wurde im Jahr 2014 zum CEO des Unternehmens ernannt, und wurde damit der erste weibliche Geschäftsleiter von Christie.[6] Christie bietet rund 350 Auktionen jährlich in mehr als 80 Kategorien, darunter alle Bereiche der bildenden und angewandten Kunst, Schmuck, Fotografien, Sammlerstücke, Wein und vieles mehr. Christie hat auch eine lange und erfolgreiche Geschichte in der Leitung privater Verkäufe für Kunden in allen Kategorien, mit Schwerpunkt auf Nachkriegs- und Zeitgenössische Kunst, Impressionistische und Moderne Kunst, Alte Meister und Schmuck. Christie hat eine globale Präsenz mit 54 Büros in 32 Ländern und 12 Verkaufsräumen auf der ganzen Welt einschließlich in London, New York, Paris, Genf, Mailand, Amsterdam, Dubai, Zürich, Hong Kong, Shanghai und Mumbai. In letzter Zeit hat Christie den Markt Initiative in Wachstumsmärkten wie Russland, China, Indien und den Vereinigten Arabischen Emiraten geführt, mit erfolgreichen Vertrieb und Ausstellungen in Peking, Mumbai und Dubai.[7]";
    });
    document.getElementById("MoreInfo").addEventListener("click", MoreInfo);
    document.getElementById("Wichtig").addEventListener("click", Schnappes);
    document.getElementById("Letzte Mitteilung").addEventListener("click", Mitteilung);
}; // Load-Funktionen
function DoThings() {
    console.log("executed thingy");
}
function MoreInfo() {
    document.getElementById("Artikel 3").innerHTML = "1989 ersteigerte das J. Paul Getty Museum das Portrait of a Halberdier von Jacopo da Pontormo für 35,2 Mio. US$.[8] Das Bild galt lange Zeit als das am teuersten verkaufte Gemälde eines der Alten Meister, bis im Juli 2002 Rubens Kindermord von Betlehem für rund 76,7 Mio. US$ versteigert wurde. 2005 erreichte die Fotografie Untitled (Cowboy) von Richard Prince bei Christie’s New York den Rekordpreis von über 1 Million US$, und erzielte damit den bis dato höchsten Preis für ein einziges Foto. 2006 wurde bei Christie’s in Hongkong eine Porzellanschüssel aus der Zeit der Qing-Dynastie für 22,24 Mio. US$ versteigert. Ebenfalls 2006 wurde bei Christie’s eine Violine Stradivaris für 3,544 Mio. US$ versteigert, was zu der Zeit der höchste Preis für ein Musikinstrument war. Am 8. November 2006 wurden vier Bilder von Gustav Klimt in New York für 192 Mio. US$ versteigert. Das Gemälde Adele Bloch-Bauer II erzielte 87,936 Mio. US$ und damit den fünfthöchsten Preis, der jemals für ein Gemälde bezahlt wurde. Apfelbaum I erzielte 40,336 Mio. US$, Buchenwald/Birkenwald 33,056 Mio. US$, Häuser in Unterach am Attersee 31,376 Mio. US$. Die Käufer blieben anonym. Das Seerosenbild Le Bassin Aux Nymphéas von Claude Monet wurde 2008 für 80,4 Mio. US$ versteigert, der höchste Preis der jemals für ein Werk Monets erzielt wurde.  Das Ölgemälde Nackte, grüne Blätter und Büste von Pablo Picasso wurde durch das telefonische Gebot eines unbekannten Bieters am 4. Mai 2010 bei Christie’s in New York für 106,5 Mio. US$ versteigert.";
    console.log("Ausgeführt");
}
function Schnappes() {
    console.log("Rechne");
    if (Zeit < 10) {
        console.log(x + a + "," + "kleiner" + b);
    }
    else if (Zeit < 15) {
        console.log(y + b + "," + "kleiner" + a);
    }
    else {
        console.log(x + z + c + "," + "großer" + d + "," + "kleiner" + b);
    }
    console.log("Guten Durst!");
}
function Mitteilung() {
    return document.getElementById("Artikel 4").innerHTML = e = "Hier ist nichts mehr...";
}
//# sourceMappingURL=script.js.map