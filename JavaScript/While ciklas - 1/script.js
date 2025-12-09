// 1. Išveskite visus skaičius nuo 1 iki 20.
console.log('---------1---------');
let i = 1;

while (i <= 20) {
    console.log(`${i}`);
    i++;
}

console.log();

// 2. Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus parašykite žodį „lyginis“, o prie kiekvieno nelyginio – „nelyginis“.
console.log('---------2---------');
let i2 = 1;

while (i2 <= 50) {
    if (i2 % 2 == 0) {
        console.log(`${i2} - lyginis`);
    }
    else if (i2 % 2 != 0) {
        console.log(`${i2} - nelyginis`);
    }

    i2++;
}

console.log();

// 3. Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3 išveskite tekstą „skaičius {skaičius} dalinasi iš 3“.
console.log('---------3---------');
let i3 = 25;

while (i3 <= 50) {
    if (i3 % 3 == 0) {
        console.log(`skaičius ${i3} dalinasi iš 3`);
    }
    else { console.log(`${i3}`); }
    i3++;
}

console.log();

// 4. Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi iš 3 ir iš 5.
console.log('---------4---------');
let i4 = 1;

while (i4 > 0) {
    if ((i4 % 3 == 0) && (i4 % 5 == 0)) {
        break;
    }
    console.log(`${i4}`);
    i4++;
}

console.log();

// 5. Iš skaičių nuo 1 iki 100, raskite visų lyginių skaičių sumą.
console.log('---------5---------');
let i5 = 1, suma = 0;

while (i5 <= 100) {
    if (i5 % 2 == 0) {
        suma += i5;
    }
    i5++;
}
console.log(`Suma visų lyginių skaičių: ${suma}`);
console.log();

// 6. Žemiau parodytą pavyzdį pakeiskite taip, kad toje pačioje eilutėje išvestų ne tik skaičių, bet ir jo kvadratą:
console.log('---------6---------');

let skaicius = 1;

while (skaicius < 5) {
    console.log(`${skaicius} - ${skaicius ** 2}`);
    skaicius++;
}

console.log();

// 7. Išveskite atsitiktinį kiekį atsitiktinių skaičių.
console.log('---------7---------');
let startNr = Math.floor(Math.random() * 40);
let endNr = Math.floor(Math.random() * 100);

console.log(`${startNr}, ${endNr}`);

while (startNr < endNr) {
    console.log(startNr);
    startNr++;
}

console.log();

// 8. Išveskite atsitiktinį kiekį atsitiktinių skaičių. Raskite šių skaičių sumą.
console.log('---------8---------');
let startNr2 = Math.floor(Math.random() * 20);
let endNr2 = Math.floor(Math.random() * 100);
console.log(startNr2, endNr2);
let suma2 = 0;

while (startNr2 < endNr2) {
    suma2 += startNr2;
    startNr2++;
}
console.log(`Suma: ${suma2}`);
console.log();

// 9. Sukurkite 3 kintamuosius skirtingų prekių kiekiui sekti. Kiekvienos ciklo iteracijos metu bus nupirkti skirtingi ir atsitiktiniai kiekiai šių prekių (gali būti ir nieko nenupirkta: Math.floor(Math.random() * 10) be + 1 dalies). Įsitikinkite, kad nebūtų nupirkta daugiau prekių nei turima inventoriuje. Pardavinėkite tol kol nieko neliks.
console.log('---------9---------');
let preke1 = 20, preke2 = 50, preke3 = 100;

while (preke1 > 0 || preke2 > 0 || preke3 > 0) {

    let bought1 = Math.floor(Math.random() * 10);
    let bought2 = Math.floor(Math.random() * 10);
    let bought3 = Math.floor(Math.random() * 10);

    // console.log(bought1, bought2, bought3);

    if (bought1 > preke1) {
        bought1 = preke1;
    }

    if (bought2 > preke2) {
        bought2 = preke2;
    }

    if (bought3 > preke3) {
        bought3 = preke3;
    }

    preke1 -= bought1;
    console.log(preke1);

    preke2 -= bought2;
    console.log(preke2);

    preke3 -= bought3;
    console.log(preke3);

    console.log();
}
console.log('Viskas išparduota.');

console.log();

// 10. (sudėtingesnė) Išvedinėkite visus skaičius nuo 1 iki kol rasite tokį, kuris yra pirminis.
console.log('---------10---------');
let p = 1;

while (p > 0){

    if(p < 2){
        console.log(p);
    } else {
        let q = 0;
        for(let i = 2; i < p; i++){
            if(p % i == 0){
                q++;
            }
        }

        if(q == 0){
            console.log(`Pirmas rastas pirminis skaicius: ${p}`);
            break;
        }
        else {console.log(p);}
    }
    p++;
}
console.log();


