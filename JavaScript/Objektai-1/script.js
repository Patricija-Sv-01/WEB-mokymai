// 1. Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, ūgis, kelintame kurse mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.
console.log('----------1---------');

let student = {
    vardas: 'Patricija',
    pavarde: 'Svencionyte',
    amzius: 19,
    studijuPrograma: 'Bioinformatika',
    kreditai: 16,
    pazymiai: [5, 2, 10, 9],
    ugis: 176.5,
    kursas: 1,
    mokykla: 'VU'
};

console.log(student);
console.log(student.vardas, '\n', student.studijuPrograma, '\n', student.mokykla);

console.log();

// 2. Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba panaudoti new Date(Date.now()).getFullYear() funkciją).
console.log('----------2---------');

let film = {
    pavadinimas: 'The Matrix',
    režisierius: 'Lana Wachowski & Lilly Wachowski',
    biudžetas: 63,
    uzdarbis: 466.6,
    žanras: 'Mokslinė fantastika, veiksmo',
    trukmė: '136 min.',
    išleidimoMetai: 1999,
    aktoriai: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Hugo Weaving', 'Joe Pantoliano']
};

console.log(film);
console.log(`Pelnas: ${film.uzdarbis - film.biudžetas} mln. USD`);
console.log(`Aktoriu kiekis: ${film.aktoriai.length}`);

let dabar = new Date;

console.log(`Filmui metu yra: ${dabar.getFullYear() - film.išleidimoMetai}`);

console.log();

// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius, žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?
console.log('----------3---------');


let knyga1 = {
    pavadinimas: "Haris Poteris ir Filosofų Akmuo",
    autorius: "J. K. Rowling",
    zanras: "Fantastika",
    kaina: 14.99,
    puslapiuKiekis: 320,
    skyriai: [
        "Berniukas, kuris liko gyvas",
        "Dingusios laiškų paslaptys",
        "Diagon alėja",
        "Hogvartsas"
    ],
    isleista: 1997,
    galimaRastiKnygynuose: true
};

let knyga2 = {
    pavadinimas: "Žiedų Valdovas: Žiedo brolija",
    autorius: "J. R. R. Tolkien",
    zanras: "Fantastika, nuotykių",
    kaina: 19.50,
    puslapiuKiekis: 423,
    skyriai: [
        "Ilgoji kalba apie Žiedus",
        "Šventė ir staigmena",
        "Trys draugai iškeliauja",
        "Tamsios girios"
    ],
    isleista: 1954,
    galimaRastiKnygynuose: false
};

console.log(knyga1);
console.log();
console.log(knyga2);
console.log();

//Puslapiai
if (knyga1.puslapiuKiekis < knyga2.puslapiuKiekis) {
    console.log('Knyga1 turi maziau puslapiu');
}
else if (knyga1.puslapiuKiekis > knyga2.puslapiuKiekis) {
    console.log('Knyga2 turi maziau puslapiu');
}
else { console.log('Puslapiu kiekis yra vienodas'); }

//Skyriai
if (knyga1.skyriai.length < knyga2.skyriai.length) {
    console.log('Knyga2 turi daugiau skyriu');
}
else if (knyga1.skyriai.length > knyga2.skyriai.length) {
    console.log('Knyga1 turi daugiau skyriu');
}
else { console.log('Skyriu kiekis yra vienodas'); }

//Kaina 
if (knyga1.kaina < knyga2.kaina) {
    let dvigubaKaina = knyga1.kaina * 2;

    if (dvigubaKaina > knyga2.kaina) {
        console.log('knyga1 kaina padvigubinus yra brangiau uz knyga2');
    }
    else { console.log('knyga1 kaina padvigubinus nera brangiau uz knyga2'); }
}
else if (knyga1.kaina > knyga2.kaina) {
    let dvigubaKaina = knyga2.kaina * 2;

    if (dvigubaKaina > knyga1.kaina) {
        console.log('knyga2 kaina padvigubinus yra brangiau uz knyga1');
    }
    else { console.log('knyga2 kaina padvigubinus nera brangiau uz knyga1'); }
}

console.log();

// 4. Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje (pirma prekė kainuoja - …, antra prekė kainuoja - …, ir t.t.). Raskite ir išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės pelningumą ((kaina - savikaina) * kiekis sandėlyje).
console.log('----------4---------');

let preke1 = {
    pavadinimas: "Bevielė pelė Logitech M185",
    kaina: 16.99,
    savikaina: 8.50,
    kodas: "M185-BLK",
    kiekisSandelyje: 120,
    deze: {
        x: 11,   // cm
        y: 7,    // cm
        z: 4     // cm
    }
};

let preke2 = {
    pavadinimas: "Monitorius Samsung 27",
    kaina: 189.00,
    savikaina: 140.00,
    kodas: "SM27FHD",
    kiekisSandelyje: 35,
    deze: {
        x: 70,
        y: 45,
        z: 15
    }
};

let preke3 = {
    pavadinimas: "Išorinė baterija PowerBank 20000mAh",
    kaina: 29.99,
    savikaina: 18.20,
    kodas: "PB20000-XL",
    kiekisSandelyje: 250,
    deze: {
        x: 16,
        y: 9,
        z: 3
    }
};

console.log(preke1);
console.log(preke2);
console.log(preke3);
console.log();

console.log(`Pirma preke kainuoja - ${preke1.kaina}, antra prekė kainuoja - ${preke2.kaina}, trecia prekė kainuoja - ${preke3.kaina}`);

//Brangiausia preke
if(preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina){
    console.log(`Brangiausia preke: ${preke1.pavadinimas}, ${preke1.kaina}`);
}
else if(preke1.kaina < preke2.kaina && preke2.kaina > preke3.kaina){
    console.log(`Brangiausia preke: ${preke2.pavadinimas}, ${preke2.kaina}`);
}
else { console.log(`Brangiausia preke: ${preke3.pavadinimas}, ${preke3.kaina}`); }
console.log();

// Turis ir pelningumas
let turis1 = preke1.deze.x * preke1.deze.y * preke1.deze.z;
let pelnas1 = Math.round(((preke1.kaina - preke1.savikaina) * preke1.kiekisSandelyje));

let turis2 = preke2.deze.x * preke2.deze.y * preke2.deze.z;
let pelnas2 = Math.round(((preke2.kaina - preke2.savikaina) * preke2.kiekisSandelyje));

let turis3 = preke3.deze.x * preke3.deze.y * preke3.deze.z;
let pelnas3 = Math.round(((preke3.kaina - preke3.savikaina) * preke3.kiekisSandelyje));

console.log('Turiai: ', '\n', turis1, '\n', turis2, '\n', turis3);
console.log();
console.log('Pelningumas: ', '\n', pelnas1, '\n', pelnas2, '\n', pelnas3)

console.log();

// 5. Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys). Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai, spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis įrašykite dabartinius metus arba panaudokite new Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300 kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).
console.log('----------5---------');

let car = {};
console.log(car);
console.log();

car.marke = "Toyota";
car.modelis = "Corolla";
car.rida = 85000;             
car.gamybosMetai = 2017;
car.spalva = "Balta";
car.darbinisTuris = 1.8;       
car.dauzta = false;
car.parduodama = true;

console.log(car);

let dabar2 = new Date();
let amzius = dabar.getFullYear() - car.gamybosMetai;
console.log(`Automobilio 'amzius': ${amzius}`);

console.log(`Vidutiniskai per metus yra nuvaziaves (nuvaziavo 300 km.): ${Math.round(300 / amzius)} km.`);


console.log();

// 6. Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją. Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai padarykite.
console.log('----------6---------');

let person = {
    vardas: 'Mindaugas',
    budvardziai: [
    "rūpestingas",
    1,
    "kantrus",
    2,
    "žingeidus",
    "aiškus",
    "motyvuojantis",
    "profesionalus",
    3,
    "kūrybingas",
    "entuziastingas",
    "draugiškas",
    "supratingas"
    ]
}

let zodziai = [];

for(let key in person){
    let objectValue = person[key];
    if(typeof objectValue === 'object'){
        for(let inside of objectValue){
            if(typeof inside === 'string'){
                zodziai.push(inside);
            }
        }
    }
}

console.log(`Mes mylim Mindaugą, nes jis: `);

for(let word of zodziai){
    console.log('-', word,'!');
}

console.log();
