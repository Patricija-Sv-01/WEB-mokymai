// 1. Parašyti for, kuris išvestų kiekvieną skaičių pradedant nuo 0 ir baigiant 10. 
console.log('----------------1---------------');

for(let i = 0; i <= 10; i++)
    {
        console.log(`${i}`);
    }

console.log();

// 2. Parašyti for, kuris išvestų kas antrą skaičių pradedant 0 ir baigiant 15.
console.log('----------------2---------------');

for(let i = 0; i <= 15; i +=2)
    {
        console.log(`${i}`);
    }

console.log();

// 3. Parašyti for, kuris išvestų kas trečią skaičių, pradedant 1 ir baigiant 20. Kiekvieną skaičių apskliausti laužtiniais skliaustais. Pvz.: [1][4][7]...
console.log('----------------3---------------');

for(let i = 1; i <= 20; i+=3)
    {
        console.log(`[${i}]`);
    }

console.log();

// 4. Parašyti for, kuris eitų pro kiekvieną skaičių nuo 1 iki 20. Jame apsirašyti if sąlygą, kuri patikrintų ar dabartinis skaičius dalinasi iš 4, jei taip tai šį skaičių išvesti.
console.log('----------------4---------------');

for(let i = 1; i < 20; i++)
    {
        if(i % 4 == 0)
            {
                console.log(`${i} dalinasi iš 4`);
            }
    }

console.log();

// 5. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei atskiriant tarpu - tų skaičių kvadratus.
console.log('----------------5---------------');
let start  = 0, end = 10;

if(start < end)
    {
        for(let i = start; i <= end; i++)
            {
                console.log(`${i}   ${i ** 2}`);
            }
    }

console.log();
// 6. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos, kurie dalinasi iš 8.
console.log('----------------6---------------');
let start2 = 1, end2 = 15;

if(start2 < end2)
    {
        for(let i = start2; i <= end2; i++)
            {
                if(i % 2 != 0 || i % 8 == 0)
                    {
                        console.log(`${i} yra nelyginis skaičius arba dalinasi iš 8`);
                    }
            }
    }

console.log();
// 7.(papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaičius.
console.log('----------------7---------------');
let a = 2, b = 7, suma = 0;

for(let i = 1; i <= b; i++)
    {
        suma += a;
    }
console.log(`${suma}`);

console.log();



