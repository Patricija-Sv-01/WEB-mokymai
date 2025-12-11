// 1. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.
console.log('-----------1-----------');

let masyvas1 = [3, 7, 2, 9, 6, 4];

let evenNr = masyvas1.find(number => number % 2 == 0);
console.log(evenNr);

console.log();

// 2. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.
console.log('-----------2-----------');

let masyvas2 = [-3, 0, 5, -8, 2, 7];

let positiveNr = masyvas2.find(number => number > 0);
console.log(positiveNr);

console.log();

// 3. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4], tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7, 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.
console.log('-----------3-----------');

let masyvas3 = [8, -2, 3, 4];

let negativeNr = masyvas3.findIndex(number => number < 0 );
console.log(negativeNr);

console.log();
// 4. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.
console.log('-----------4-----------');

let masyvas4 =[1, 2, 5, 88, 10, 10, 11];

let ten = masyvas4.findIndex(number => number >= 10);
console.log(ten);

console.log();
// 5. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7, 18, 4], atsakymas bus 12.
console.log('-----------5-----------');

let masyvas5 = [1, 0, 9, 4, 6, 12, 5];

let nr1 = masyvas5.find(number => (number % 3 == 0) && (number > 10));
console.log(nr1);

console.log();

// 6. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas yra -6.
console.log('-----------6-----------');

let masyvas6 = [0, 8, -1, -14, 10, 3];

let nr2 = masyvas6.find(number => (number < 0) && (number % 2 == 0));
console.log(nr2);

console.log();

// 7 Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o jeigu masyvas [8, 9, -3, 2], tai atsakymas false.
console.log('-----------7-----------');

let masyvas7 = [7, -5, 9, 8];

let nr3 = masyvas7.every(number => number > 0);
console.log(nr3);

console.log();

// 8. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu masyvas [7, 3, 6, 8, 10], tai atsakymas false.
console.log('-----------8-----------');

let masyvas8 = [2, 4, 1, 6];

let nr4 = masyvas8.every(number => number % 2 == 0);
console.log(nr4);

console.log();

// 9. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.
console.log('-----------9-----------');

let masyvas9 = [8, 20, 1, 97, 44];

let nr5 = masyvas9.some(number => number < 5);
console.log(nr5);

console.log();

// 10. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu masyvas yra [-8, -6, -4], tai atsakymas yra false.
console.log('-----------10-----------');

let masyvas10 = [-7, -2, -3, -6];

let nr6 = masyvas10.some(number => number > 0);
console.log(nr6);

console.log();

// 11. Susikurkite žodžių masyvą. Patikrinkite ar visi šiame masyve esantys žodžiai yra sudaryti iš 3 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘antis’, ‘ožka’, ‘arklys’], tai atsakymas true, o jeigu masyvas [‘abc’, ‘de’, ‘fgia’], tai atsakymas false.
console.log('-----------11-----------');

let masyvas11 = ['labas', 'ate', 'hi', 'obuolys'];

let nr7 = masyvas11.every(word => word.length >= 3);
console.log(nr7);

console.log();

// 12. Susikurkite žodžių masyvą. Patikrinkite ar šiame masyve yra bent vienas žodis prasidedantis raide a (turi surasti nepriklausomai tai didžioji ar mažoji raidė). Pvz, jeigu masyvas [‘bananas’, ‘agurkas’, ‘pomidoras’], tai atsakymas true, o jeigu masyvas [‘kaunas’, ‘vilnius’, ‘klaipėda’], tai atsakymas false.
console.log('-----------12-----------');

let masyvas12 = ['bananas', 'bgurkas', 'pomidoras'];

let nr8 = masyvas12.some(word => (word.startsWith('a') || (word.startsWith('A'))));
console.log(nr8);

console.log();

// 13. Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz, masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.
console.log('-----------13-----------');

let masyvas13 = [3, 7, -2, 9, 6, 4];

let teig = masyvas13.every(number => number > 0);
let lyg = masyvas13.some(number => number > 0);

let answer = teig && lyg;
console.log(answer);

console.log();

// 14. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Išfiltruokite skaičius, kurie yra teigiami. Pvz, jeigu masyvas yra [4, -3, -2, 8, 9, 5], tai išfiltruotas variantas yra [4, 8, 9, 5].
console.log('-----------14-----------');

let masyvas14 = [4, -3, -2, 8, 9, 5];

let nr14 = masyvas14.filter(number => number > 0);
console.log(nr14);

console.log();

// 15. Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai (skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz, jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2].
console.log('-----------15-----------');

let masyvas15 = [5, 1, 4, 5, 1, 3, 4, 5, 2];

let nr15 = masyvas15.filter(number => number == 1 || number == 2);
console.log(nr15);

console.log();

// 16. Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių. Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8].
console.log('-----------16-----------');

let masyvas16 = [5, -3, 2, 7, 8, -4, 1];

let nr16 = masyvas16.filter(number => number > 0 && number % 2 == 0);
console.log(nr16);

console.log();

// 17. Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, kurių pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu turite masyvą [‘Belgija’, ‘Lietuva’, ‘Graikija’, ‘Bulgarija’], tai turi gautis [‘Belgija’, ‘Bulgarija’].
console.log('-----------17-----------');

let masyvas17 = ['Belgija', 'Lietuva', 'Graikijab', 'Bulgarija'];

let nr17 = masyvas17.filter(country => country.includes('b') || country.includes('B'));

console.log(nr17);

console.log();

// 18. Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2, 6, 4], o padvigubinus galutinis variantas bus [4, 12, 8].
console.log('-----------18-----------');

let masyvas18 = [3, 7, 2, 9, 6, 4];

let nr18 = masyvas18
    .filter(number => number % 2 == 0)
    .map(number => number * 2);

console.log(nr18);

console.log();

// 19. Susikurkite skaičių masyvą. Kiekvieną skaičių jame padidinkite per 1. Pvz, jeigu masyvas yra [7, 8, 9, 2, 3], tai turi gautis [8, 9, 10, 3, 4].
console.log('-----------19-----------');

let masyvas19 = [7, 8, 9, 2, 3];

let nr19 = masyvas19.map(number => number + 1);
console.log(nr19);
 
console.log();

// 20. Susikurkite žodžių masyvą. Kiekvieną žodį iš šio masyvo paverskite į variantą iš didžiųjų raidžių. Pvz, jeigu turite masyvą [‘bananas’, ‘baba’, ‘klėtis’], tai turi gautis [‘BANANAS’, ‘BABA’, ‘KLĖTIS’].
console.log('-----------20-----------');

let masyvas20 = ['bananas', 'baba', 'klėtis'];

let uppercase = masyvas20.map(word => word.toUpperCase());
console.log(uppercase);

console.log();

// 21. Susikurkite skaičių masyvą. Gaukite visų skaičių sumą. Pvz, jeigu masyvas yra [2, 3, 1], tai atsakymas 6.
console.log('-----------21-----------');

let masyvas21 = [2, 3, 1];

let suma1 = masyvas21.reduce((rezas, number) => rezas + number);
console.log(suma1);

console.log();

// 22. Susikurkite skaičių masyvą. Atrinkite tik tuos skaičius, kurie yra lyginiai ir gaukite jų sumą. Pvz, jeigu masyvas yra [1, 2, 3, 4, 5], atrinkus gausis [2, 4], o šių skaičių suma ir galutinis atsakymas yra 6.
console.log('-----------22-----------');

let masyvas22 = [1, 4, 3, 4, 5];

let nr22 = masyvas22
    .filter(number => number % 2 == 0)
    .reduce((rezas, number) => rezas + number);

console.log(nr22);

console.log();

// 23. Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, ją padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą [‘šuo’, ‘katė’, ‘gyvatė’], tai turi gautis [‘Š’, ‘K’, ‘G’].
console.log('-----------23-----------');

let masyvas23 = ['labas', 'ate', 'patricija', 'suo', 'kate'];

let nr23 = masyvas23.map(word => word[0].toUpperCase());
console.log(nr23);

console.log();

// 24. Susikurkite žodžių masyvą. Raskite kiek šiame masyve yra žodžių, kurie susideda iš 5 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘bananas’, ‘persikas’, ‘abc’, ‘de’], tai atrinkus žodžius gausis [‘bananas’, ‘persikas’], o tokių žodžių yra ir galutinis atsakymas skaitosi 2.
console.log('-----------24-----------');

let masyvas24 = ['bananas', 'persikas', 'abc', 'de'];

let nr24 = masyvas24.filter(word => word.length >= 5);
console.log(nr24.length);

console.log();









