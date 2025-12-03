// 1. Susikurkite tris kintamuosius skaičiams saugoti. Parašykite šias atskiras if sąlygas:
console.log('--------------1-----------');
let a = 1, b = 10, c = 9;

if(a == b)
{
    console.log(`${a} ir ${b} yra lygus`);
}
else console.log(`${a} ir ${b} nera lygus`);

if(a == c)
{
    console.log(`${a} ir ${c} yra lygus`)
}
else console.log(`${a} ir ${c} nera lygus`);

if(a > b){
    console.log(`${a} yra diesnis uz ${b}`);
}
else console.log(`${a} nera didesnis uz ${b}`);

if(b > (c*2)){
    console.log(`${b} yra diesnis uz ${c*2}`);
}
else console.log(`${b} nera didesnis uz ${c*2}`);

if(a % 2 == 0){
    console.log(`${a} yra lyginis`);
}
else console.log(`${a} nera lyginis`);

if(b % 2 != 0){
    console.log(`${b} nera lyginis`);
}
else console.log(`${b} yra lyginis`);

if(c > 0){
    console.log(`${c} yra teigiamas`);
}
else console.log(`${c} nera teigiamas`);

if(a < 0){
    console.log(`${a} yra neigiamas`);
}
else console.log(`${a} nera neigiamas`);

if(b % 4 == 0){
    console.log(`${b} dalinasi is 4`);
}
else console.log(`${b} nesidalina is 4`);

if(c % 8 == 0){
    console.log(`${c} dalinasi is 8`);
}
else console.log(`${c} nesidalina is 8`);

// 2. usikurkite kintamąjį vartotojo amžiui saugoti. Patikrinkite ar amžius yra didesnis arba lygus 18-ai, jei taip - išveskite “jūs galite balsuoti”.
console.log('--------------2-----------');
let amzius = 19;

if(amzius >= 18){
    console.log('Jus galite balsuoti');
}
else console.log('Jus negalite balsuoti');

// 3. Susikurkite kelis kintamuosius saugoti pažymiams. Raskite šių pažymių vidurkį. Patikrinkite ar vidurkis teigiamas (daugiau arba lygu 5-iems), jei taip - išveskite “vidurkis teigiamas”.
console.log('--------------3-----------');
let paz1 = 2, paz2 = 5, paz3 = 10;

let vidurkis1 = (paz1 + paz2 + paz3);

if(vidurkis1 >= 5){
    console.log('Vidurkis teigiamas');
}
else comsole.log('Vidurkis neigiamas');

// 4. Susikurkite skaičiaus kintamąjį. Atlikite šiuos patikrinimus ir veiksmus:
// Jei skaičius dalinasi iš 5, tuomet išveskite šio skaičiaus daugybos lentelę nuo 1 iki 5.
// Jei skaičius lyginis, tuomet išveskite šį skaičių, jo kvadratą ir jį padalintą iš 2.
// Jei skaičius nesidalina iš 7, tuomet susikurkite antrąjį kintamąjį, išveskite šių dviejų skaičių sumą, skirtumą, sandaugą, dalmenį.
console.log('--------------4-----------');
let skaicius = 10;

if(skaicius % 5 == 0){
    for(let i = 1; i<=5; i++){
    console.log(`${skaicius} * ${i} = ${i*skaicius}`);
    }
}
else console.log('Skaicius nesidalina is 5');

console.log();

if(skaicius % 2 == 0){
    console.log(`${skaicius}, ${skaicius ** 2}, ${skaicius / 2}`);
}
else console.log('Skaicius nesidalina is 2');

console.log();

let skaicius2 = 49;
if(skaicius % 7 != 0){
    console.log(`Suma: ${skaicius + skaicius2}
        \nSkirtumas: ${skaicius - skaicius2}
        \nSanduga: ${skaicius * skaicius2}
        \nDalmuo: ${skaicius / skaicius2}`);
}
else console.log('Skaicius dalinasi is 7');

