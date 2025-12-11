// 1. Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų žinoma ši informacija: vardas ir pavardė, amžius, pažymiai, studijų programa, kursas. Kiekvieną studentą išveskite taip: pirmoje eilutėje visi studento duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai, trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. Išvedus visus studentus dėkite brūkšnį (pvz.: -----) ir išveskite bendrą visų studentų pažymių vidurkį.
console.log('------------------1--------------');


let studentai = [
    {
        vardasPavarde: "Jonas Jonaitis",
        amzius: 21,
        pazymiai: [8, 7, 9, 10, 6],
        studijuPrograma: "Programų sistemos",
        kursas: 2
    },
    {
        vardasPavarde: "Aiste Petrauskaite",
        amzius: 20,
        pazymiai: [9, 9, 10, 8, 7],
        studijuPrograma: "Biomedicinos mokslai",
        kursas: 1
    },
    {
        vardasPavarde: "Matas Kazlauskas",
        amzius: 23,
        pazymiai: [6, 7, 5, 8, 9],
        studijuPrograma: "Informatika",
        kursas: 3
    }
];
console.log();

let vidVisu = 0;
for (let student of studentai) {

    let vienaLinija = [];
    for (let info in student) {
        if (info != 'pazymiai') {
            vienaLinija.push(`${info}: ${student[info]}`); //Sudedu vis informacija apie studenta i viena eilute isskyrus pazymiai
        }
    }

    let suma = 0, vid;
    for (let paz of student.pazymiai) {
        suma += paz;
    }
    vid = Number((suma / student.pazymiai.length).toFixed(2));//apskaiciuoju kiekvieno studento vidurki

    vidVisu += vid; //Susumuoju visu studentu vidurkius

    console.log(vienaLinija.join(', '));

    console.log(student.pazymiai);
    console.log('Pazymiu vidurkis: ', vid);
    console.log();
}


console.log('--------------------------------------------------------------------------');
console.log('Visu studentu vidurkis: ', (vidVisu / studentai.length).toFixed(2));
console.log();

// 2. Susikurkite parduotuvės objektą, kuriame būtų ši informacija: pavadinimas, adresas, darbuotojų kiekis, prekių objektų masyvas. Apie kiekvieną prekę parduotuvėje žinoma ši informacija: pavadinimas; kodas; kaina; savikaina; turimas kiekis. Išveskite parduotuvės bendrą informaciją, tuomet užrašą "prekės" ir atskirose eilutėse turimas prekes su kuria nors jų informacija (pvz.: pavadinimai, kainos ir turimi kiekiai). Galiausiai paskaičiuokite kiek iš viso parduotuvė turi visų prekių (sudėkite jų kiekius). Raskite ir išveskite kurios prekės turima daugiausiai, o kurios mažiausiai.
console.log('------------------2-----------------');

let parduotuve = {
    pavadinimas: "SuperPrekės",
    adresas: "Vilniaus g. 10, Vilnius",
    darbuotojuKiekis: 12,
    prekes: [
        {
            pavadinimas: "Pienas",
            kodas: "P001",
            kaina: 1.20,
            savikaina: 0.80,
            turimasKiekis: 50
        },
        {
            pavadinimas: "Duona",
            kodas: "D002",
            kaina: 0.90,
            savikaina: 0.50,
            turimasKiekis: 100
        },
        {
            pavadinimas: "Sultys",
            kodas: "S003",
            kaina: 2.50,
            savikaina: 1.70,
            turimasKiekis: 30
        }
    ]
};

let prekiuPavadinimai = [];
let kiekis = 0;
let maxkiekis = 0, maxpreke, minkiekis = 1000000000, minpreke;

for (let key in parduotuve) {

    if (key === 'prekes') {
        for (let prekes of parduotuve[key]) {
            prekiuPavadinimai.push(prekes.pavadinimas);

            kiekis += prekes.turimasKiekis;

            if(prekes.turimasKiekis > maxkiekis){
                maxkiekis = prekes.turimasKiekis;
                maxpreke = prekes.pavadinimas;
            }

            if(prekes.turimasKiekis < minkiekis){
                minkiekis = prekes.turimasKiekis;
                minpreke = prekes.pavadinimas;
            }
        }
    }
    else { console.log(`${key}: `, parduotuve[key]); }
}

console.log('Prekes: ', prekiuPavadinimai.join(', '));
console.log('Is viso prekiu parduotuve turi: ', kiekis);
console.log('Daugiausia kieki turi preke: ', maxpreke);
console.log('Maziausia kieki turi preke: ', minpreke);
