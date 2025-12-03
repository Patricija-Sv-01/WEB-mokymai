// 1. Susikurkite kintamąjį pasirinkimui saugoti, į jį įrašykite norimą reikšmę. Tikrinkite:
// Ar pasirinkimas lygus 1? Jei taip, išveskite, kad vartotojas laimėjo vandens.
// Ar pasirinkimas lygus 2? Jei taip, išveskite, kad vartotojas laimėjo limonadą.
// Ar pasirinkimas lygus 3? Jei taip, išveskite, kad vartotojas laimėjo arbatą.
// Ar pasirinkimas lygus 4? Jei taip, išveskite, kad vartotojas laimėjo kavą.
// Jei pasirinkimas neegzistuoja, išveskite klaidos pranešimą.
console.log();
console.log('------------1-----------');
let nr = 5;

switch(nr)
    {
        case 1: console.log('Laimejote vandens'); break;
        case 2: console.log('Laimejote limonada'); break;
        case 3: console.log('Laimejote arbata'); break;
        case 4: console.log('Laimejote kava'); break;
        default: console.error('Deja, mirsit is troskulio');
    }

console.log();

// 2.Susikurkite kintamuosius trims skaičiams saugoti ir priskirkite jiems reiškmes. Tikrinkite pirmą skaičių:
// Ar pirmas skaičius lygus 1? Jei taip, išvesti visų trijų skaičių sumą.
// Ar pirmas skaičius lygus 2? Jei taip, išvesti antro ir trečio skaičių sandaugą.
// Ar pirmas skaičius lygus 3? Jei taip, išvesti pirmo skaičiaus kvadratą.
// Jei nei vienas variantas netinka, išveskite klaidos pranešimą.
console.log('------------2-----------');

let sk1 = 3, sk2 = 8, sk3 = 2;
 switch(sk1) 
    {
        case 1: console.log(`${sk1 + sk2 + sk3}`); break;
        case 2: console.log(`${sk2 * sk3}`); break;
        case 3: console.log(`${sk1 ** 2}`); break;
        default: console.error(err);
    }

console.log();

// 3. Susikurkite kintamąjį klaidos kodui saugoti, jam priskirkite kokį nors klaidos kodą. Tikrinkite koks tai klaidos kodas (bent 3 skirtingus variantus), ties kiekvienu jų išveskite skirtingą tekstą, nurodantį, kad bus atliekami skirtingi veiksmai.
console.log('------------3-----------');
let error1 = 404;

switch(error1)
    {
        case 400: console.log('yapa yapa yapa'); break;
        case 404: console.log('Cannot find page'); break;
        case 555: console.log('LALALALALALALA'); break;
        default: console.log('Everything is chill');
    }

console.log();
