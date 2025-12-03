// 1. Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra didžiausias.
console.log('---------1---------');

let sk1 = 2, sk2 = 1, sk3 = 20;

if(sk1 > sk2 && sk1 > sk3){
    console.log(`${sk1} yra didziausias`);
}
    else if(sk2 > sk1 && sk2 > sk3){
        console.log(`${sk2} yra didiziausias`);
    }
        else console.log(`${sk3} yra didziausias`);


// -----------Prisiminimui ir pasibandymui---------------
let masyvas = [sk1, sk2, sk3];        
let maxnr = 0;

for(let i = 0; i<3; i++){

    if(masyvas[i] > maxnr){
        maxnr = masyvas[i];
    }
}
console.log(maxnr, 'yra didziausias skaicius');
// ------------------------------------------------------- 

console.log();

// 2. Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra mažiausias.
console.log('---------2---------');

if(sk1 < sk2 && sk1 < sk3){
    console.log(`${sk1} yra maziausias`);
}
    else if(sk2 < sk1 && sk2 < sk3){
        console.log(`${sk2} yra maziausias`);
    }
        else console.log(`${sk3} yra maziausias`);


// -----------Prisiminimui ir pasibandymui---------------       
let minnr = 10000000000;

for(let i = 0; i<3; i++){

    if(masyvas[i] < minnr){
        minnr = masyvas[i];
    }
}
console.log(minnr, 'yra maziausias skaicius');
// ------------------------------------------------------- 

console.log();

// 3. Susikurkite trijų egzaminų rezultatų kintamuosius. Suraskite pažymių vidurkį. Atlikite šiuos patikrinimus:
// ar gautas vidurkis yra [8-10];
// ar gautas vidurkis yra [5-8);
// ar gautas vidurkis yra < 5.

console.log('---------3---------');

let egz1 = 5, egz2 = 6, egz3 = 3;
let suma1, vid1;

suma1 = egz1 + egz2 + egz3;
vid1 = suma1 / 3;

if((vid1 >= 8) && (vid1 <= 10)){
    console.log('Vidurkis aukstesnysis');
}
    else if ((vid1 <= 8) &&(vid1 >= 5)){
        console.log('Vidurkis patenkinimas')
    }
        else console.log('Vidurkis neigiamas');

// -----------Prisiminimui ir pasibandymui---------------      
let masyvas2 = [egz1, egz2, egz3];
let suma = 0, vid;

for(let i = 0; i< 3; i++){

    suma += masyvas2[i];
}

vid = suma/3;
// ------------------------------------------------------- 
console.log();

// 4. Susikurkite du skaičius. Patikrinkite (naudojant 4 atskirus if’us):
// ar pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;
// ar antras skaičius yra didesnis už pirmąjį arba yra lygus 5;
// ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;
// ar antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;
console.log('---------4---------');
let nr1 = 15, nr2 = 8;

if((nr1 > nr2 || nr == 0)){
    console.log(`pirmas skaičius (${nr1}) yra didesnis už antrąjį (${nr2}) arba yra lygus 0`);
}
    else console.log('neatitinka salygom');

console.log();

if((nr2 > nr1) || (nr2 == 5)){
    console.log(`antras skaičius (${nr2}) yra didesnis už pirmąjį (${nr1}) arba yra lygus 5`);
}
    else console.log('neatitinka salygom');

console.log();

if((nr1 > nr2) && (nr1 == 20)){
    console.log(`pirmas skaičius (${nr1}) yra didesnis už antrąjį (${nr2}) ir yra lygus 20`);
}
    else console.log('neatitinka salygai');

console.log();

if((nr2 > nr1) && (nr2 < 100)){
    console.log(`antras skaičius (${nr2}) yra didesnis už pirmąjį (${nr1}) ir yra mažesnis už 100`);
}
    else console.log('neatitinka salygai');

console.log();

