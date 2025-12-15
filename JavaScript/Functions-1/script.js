// 1. Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote programavimą. Iškvieskite šią funkciją tris kartus.
console.log('----------------1----------------');

function vardas() {
    console.log('Mano vardas yra Patricija');
    console.log('Pasirinkau programavima, nes man yra mid-life crisis');
}

vardas();
vardas();
vardas();

console.log();

// 2. Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5 kartus.
console.log('----------------2----------------');

function eilerastis() {
  console.log(`Tyliai krenta žvaigždės į nakties delnus,
Vėjas pasakoja senas paslaptis,
Širdis klauso, nors niekas nekalba,
Laikas trumpam sustoja tarp žingsnių,
Ir rytas gimsta iš tylos.`);
}

for(let i = 0; i < 5; i++){
    eilerastis();
    console.log();
}

console.log();

// 3. Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite visas tris funkcijas po vieną kartą.
console.log('----------------3----------------');

function pirmas() {
    console.log('LALALALALALALA');
}

function antras() {
    console.log('BABABABABABABA');
}

function trecias() {
    console.log('SASASASASASASA');
}

pirmas();
antras();
trecias();

console.log();

// 4. Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutėje, kitoje kita. Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią trečiąją funkciją už visų funkcijų ribų.
console.log('----------------4----------------');

function text1() {
    console.log('Pirmas sentence.');
}

function text2() {
    console.log('Antras sentence.');
}

function text3() {
    text1();
    text2();
}

text3();

console.log();

// 5. Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius. Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą kartų.
console.log('----------------5----------------');

function randomNr() {
    let nr1 = Math.floor((Math.random() * 10) + 1);
    let nr2 = Math.floor((Math.random() * 10) + 1);
    let suma = nr1 + nr2;
    console.log('Random skaiciai: ', nr1, ' ir ', nr2);
    console.log(`${nr1} + ${nr2} = ${suma}`);
}

randomNr();

console.log();

// 6. Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma informacija apie policininką (vardas, pavardė, amžius, alga, etatas, specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite į sakinį, ar išveskite sąrašu ar pan.).
console.log('----------------6----------------');

function police() {
    let person = {
        vardas: 'Rokas',
        pavarde: 'Rokaitis',
        amzius: 27,
        alga: 1700,
        etatas: 1,
        specializacija: 'Krasto apsauga'
    };
    console.log(person);
}
police();

console.log();

// 7. Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje, skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.
console.log('----------------7----------------');

function randomNr2() {
    let skaiciai = [];
    for(let i = 0; i < 10; i++){
        let randomNr = Math.floor((Math.random() * 10) + 1);
        skaiciai.push(randomNr);
    }
    return skaiciai; //isiminti arba istraukiu, kad galeciau veliau panaudoti
}

let kopija = randomNr2();

for(let i = 0; i < 5; i++){
    console.log(kopija.join(' '));
}

console.log();

// 8. Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.
console.log('----------------8----------------');

function randomNr3() {
    let randomNr = Math.floor((Math.random() * 10) + 1);
    console.log(randomNr);
}

for(let i = 0; i < 10; i++){
    randomNr3();
}

console.log();
