// 1. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.
console.log('-----------1--------');
let masyvas1 = ['odontologija', 'taikomoji matematika', 'bioinformatika', 'programu sistemos'];

for (let i = 0; i < masyvas1.length; i++) {
    console.log(masyvas1[i]);
}

console.log();

// 2. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.
console.log('-----------2--------');
let masyvas2 = ['Lietuva', 'Anglija', 'Skotija', 'Ispanija'];

for (let i = 0; i < masyvas2.length; i++) {
    console.log(`Šalis: ${masyvas2[i]}`);
}
console.log();

// 3. Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).
console.log('-----------3--------');
let masyvas3 = ['Nina', 'Crawl', 'Coding', 'Labas-1'];

for (let i = 0; i < masyvas3.length; i++) {
    console.log(`${i + 1}. ${masyvas3[i]}`);
}

console.log();

// 4. Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.
console.log('-----------4--------');
let masyvas4 = [10, 2, 1, 0, 15, 6, 8];

for (let i = 0; i < masyvas4.length; i++) {
    if (masyvas4[i] > 5) {
        console.log(masyvas4[i]);
    }
}

console.log();

// 5. Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.
console.log('-----------5--------');
let masyvas5 = [], suma1 = 0;
let randomEnd1 = Math.floor(Math.random() * 100)

for (let i = 0; i < randomEnd1; i++) {

    let randomNr = Math.floor(Math.random() * 100);
    masyvas5.push(randomNr);

    if (randomNr % 4 == 0) {
        suma1 += randomNr;
    }
}

console.log(masyvas5);
console.log(`Skaiciu, kurie dalinasi is 4 suma: ${suma1}`);

console.log();

// 6. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.
console.log('-----------6--------');
let masyvas6 = [];
let randomEnd2 = Math.floor(Math.random() * 100), vid1, suma2 = 0;

for (let i = 0; i < randomEnd2; i++) {

    let randomNr = Math.floor(Math.random() * 10);
    masyvas6.push(randomNr);

    suma2 += randomNr;
}
vid1 = suma2 / masyvas6.length;
let vid1gal = Math.round(vid1);

console.log(masyvas6);
console.log(`Vidurkis: ${vid1gal}`);

console.log();

// 7. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.
console.log('-----------7--------');
let masyvas7 = [], vid2, suma3 = 0;
let randomEnd3 = Math.floor(Math.random() * 10);

for (let i = 0; i < randomEnd3; i++) {

    let randomNr = Math.floor(Math.random() * 10);
    masyvas7.push(randomNr);

    suma3 += randomNr;
}
vid2 = Math.round(suma3 / masyvas7.length);
console.log(`Vidurkis: ${vid2}`);

for (let i = 0; i < masyvas7.length; i++) {
    if (masyvas7[i] > vid2) {
        console.log(masyvas7[i]);
    }
}

console.log();

// 8. Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo kvadratą.
console.log('-----------8--------');
let masyvas8 = [];

for (let i = 0; i < 10; i++) {

    let randomNr = Math.floor(Math.random() * 100);
    masyvas8.push(randomNr);

    if (masyvas8[i] % 2 == 0) {
        console.log(masyvas8[i], masyvas8[i] ** 2);
    }
    else { console.log(masyvas8[i]) };
}

console.log();

// 9. Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.
console.log('---------9--------');
let masyvas9 = [];

for (let i = 0; i < 20; i++) {

    let randomNr = Math.floor(Math.random() * 10 + 1);
    masyvas9.push(randomNr);

    if (masyvas9[i] >= 5) {
        console.log(`Pazymis ${masyvas9[i]} yra teigiamas`);
    }
    else {

        let liko = 5 - masyvas9[i];
        console.log(`Pazymis ${masyvas9[i]} yra neigiamas, jam truksta ${liko} balu iki teigiamo.`)
    }
}

console.log();

// 10. Susikurkite žodžių masyvą ir užpildykite duomenimis. Išveskite visus žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas. Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai "medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).
console.log('---------10--------');
let masyvas10 = ['labas', 'ate', 'vardas', 'lalalala'];
let suma4 = 0;

for (let i = 0; i < masyvas10.length; i++) {
    console.log(masyvas10[i], masyvas10[i].length);

    suma4 += masyvas10[i].length;
}
console.log(`Suma visu raidziu: ${suma4}`);

console.log();

// 11. Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių, kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus atsakymus.
console.log('---------11--------');
let masyvas11 = [];
let suma5 = 0, vid3, p = 0;

for (let i = 0; i < 15; i++) {

    let randomNr = Math.floor(Math.random() * 100);
    masyvas11.push(randomNr);

    if (randomNr % 3 == 0) {
        suma5 += randomNr;
        p++;
    }
}
vid3 = Math.round(suma5 / p);

console.log(masyvas11);
console.log(`Skaiciu, kurie dalinasi is 3 suma = ${suma5} ir vidurkis = ${vid3}`);



