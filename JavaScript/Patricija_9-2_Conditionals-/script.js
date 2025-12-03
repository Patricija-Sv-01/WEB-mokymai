// 1. Susikurkite tris skaičių kintamuosius. Patikrinkite šias sąlygas (naudojant else if dalis):
// Ar pirmas skaičius didesnis už antrą?
// Ar antras skaičius didesnis už trečią?
// Ar trečias skaičius didesnis už pirmą?
// Ar pirmi du skaičiai yra lygūs?
// Ar paskutiniai du skaičiai yra lygūs?
// Ar pirmas skaičius yra lygus 0?
// Ar antras skaičius neigiamas?
// Ar trečias skaičius teigiamas?
console.log('---------1---------');
let sk1 =  1, sk2 = 5, sk3 = 8;

if(sk1 > sk2){
    console.log(`${sk1} didesnis uz ${sk2}`);
}
    else if(sk2 > sk1){
        console.log(`${sk1} mazesnis uz ${sk2}`);
    }
        else if(sk1 == sk2){
            console.log(`${sk1} ir ${sk2} yra lygus`);
        }

console.log();

if(sk2 > sk3){
    console.log(`${sk} didesnis uz ${sk3}`);
}
    else if(sk2 < sk3){
        console.log(`${sk2} mazesnis uz ${sk3}`);
    }
        else if(sk2 == sk3){
            console.log(`${sk2} ir ${sk3} yra lygus`);
        }

console.log();

if(sk3 > sk1){
    console.log(`${sk3} didesnis uz ${sk1}`);
}
    else if(sk3 < sk1){
        console.log(`${sk3} mazesnis uz ${sk1}`);
    }
        else if(sk3 == sk1){
            console.log(`${sk3} ir ${sk1} yra lygus`);
        }


console.log();

if(sk1 == sk2){
    console.log(`Skaiciai yra lygus (${sk1} ir ${sk2})`);
}
    else if(sk3 == sk2){
        console.log(`Skaiciai yra lygus (${sk2} ir ${sk3})`);
    }
        else console.log('Visi skaiciai yra nelygus');

console.log();

if(sk1 == 0){
    console.log(`${sk1} yra lygus 0`);
}
else console.log(`${sk1} nera lygus 0`);

console.log();

if(sk2 < 0){
    console.log(`${sk2} yra neigiamas`);
}
else console.log(`${sk2} yra teigiamas`);

console.log();

if(sk3 > 0){
    console.log(`${sk3} yra teigiamas`);
}
else console.log(`${sk3} yra neigiamas`);

// 2. Susikurkite kintamąjį egzamino pažymiui saugoti [0-10]. Naudojant else if dalis patikrinkite šias sąlygas ir išveskite atitinkamą tekstą:
// Jei pažymys yra lygus 10 išvesti “puiku”.
// Jei pažymys yra lygus arba didesnis nei 9 išvesti “labai gerai”.
// Jei pažymys yra lygus arba didesnis nei 7 išvesti “gerai”.
// Jei pažymys yra lygus arba didesnis nei 5 išvesti “patenkinamai”.
// Jei pažymys mažesnis nei 5 išvesti “egzaminas neišlaikytas”.
console.log('---------2---------');
let paz = 8;

if(paz == 10){
    console.log('puiku');
}
    else if((paz < 10) && (paz >= 9)){
        console.log('labai gerai');
    }
        else if((paz <= 8) && (paz >= 7)){
            console.log('gerai');
        }
            else if((paz >= 5) && (paz <= 6)){
                console.log('patenkinimai');
            }
                else if(paz < 5){
                    console.log('egzaminas neislaikytas')
                }