// 1. Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.
console.log('------------1------------');

function greeting(name) {
    console.log('Hello', name);
}

function bye(name) {
    console.log('Viso gero', name);
}

let vardas = 'Patricija';

greeting(vardas);
bye(vardas);

console.log();

// 2. Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs - tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų, duodant skirtingus skaičius.
console.log('------------2------------');

function numbers(a, b) {
    
    if (a > b) {
        console.log(`${a} yra didesnis uz ${b}`);
    }
    else if (a < b) {
        console.log(`${b} yra didesnis uz ${a}`);
    }
    else { console.log(`${a} ir ${b} yra lygus`); }
}


for(let i = 0; i < 3; i++){
    let randomNr1 = Math.floor(Math.random() * 10 + 1);
    let randomNr2 = Math.floor(Math.random() * 10 + 1);
    numbers(randomNr1, randomNr2);
}
console.log();

// 3. Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė, modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant skirtingus duomenis jai.
console.log('------------3------------');

function car(markė, modelis, gamybosMetai, darbinisTūris){
    console.log(markė, '-', modelis, '-', gamybosMetai, '-', darbinisTūris);
}

car('Toyota', 'kazkoks modelis', 2006, 50);
car('Mercedes', 'kazkoks modelis', 2015, 60);

console.log();
// 4. Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas, perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą kartų.
console.log('------------4------------');

function sum(a, b) {
    let suma = a + b;
    console.log('Suma: ', suma);
}

function minus(a, b) {
    let skirt = a - b;
    console.log('Skirtumas: ', skirt);
}

function times(a, b) {
    let multiply = a * b;
    console.log('Daugyba: ', multiply);
}

function division(a, b) {
    let dalmuo = a / b;
    console.log('Dalyba: ', dalmuo);
}

function generate() {
    let nr1 = Math.floor(Math.random() * 10 +1);
    let nr2 = Math.floor(Math.random() * 10 +1);
    console.log('Random numbers: ', nr1, ' & ', nr2);
    sum(nr1, nr2);
    minus(nr1, nr2);
    times(nr1, nr2);
    division(nr1, nr2);
}

generate();

console.log();

