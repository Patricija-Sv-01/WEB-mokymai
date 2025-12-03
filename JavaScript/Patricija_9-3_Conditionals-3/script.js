// 1. Susikurkite skaičiaus kintamąjį. Patikrinkite ar jis yra lyginis, jei taip išveskite vieną informaciją, jei ne - kitą.
console.log('------------1---------');
let sk1 = 7;

if(sk1 % 2 == 0){
    console.log(`${sk1} yra lyginis`);
}
    else console.log(`${sk1} nera lyginis`);

console.log();

// 2. Susikurkite skaičiaus kintamąjį. Patikrinkite ar šis skaičius dalinasi iš 7, jei taip išveskite vieną tekstą, jei ne - kitą.
console.log('------------2---------');
let sk2 = 8;

if(sk2 % 7 == 0){
    console.log(`${sk2} dalinasi is 7`);
}
    else console.log(`${sk2} nesidalina is 7`);

console.log();

// 3. Susikurkite kintamąjį, kuriame nurodytumėte kelią iki norimo failo. Patikrinkite ar šis failas yra .js tipo, jei taip išveskite vieną tekstą, jei ne - kitą.
console.log('------------3---------');
let failas = 'JavaScript/Patricija_9-3_Conditionals-3/script.js';

if(failas.endsWith('.js')){
    console.log('Failas yra .js tipo');
}
    else console.log('Failas nera .js tipo');

console.log();