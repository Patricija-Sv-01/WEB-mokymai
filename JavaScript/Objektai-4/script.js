// 1. Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse, gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius, darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).
console.log('-------------1--------------');

let imones = [
    {
        pavadinimas: 'Apple',
        darbuotojuSkaicius: 164000,
        ikurimoMetai: 1976,
        sektorius: 'Technologijos'
    },
    {
        pavadinimas: 'Tesla',
        darbuotojuSkaicius: 140000,
        ikurimoMetai: 2003,
        sektorius: 'Automobiliai'
    },
    {
        pavadinimas: 'Barclays',
        darbuotojuSkaicius: 83500,
        ikurimoMetai: 1690,
        sektorius: 'Finansai'
    }
];

let darbuotojuSuma = 0;
let max = 0;
let naujausia;
for(let imone of imones){
    console.log(`-------------${imones.indexOf(imone) + 1} ĮMONĖ-----------\n`,imone,`\n-----------------------------------`);
    darbuotojuSuma += imone.darbuotojuSkaicius;

    if(imone.ikurimoMetai > max){
        max = imone.ikurimoMetai;
        naujausia = imone.pavadinimas;
    }
}

console.log();
console.log('Darbuotoju skaicius per visas imones: ', darbuotojuSuma);
console.log('Naujausiai ikurta imone: ', naujausia);

console.log();

