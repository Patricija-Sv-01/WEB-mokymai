// 1. Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. Visas šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią savybę.
console.log('--------------------1-----------------');

let knygos = [
    {
        pavadinimas: 'Haris Poteris ir Filosofų akmuo',
        autorius: 'J. K. Rowling',
        leidimoMetai: 1997
    },
    {
        pavadinimas: 'Žiedų valdovas: Žiedo brolija',
        autorius: 'J. R. R. Tolkien',
        leidimoMetai: 1954
    },
    {
        pavadinimas: 'Altorių šešėly',
        autorius: 'Vincas Mykolaitis-Putinas',
        leidimoMetai: 1933
    }
];

console.log(knygos);
console.log('------------------------------');
console.log('Pirma knyga: \n', knygos[0]);
console.log('------------------------------');
console.log('Antros knygos pavadinimas: \n', knygos[1].pavadinimas);
console.log('------------------------------');
console.log();

// 3. Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis. Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių (dabartiniai metai - gamybos metai).
console.log('--------------------3-----------------');


let automobiliai = [
    {
        marke: 'Toyota',
        modelis: 'Corolla',
        gamybosMetai: 2018
    },
    {
        marke: 'BMW',
        modelis: 'X5',
        gamybosMetai: 2021
    },
    {
        marke: 'Volkswagen',
        modelis: 'Golf',
        gamybosMetai: 2015
    }
];

for(let auto of automobiliai){
    console.log(auto, 'Amzius: ', (2025 - auto.gamybosMetai));
}

