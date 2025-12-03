//1. Išveskite į konsolę pasirinktą skaičių, jo kvadratą, jį pakeltą trečiu laipsniu.
console.log('-----------------1---------------');
let a = 2;

console.log(
  'Pasirinktas skaicius: ', a,
  '\nKvadratas: ', a ** 2,
  '\nTreciuoju laipsniu: ', a ** 3
);

// 2. Susikurkite tris kintamuosius skaičiams saugoti. Išveskite šių skaičių sumą ir sandaugą.
console.log('-----------------2---------------');
let a2 = 2, b2 = 3, c2 = 4;

console.log(
    'SUMA: ', (a2 + b2 + c2),
    '\nSANDAUGA: ', (a2 * b2 * c2)
);

// 3. Susikurkite du kintamuosius skaičiams saugoti. Išveskite šių skaičių sumą ir skirtumą. Išveskite sandaugą, gautą padauginus sumą ir skirtumą. Išveskite dalmenį, gautą padalinus sumą iš skirtumo.
console.log('-----------------3---------------');
let a3 = 2, b3 = 4;
let suma = a3+b3, skirtumas = a3-b3, sandauga = suma*skirtumas;

console.log(
    'SUMA: ', suma,
    '\nSKIRTUMAS: ', skirtumas,
    '\nSANDAUGA (skirtumas ir sandauga): ', sandauga,
    '\nDALMUO (suma is skirtumo): ', (suma / skirtumas)
);

// 4. Susikurkite keturis kintamuosius skaičiams saugoti. Išveskite šių skaičių vidurkį.
console.log('-----------------4---------------');
let a4 = 1, b4 = 2, c4 = 3, d4 = 4;

console.log('VIDURKIS: ', ((a4 + b4 + c4 + d4) / 4));

// 5. Išveskite į konsolę dviejų skaičių sumą, skirtumą, sandaugą ir dalmenį, kiekvieną kartą nurodant atliekamą veiksmą ir šių skaičių reikšmes. 
console.log('-----------------5---------------');
let a5 = 5, b5 = 9;

console.log(
    `${a5} + ${b5} = ${a5 + b5} 
    \n${a5} - ${b5} = ${a5 - b5}
    \n${a5} * ${b5} = ${a5 * b5}
    \n${a5} / ${b5} = ${a5 / b5}`
);

// 6. Išveskite į konsolę šių veiksmų atsakymus (turite gauti 23, 5, 12, 3.5):
// -1 + 4 * 6
// (35 + 5) % 7
// 14 + -4 * 6 / 12
// 2 + 15 / 6 * 1 - 7 % 2
console.log('-----------------6---------------');

console.log(
    '\n',(-1 + (4 * 6)),
    '\n',((35 + 5) % 7),
    '\n',(14 + ((-4) * 6 / 12)),
    '\n',(2 + (15 / 6 *1) - (7 % 2))
);

// 7. Išveskite norimo skaičiaus daugybos lentelę nuo 1 iki 10.
console.log('-----------------7---------------');
let x = 2;
for (let i = 1; i<=10; i++)
{
    console.log(`${x} * ${i} = ${x * i}`);
}

// 8. Susikurkite dviženklį skaičių. Raskite jo skaitmenų sumą.Pavyzdžiui: 58 -> 5 + 8 = 13. Kad gauti pirmą skaitmenį galima dalinti iš 10 (ir panaudoti Math.floor(skaičius) arba Math.ceil(skaičius)).Kad gauti antrą skaitmenį galima dalinti su % iš 10.
console.log('-----------------8---------------');
let x2 = 24;

let number1 = 24 / 10;
let number2 = 24 % 10;


console.log('Skaitmenu suma: ', (Math.floor(number1) + Math.ceil(number2)));

// Pakeitimas 2
