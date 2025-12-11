// 1. Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).
console.log('--------------------1-----------------------');
let knygynas = {
    pavadinimas: "Knygų pasaulis",
    adresas: "Vilniaus g. 12, Vilnius",
    plotas: 250,
    knyguKiekis: 12000,
    darboValandos: 8,
    atidarytas: true
};

console.log(knygynas);
console.log();

for (let key in knygynas) {
    if ((typeof knygynas[key] != 'string') && (typeof knygynas[key] != 'boolean')) {
        console.log(key, ':', knygynas[key]);
    }
}

console.log();

//  2. Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius. Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir išveskite jo vardą su pavarde.
console.log('--------------------2-----------------------');

let suma1 = 0, suma2 = 0, vid1, vid2;

let studentas1 = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    studijuPrograma: "Informatika",
    pazymiai: [9, 8, 10, 7]
};

for (let pazymiai of studentas1.pazymiai) {
    suma1 += pazymiai;
}
vid1 = (suma1 / studentas1.pazymiai.length).toFixed(2);
console.log(studentas1);
console.log();
console.log('Studentas1 pazymiu vidurkis: ', vid1);
console.log();

let studentas2 = {
    vardas: "Eglė",
    pavarde: "Eglėnaitė",
    studijuPrograma: "Bioinformatika",
    pazymiai: [10, 9, 8, 10]
};

for (let pazymiai of studentas2.pazymiai) {
    suma2 += pazymiai;
}
vid2 = (suma2 / studentas2.pazymiai.length).toFixed(2);

console.log(studentas2);
console.log();
console.log('Studentas2 pazymiu vidurkis: ', vid2);
console.log();


if (vid1 > vid2) {
    console.log('Studentas1 pazymiu vidurkis yra didesnis.');
}
else if (vid1 < vid2) {
    console.log('Studentas2 pazymiu vidurkis yra didesnis.');
}
else { console.log('Abieju studentu pazymiu vidurkis yra vienodas.'); }