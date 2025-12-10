// 1. Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …
console.log('-----------1---------');
let masyvas1 = ['labas', 'ate', 'laba diena', 'viso gero'];

for (let i in masyvas1) {
    console.log(`${i} - ${masyvas1[i]}`);
}

console.log();

// 2. Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.
console.log('-----------2---------');
let masyvas2 = ['apples', 'bread', 'eggs', 'butter'];
console.log(`Pirkiniu skaicius: ${masyvas2.length}`);

for (let pirkinys of masyvas2) {
    console.log(`- ${pirkinys}`);
}
console.log();

// 3. Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.
console.log('-----------3---------');
let masyvas3 = [2, 5, 8, 10, 9, 7];
let vid1, suma1 = 0;

for (paz of masyvas3) {
    console.log(paz);
    suma1 += paz;
}

vid1 = Math.round(suma1 / masyvas3.length);
console.log(`Vidurkis: ${vid1}`);

console.log();

// 4. Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus per dieną kilometrus, kurie yra didesni nei 150.
console.log('-----------4---------');
let masyvas4 = [120, 169, 200, 150, 149];

for (let km of masyvas4) {
    if (km > 150) {
        console.log(km);
    }
}
console.log();

// 5.Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis. Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt arba .json tipo.
console.log('-----------5---------');
let masyvas5 = ['labas.txt', 'ate.cpp', 'hahaha.txt', 'tralala.json', 'opa.js'];

for (file of masyvas5) {
    if (file.endsWith('.txt') || file.endsWith('.json')) {
        console.log(file);
    }
}
console.log();

// 6. Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą.
console.log('-----------6---------');
let masyvas6 = ['BMW', 'Ford', 'Mercedes', 'Wolkswagen'];

for (let auto of masyvas6) {
    console.log(`${auto} - ${auto.length}`);
}

console.log();

// 7. Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.
console.log('-----------7---------');
let masyvas7 = [404, 406, 410, 411];

for (let code of masyvas7) {
    if (code == 404) {
        console.log(`${code} - page not found`);
    } else if (code == 406) {
        console.log(`${code} - As nezinau`);
    }
    else if (code == 410) {
        console.log(`${code} - LALALALALALA`);
    }
    else if (code == 41) {
        console.log(`${code} - BLAHBLAHBLAH`);
    }
    else { console.log(`${code} neegzistuoja`); }
}
console.log();

// 8. Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės užteks maždaug 11 dienų ir t.t.
console.log('-----------8---------');
let masyvas8 = [5, 10, 2, 50], kiekis;

for (let preke of masyvas8) {

    kiekis = Math.round(preke / 5);
    if (preke >= 5) { //Jeigu prekiu yra daugiau arba lygu 5, tai dienos bus nuo 1 ir daugiau, bet jeigu maziau uz 5 visada bus 0, todel dariau else, kad lyg parduotu per siandien arba dabar
        console.log(`${preke} vnt. prekių užteks maždaug ${kiekis} dienų parduoti`);
    }
    else console.log(`${preke} vnt. prekių parduosime per šiandien`);

}

console.log();

// 9. Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų pažymių kiekį.
console.log('-----------9---------');
let masyvas9 = [], neig = 0, vid2, suma2 = 0;
let randomEnd1 = Math.floor(Math.random() * 100 + 1);

for (let i = 0; i < randomEnd1; i++) {
    let randomNr = Math.floor(Math.random() * 10 + 1);
    masyvas9.push(randomNr);
}

for (let pazymiai of masyvas9) {

    if (pazymiai < 5) {
        neig++;
    }
    else { console.log(`Teigiamas pazymis: ${pazymiai}`); }

    suma2 += pazymiai;
}
vid2 = Math.round(suma2 / masyvas9.length);

console.log(`Neigiamu pazymiu kiekis: ${neig}`);
console.log(`Vidurkis: ${vid2}`);

console.log();

// 10. Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir nurodykite kuris studentas turi didesnį vidurkį.
console.log('-----------10---------');
let student1 = [5, 6, 7, 8, 10], student2 = [9, 8, 2, 4, 5];
let sum1 = 0, sum2 = 0, average1, average2;

for (score of student1) {
    sum1 += score;
}
average1 = sum1 / student1.length;
let roundedAverage1 = Number(average1.toFixed(2)); //Apvalinu iki dvieju skaiciu po kablelio
console.log(`Pirmo studento vidurkis: ${roundedAverage1}`);

for (score of student2) {
    sum2 += score;
}
average2 = sum2 / student2.length;
let roundedAverage2 = Number(average2.toFixed(2));
console.log(`Antro studento vidurkis: ${roundedAverage2}`);


//Ziuriu, kuris vidurkis yra didesnis
if (roundedAverage1 > roundedAverage2) {
    console.log('Pirmo studento vidurkis yra didesnis.');
}
else if (roundedAverage1 < roundedAverage2) {
    console.log('Antro studento vidurkis yra didesnis.');
}
else { console.log('Abieju studentu vidurkis vienodas') };

console.log();

// 11. Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.
console.log('-----------11---------');
let masyvas11 = ['labas', 'ate', 'lalalaaaaaaa', 'babababa', 'obuolys', 'javascript', 'hi'];
let masyvas12 = [];

console.log('Pradiniai duomenys: ');
for(let zodis of masyvas11){
    console.log(zodis);

    if(zodis.length < 5){
        masyvas12.push(zodis);
    }
}

console.log();
console.log('Atrinkti duomenys: ');
console.log(masyvas12);

console.log();







