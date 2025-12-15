// 1. Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite šią funkciją ir išspausdinkite gautus rezultatus.
console.log('---------------1--------------');

function sentence(words) {
    return words;
}

let sakinys = 'Labas mano vardas yra Patricija.';

console.log(sentence(sakinys));

console.log();

// 2. Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių. Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.
console.log('---------------2--------------');

function number() {
    let randomNr = Math.floor(Math.random() * 10 + 1);
    return randomNr;
}

console.log(number());
console.log(number());

console.log();

// 3. Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį. Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų, perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.
console.log('---------------3--------------');

function student(vardas, vidurkis) {
    return `Studento vardas: ${vardas}, o vidurkis: ${vidurkis}`;
}

let name1 = 'Lukas', vid = 8.7;

console.log(student(name1, vid));

console.log();

// 4. Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje iškvieskite šią funkciją, perduodant ciklo kintamąjį.
console.log('---------------4--------------');

function skaicius1(x) {
    let min = 1000;
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            if (i < min) {
                min = i;
            }
        }
    }
    return min == 1000 ? x : min; //jeigu neturi dalikliu
}

for (let i = 10; i < 30; i++) {
    console.log(skaicius1(i));
}

console.log();

// 5. Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis). Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).
console.log('---------------5--------------');

function tikrinimas(x) {
    let kiekis = 0;
    if (x == 2) {
        return `${x} true`;
    }

    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            kiekis++;
        }
    }

    if (kiekis > 0) {
        return `${x} false`;
    }
    else return `${x} true`;
}

for (let i = 2; i < 15; i++) {
    console.log(tikrinimas(i));
}
console.log();

// 6. Susikurkite bent 3 matematines funkcijas, priimančias reikiamus argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas, sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat, susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus kintamuosius) (pagal 7 pavyzdį). Iškvieskite šią pagrindinę funkciją bent kartą.
console.log('---------------6--------------');

function trysSuma(a, b, c) {
    let suma = a + b + c;
    return suma;
}

function skirtumas(a, b) {
    let minus = b - a;
    return minus;
}

function daugyba(a, b) {
    let times = a * b;
    return times;
}

function generate() {
    let randomNr1 = Math.floor(Math.random() * 10 + 1);
    let randomNr2 = Math.floor(Math.random() * 10 + 1);
    let randomNr3 = Math.floor(Math.random() * 10 + 1);

    return `Trys skaiciai: ${randomNr1}-${randomNr2}-${randomNr3}, Triju skaiciu suma: ${trysSuma(randomNr1, randomNr2, randomNr3)}, dvieju skaiciu skirtumas: ${skirtumas(randomNr1, randomNr2)}, dvieju skaiciu daugyba: ${daugyba(randomNr1, randomNr3)}`;
}

console.log(generate());