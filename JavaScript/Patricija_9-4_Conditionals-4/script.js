// 1. Susikurkite skaičiui saugoti skirtą kintamąjį. Tikrinkite (naudojant visas if sąlygos dalis):
// Ar skaičius yra lyginis?
// Ar dalinasi iš 5?
// Ar skaičius lygus 3?
// Jeigu nieko nepavyko rasti, išveskite klaidos pranešimą.

console.log('---------------1-----------------');
let sk = 7;

if(sk % 2 == 0){
    console.log(`${sk} yra lyginis`);
}
    else if (sk % 5 == 0){
        console.log(`${sk} dalinasi is 5`);
    }
        else if (sk == 3){
            console.log(`${sk} yra lygus 3`);
        }
            else console.error('KLAIDA');

console.log();

// 2. Susikurkite tris skaičius. Tikrinkite (naudojant visas if sąlygos dalis):
// Ar pirmi du skaičiai lygūs?
// Ar pirmas ir trečias skaičiai lygūs?
// Ar trečias skaičius didesnis už pirmą?
// Ar antras skaičius lygus dvigubai trečio skaičiaus reikšmei?
// Ar pirmas skaičius dalinasi iš 3?
// Jei nieko nepavyko rasti, išveskite klaidos pranešimą.
console.log('---------------2-----------------');
let sk1 = 1, sk2 = 3, sk3 = 25;

if(sk1 == sk2){
    console.log(`${sk1} ir ${sk2} yra lygus`);
}
    else if (sk1 == sk3){
        console.log(`${sk1} ir ${sk3} yra lygus`);
    }
        else if (sk3 > sk1){
            console.log(`${sk3} yra didesnis uz ${sk1}`);
        }
            else if(sk2 == (sk3*2)){
                console.log(`${sk2} yra lygus ${sk3*2}`);
            }
                else if(sk1 % 3 == 0){
                    console.log(`${sk1} dalinasi is 3`);
                }
                    else console.error('KLAIDA');

console.log();

