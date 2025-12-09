// 1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame masyve yra narių.
console.log('----------1--------');
let masyvas1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(masyvas1[0], masyvas1[masyvas1.length - 1], masyvas1[4], masyvas1[8], masyvas1.length);

console.log();

// 2. Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.
console.log('----------2--------');
let masyvas2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(masyvas2);

masyvas2[0] = 'labas';
masyvas2[9] = 'ate';
masyvas2[5] = 'taip';

console.log(masyvas2);

console.log();

// 3. Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.
console.log('----------3--------');
let masyvas3 = [];

masyvas3.push(0, 1, 2, 3);

console.log(masyvas3);

console.log();

// 4. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.
console.log('----------4--------');
let masyvas4 = [];

masyvas4.push(Math.floor(Math.random() * 10));
masyvas4.push(Math.floor(Math.random() * 10));
masyvas4.push(Math.floor(Math.random() * 10));
masyvas4.push(Math.floor(Math.random() * 10));

console.log(masyvas4);

console.log();

// 5. Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.
console.log('----------5--------');

let student1 = [2, 5, 9, 10], vid1, suma1 = 0;
for (let i = 0; i < student1.length; i++) {
    suma1 += student1[i];
}
vid1 = suma1 / student1.length;
console.log(`Pirmo studento vidurkis: ${vid1}.`);

let student2 = [10, 8, 7, 8], vid2, suma2 = 0;
for (let i = 0; i < student2.length; i++) {
    suma2 += student2[i];
}
vid2 = suma2 / student2.length;
console.log(`Antro studento vidurkis: ${vid2}.`);


if (vid1 > vid2) {
    console.log(`Pirmo studento vidurkis didesnis.`);
}
else if (vid1 == vid2) {
    console.log(`Abiejų studentų vidurkis vienodas.`);
}
else { console.log(`Antro studento vidurkis didesnis.`); }

console.log();
