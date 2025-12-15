// 1. Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.
console.log('---------------1-------------');

function zodziai(masyvas) {
    for (let zodis of masyvas) {
        console.log(zodis, ' - ', zodis.length);
    }
}

let masyvas1 = ['labas', 'ate', 'apple', 'pie'];

zodziai(masyvas1);

console.log();

// 2. Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.
console.log('---------------2--------------');

function skaiciai(masyvas) {
    for (let number of masyvas) {
        console.log(number ** 2, (number ** 2) / 2);
    }
}

let skaiciai1 = [1, 2, 3, 4];
let skaiciai2 = [5, 6, 7, 8];

skaiciai(skaiciai1);
console.log();
skaiciai(skaiciai2);

console.log();

// 3. Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba objektus studentų pažymiams saugoti ir užpildykite juos duomenimis. Iškvieskite šią funkciją perduodant visus reikalingus duomenis.
console.log('---------------3--------------');

function pazymiai(student) {
    console.log(student.vardas, student.pavarde);
    console.log(student.paz.join(', '));

    let suma = student.paz.reduce((suma, pazymis) => suma + pazymis);
    let vidurkis = suma / student.paz.length;

    console.log('Vidurkis: ', vidurkis);
}

let student1 = {
    vardas: 'Lukas',
    pavarde: 'Lukaitis',
    paz: [5, 10, 8, 7]
};

pazymiai(student1);

console.log();

// 4. Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus. Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.
console.log('---------------4--------------');

let skaiciuMasyvas = [1, 12, 5, 78, 4, 0];
console.log(skaiciuMasyvas.join(', '));

function action1(masyvas) {
    let max = 0;
    for (let number of masyvas) {
        if (number > max) {
            max = number;
        }
    }
    console.log('Didziausias skaicius: ', max);
}
action1(skaiciuMasyvas);
console.log();

function action2(masyvas) {
    let kiekis = 3;
    for (let i = 0; i < kiekis; i++) {
        masyvas.push(Math.floor(Math.random() * 10 + 1));
    }
}

let tuscias1 = [], tuscias2 = [], tuscias3 = [];

action2(tuscias1);
action2(tuscias2);
action2(tuscias3);

console.log(tuscias1);
console.log(tuscias2);
console.log(tuscias3);

console.log();