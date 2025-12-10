// 1. Susikurkite masyvą, kuriame būtų pateikti mėgstamiausi valgiai. Pamėginkite masyvą papildyti informacija įvairiais būdais (pridėti naują valgį priekyje, gale, per vidurį, pasirinktoje vietoje). Pamėginkite ištrinti kažkuriuos 3 valgius (iš pasirinktų pozicijų, pvz priekio, galo ir vidurio).
console.log('--------1------');

let masyvas1 = ['ryziai su darzovemis', 'karbonadas', 'desreles', 'kotletai'];

masyvas1.unshift('sumustiniai'); //priekyje
masyvas1.splice(3, 0, 'sumustiniai2'); //viduryje
masyvas1.push('sumustiniai 3'); //gale

console.log(masyvas1);

masyvas1.splice(4, 1); //istrinu desreles

console.log(masyvas1);

console.log();
// 2. Susikurkite skaičių masyvą. Naudojant includes, patikrinkite ar masyve yra kuris nors pasirinktas skaičius (pvz 8).
console.log('--------2------');

let masyvas2 = [0, 5, 6, 12, 50, 1];
console.log(masyvas2);

let number = masyvas2.includes(50);
if (number == false) {
    console.log('Skaicius 50 nera masyve');
}
else { console.log(`Skaicius 50 yra masyve, jo indeksas = ${masyvas2.indexOf(50)}.`) };

console.log();

// 3. Susikurkite masyvą, kuriame būtų surašyti bet kokie žodžiai. Panaudokite join metodą, kad masyvą paverstumėte į teksto eilutę. Paeksperimentuokite su skirtingais skirtukais jungiant tekstą (pvz vieną kartą panaudokite tarpą, kitą kablelius ir t.t.).
console.log('--------3-------');

let masyvas3 = ['labas', 'ate', 'lalala', 'kriause', 'apple'];

let words1 = masyvas3.join(' ');
console.log('Skiriamasis zenklas yra tarpas: ', words1);

let words2 = masyvas3.join(', ');
console.log('Skiriamasis zenklas yra kablelis: ', words2);

console.log();

// 4. Susikurkite kintamąjį kuriame būtų saugomas sakinys iš kelių žodžių (string tipo kintamasis). Išskaidykite šį tekstą į masyvą naudojant split metodą. Raskite kiek žodžių buvo sakinyje.
console.log('--------4-------');

let sentence = 'Labas mano vardas yra Patricija.';
let words = sentence.split(' ');

console.log('Words from the sentence: ', words);
console.log(`Zodziu kiekis: ${words.length}`);

console.log();

// 5. Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki mažiausio. Išveskite tris didžiausius pažymius.
console.log('--------5-------');

let masyvas5 = [2, 5, 8, 2, 10];
console.log(masyvas5);
console.log();

let sort1 = masyvas5.sort((a, b) => b - a);
console.log('Surikiuota nuo didziausio iki maziausio: ', sort1);

console.log('Trys didziausi pazymiai: ');
for (let i = 0; i < 3; i++) {
    console.log(masyvas5[i]);
}

console.log();

// 6. Susikurkite du masyvus, pirmąjame būtų saugomi biologijos pamokos studentų vardai, o antrąjame būtų saugojami matematikos pamokos studentų vardai. Apjunkite šiuos masyvų informaciją į vieną masyvą. Bonus: ar jums pavyktų išskirti tik unikalius vardus? (galima ieškoti kaip panaudoti set).
console.log('--------6-------');

let biology = ['Agne', 'Darija', 'Vilte', 'Benas', 'Lukas'];
let maths = ['Chimene', 'Elze', 'Agne', 'Benas'];

let join = biology.concat(maths);
console.log(join);

//Randu unikalius
let newSet = new Set();
let repeat = [];
for (let names of join) {
    if (newSet.has(names)) {
        repeat.push(names);
    }
    else {
        newSet.add(names);
    }
}

console.log('Vardai, kurie pasikartoja: ', repeat);

console.log();

// 7. Susikurkite du masyvus. Pirmame masyve bus išvardinta pirmo semestro paskaitų temos, o antrame masyve - antro semestro paskaitų temos. Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia būtų pateikta pirmo semestro informacija ir tada antro.
console.log('--------7-------');

let masyvas71 = ['bendroji biologija', 'bendroji chemija', 'linear algebra'];
let masyvas72 = ['geometry', 'arithmetic', 'programming', 'physics'];

let spread = [...masyvas71, ...masyvas72];
console.log(spread);

console.log();

// 8. Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. Padarykite šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. Išveskite abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo masyvo, turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir sutvarkyti.
console.log('--------8-------');

let masyvas8 = ['red', 'blue', 'yellow', 'green', 'purple'];
let copy = [...masyvas8];

masyvas8 = [];

console.log(masyvas8);
console.log(copy);

console.log();

// 9. Susikurkite masyvą, kuriame būtų saugomi miestų pavadinimai. Atlikite paiešką masyve su indexOf surasdami kurioje pozicijoje yra pasirinktas miestas.
console.log('--------9-------');

let masyvas9 = ['Vilnius', 'Kaunas', 'Klaipeda', 'Silute'];

let findIndex = masyvas9.indexOf('Klaipeda');
console.log(findIndex);

console.log();

// 10. Susikurkite bet kokį masyvą. Parašykite programą kuri išsiaiškintų ar masyve yra bent vienas dublikatas.
// Pvz, masyve [1, 2, 3] nėra dublikatų.
// O masyve [1, 2, 3, 4, 2] yra dublikatų (skaičius 2).
console.log('--------10-------');

let masyvas10 = [1, 1, 2, 2, 3, 4, 5];

let set = new Set();
for (let numbers of masyvas10) {
    if (set.has(numbers)) {
        console.log('Dublikatas: ', numbers);
    }
    else set.add(numbers);
}

console.log();

// 11. Parašykite programą, kuri galėtų masyvą išskaidyti į pasirinkto dydžio gabalėlius (chunk size). Pvz turint masyvą [1, 2, 3, 4, 5, 6] ir pasirinkus chunk size 2, turėtų gautis toks masyvas - [[1, 2], [3, 4], [5, 6]].
console.log('--------11-------');

let masyvas11 = [1, 2, 3, 4, 5, 6];
let chunkSize = 2;
let masyvasGalutinis = [];

for (let i = 0; i < masyvas11.length; i += chunkSize) {
    let chunk = masyvas11.slice(i, i + 2);
    masyvasGalutinis.push(chunk);
}
console.log(masyvasGalutinis);

// let masyvasGalutinis = [];
// let chunk1 = masyvas11.slice(0, 2);
// let chunk2 = masyvas11.slice(2, 4);
// let chunk3 = masyvas11.slice(4, 6);

// masyvasGalutinis.push(chunk1, chunk2, chunk3);
// console.log(masyvasGalutinis);

console.log();

// 12. Susikurkite string tipo kintamąjį, kuriame būtų išsaugoti skaitmenys, pvz “01458”. Patikrinkite ar nurodytas “skaičius” yra palindromis, t.y. toks kuris yra vienodas tiek skaitant iš priekio, tiek iš galo (palindromio pvz: 01310). Hint: su string kintamuoju galima panaudoti ir dalį masyvų metodų.
console.log('--------12-------');

let nr = '013252310';

let array = nr.split(''); //isidedu i masyva

let length = array.length;
let end = Math.round(length / 2); // surandu viduri masyvo ilgio

let firstHalf = [], secondHalf = []; //cia bus pirma puse ir antra puse skaiciaus

for (let i = 0; i < end; i++) {
    firstHalf.push(array[i]); //suku iki puses imtinai ir dedu i atskira masyva
}

for (let i = array.length - 1; i > end; i--) {
    secondHalf.push(array[i]); //suku atbulini for cikla, kad skaiciai eitu nuo galo ir dedu i masyva
    end--;
    if (end == 0) {
        break;
    }
}

//paverciu masyva i teksta
let firstText = firstHalf.join('');
let secondText = secondHalf.join('');

//lyginu ar jie tie patys
if (firstText == secondText) {
    console.log('Skaicius palindromas: ', nr);
}
else { console.log('Skaicius nera palindromas: ', nr) };

console.log();

// 13. Susikurkite du skaičių masyvus. Susikurkite trečią, tačiau tuščią masyvą. Parašykite programą kuri sudėtų pirmų dviejų masyvų skaičius į trečiąjį, tačiau nekartojant jau trečiame egzistuojančių reikšmių (sudėtų tik unikalius skaičius). Pvz jeigu turime masyvus [1, 2, 3, 4] ir [2, 3, 5, 6], tai trečiasis turėtų gautis [1, 2, 3, 4, 5, 6].
console.log('--------13-------');

let Nr1 = [1, 2, 3, 4];
let Nr2 = [2, 3, 5, 6];
let Nr3 = new Set();

let joined = Nr1.concat(Nr2);

for (let number of joined) {
    if (Nr3.has(number)) {
        continue;
    }
    else { Nr3.add(number); }
}

let sort = [...Nr3].sort((a, b) => a - b);

console.log(sort);

console.log();

// 14. Susikurkite du bet kokius masyvus. Raskite kurie elementai egzistuoja tiek viename tiek kitame masyve. Pvz jeigu pirmasis yra [1, 2, 3], o antrasis yra [2, 3, 4], tai atsakymas [2, 3].
console.log('--------14-------');

let masyvas141 = [1, 2, 3];
let masyvas142 = [2, 3, 4];
let kartojas = [];

for (let number1 of masyvas141) {
    for (let number2 of masyvas142) {
        if (number1 == number2) {
            kartojas.push(number1);
        }
    }
}
console.log(kartojas);

console.log();
// 15. Susikurkite skaičių masyvą, kuriame skaičiai nebūtinai eina didėjimo tvarka. Raskite mažiausią teigiamą skaičių kuris neegzistuoja. Pvz jeigu masyvas yra [7, 5, 1, 9, 3, 4], tai atsakymas yra 2.
console.log('--------15-------');

let masyvas15 = [7, 5, 1, 1, 1, 4];
let didRik = masyvas15.sort((a, b) => a - b);
let rez;

for(let i = 0; i < masyvas15.length; i++){
    if((didRik[i+1] - didRik[i]) == 1 || (didRik[i+1] - didRik[i]) == 0){
        continue;
    }
    else { rez = didRik[i] + 1;
        break;
    }
}
console.log(rez);

console.log();

// 16. Susikurkite norimą masyvą. Apverskite šį masyvą, kad elementai eitų atvirkščiai. Pvz jeigu turime masyvą [1, 2, 3, 4], tai apvertus turime gauti [4, 3, 2, 1].
console.log('--------16-------');

let masyvas16 = [1, 2, 3, 4];
let reverseM = masyvas16.reverse();
console.log(reverseM);

console.log();





