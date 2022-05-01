cislo1 = 4;
cislo2 = 2;

vypocitaj(cislo1, cislo2);
document.write("<br>");
vypocitaj(10, 5);


function vypocitaj(cislo1, cislo2) {
    document.write("Prvé číslo: " + cislo1);
    document.write("<br>Druhé číslo: " + cislo2 + "<br>");
    document.write("<br>Vykonávam matematické operácie:<br>");

    if (cislo2 == 0){
        document.write("<br>Delit nulou nejde!");
    } else {
        podiel = cislo1 / cislo2;
        document.write("<br>" + cislo1 + " / " + cislo2 + " = " + podiel);
    }
    
    rozdiel = cislo1 - cislo2;
    sucin = cislo1 * cislo2;
    sucet = cislo1 + cislo2;

    document.write("<br>" + cislo1 + " + " + cislo2 + " = " + sucet);
    document.write("<br>" + cislo1 + " * " + cislo2 + " = " + sucin);
    document.write("<br>" + cislo1 + " - " + cislo2 + " = " + rozdiel + "<br>");
}
