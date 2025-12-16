// 1. Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.
console.log('------------1----------');

let masyvas1 = [1, 2, 3, 0, 15, 5];

function action1(masyvas) {
    let suma = 0;
    for (let number of masyvas) {
        suma += number;
    }
    return suma;
}

let masyvas2 = [5, 4, 3, 2, 1], masyvas3 = [6, 7, 8, 9, 10];

if (action1(masyvas1) > action1(masyvas2) && action1(masyvas1) > action1(masyvas3)) {
    console.log('Didziausia suma', action1(masyvas1));
}
else if (action1(masyvas1) < action1(masyvas2) && action1(masyvas2) > action1(masyvas3)) {
    console.log('Didziausia suma', action1(masyvas2));
}
else { console.log('Didziausia suma', action1(masyvas3)); }

console.log();

// 2. Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą. Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip pat, nurodykite šio žodžio ilgį.
console.log('------------2-----------');

let zodziai1 = ['labas', 'ate', 'obuolys', 'ab'];

function action2(masyvas){
    let max = 0, zodis;
    for(let word of masyvas){
        if(word.length > max){
            max = word.length;
            zodis = word;
        }
    }
    return `Ilgiausias zodis: ${zodis}, jis turi ${max} raides`;
}

console.log(action2(zodziai1));

console.log();

// 3. Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. Ji turėtų patikrinti ar visi pažymiai teigiami: jei visi teigiami turėtų grąžintų true kaip atsakymą, o jei yra bent vienas neigiamas - false. Susikurkite du pažymių masyvus. Iškvieskite šią funkciją du kartus, abu kartus perduodant skirtingus masyvus. Gautus atsakymus paverskite į tekstą (jeigu gavote true - išveskite tekstą 'visi studento pažymiai teigiami', jei false - 'studentas turi bent vieną neigiamą pažymį'). Šiam iškonvertavimui iš true/false į tekstą galite pamėginti pasikurti atskirą funkciją, jai perduoti kitos funkcijos atsakymą.
console.log('------------3-----------');

let masyvas4 = [5, 10, 9, 8, 7, 10];

function teigiami(masyvas){
    let rez = masyvas.every(paz => paz >= 5);
    return rez;
}

function ats(result){
    if(result == true){
        return 'Visi studento pazymiai teigiami';
    }
    else return 'studentas turi bent vieną neigiamą pažymį';
}

let masyvas5 = [5, 5, 2, 8], masyvas6 = [10, 9, 8, 9, 10];

console.log(ats(teigiami(masyvas4)));
console.log(ats(teigiami(masyvas5)));
console.log(ats(teigiami(masyvas6)));

console.log();