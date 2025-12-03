// 1. Aprašykite ir išveskite (atskirose eilutėse) kintamuosius, saugančius šią informaciją apie studentą:
let vardas = "Patricija", pavarde = "Svencionyte", amzius = 19, ugis = 176.5, svoris = 55, aukstojiMokykla = "Laisvas Paukstis", akademinesGrKodas = undefined, kursas = "pirmas", studProgPav = "Web", AtsKredSk = 5;

console.log('---------------------1--------------------');
console.log('Vardas:', vardas);
console.log('Pavarde:', pavarde);
console.log('Amzius:', amzius, 'metu');
console.log('Ugis:', ugis,'cm');
console.log('Svoris:', svoris, 'kg');
console.log('Aukstoji mokykla:', aukstojiMokykla);
console.log('Akademines grups kodas:', akademinesGrKodas);
console.log('Kursas:', kursas);
console.log('Studijų programos pavadinimas:', studProgPav);
console.log('Atsiskaitytų kreditų skaičius:', AtsKredSk);
console.log('------------------------------------------');

// 2. Aprašykite ir išveskite (atskirose eilutėse) kintamuosius, saugančius šią informaciją apie miestą:
let pavadinimas = "Klaipeda", valstybe = "Lithuania", apskritis = "Klaipedos", ikurData = "1252-08-01", meras = 'Arvydas Vaitkus', plotas = 98, gyvSk = 161205;

console.log('---------------------2--------------------');
console.log('Pavadinimas:', pavadinimas);
console.log('Valstybe:', valstybe);
console.log('Apskritis:', apskritis);
console.log('Ikurimo data:', ikurData);
console.log('Meras:', meras);
console.log('Plotas kv. m.:', plotas, 'kv. m.');
console.log('Gyventoju skacius', gyvSk);
console.log('------------------------------------------');

// 3. Susikurkite kintamąjį savo vardui saugoti. Išveskite į konsolę tekstą "mano vardas yra " ir turimo kintamojo reikšmę.
let manoVardas = 'Patricija';
console.log('---------------------3--------------------');
console.log('Mano vardas yra', manoVardas);
console.log('------------------------------------------');

// 4. Susikurkite kintamuosius studento akademinei grupei ir vidurkiui saugoti. Išveskite į konsolę, atskirose eilutėse pagalbinius tekstus, po kurių sektų dvitaškis ir atitinkamas kintamasis.
let akaGr= 'ifzm-6', vid = '2';
console.log('---------------------4--------------------');
console.log('Akademine grupe: ', akaGr, '\nVidurkis: ', vid);
console.log('------------------------------------------');

// 5. Susikurkite kintamąjį, kuris saugotų bet kokį žodį. Išveskite šį žodį naudojant vieną console.log(). Žodis turi būti išvestas 5 kartus toje pačioje eilutėje, neatskiriant jokiu tarpu.
console.log('---------------------5--------------------');
let randomSk = '5';
let masyvas =[];
    for(let i = 0; i<5; i++)
    {
        masyvas += randomSk;
    }
console.log(masyvas);

console.log('ARBA');

console.log(randomSk + randomSk + randomSk + randomSk + randomSk);
console.log('------------------------------------------');

// 6. Susikurkite šiuos kintamuosius, saugančius informaciją apie gyvūną: pavadinimas, amžius, kailio spalva, svoris. Išveskite šiuos duomenis gražiai suformatuotus vienoje eilutėje, sakinio forma. Pavyzdžiui:
console.log('---------------------6--------------------');
let gyvunas = 'suo', amzius2 = 2, kailioSpalva = 'ruda', svoris2 = 1.4;
console.log(`Gyvunas - ${gyvunas} (${amzius} m.) turi ${kailioSpalva} kailio spalva ir sveria ${svoris} kg.`);
console.log('------------------------------------------');

// 7. Susikurkite skaičiaus kintamąjį, kurį išveskite penkis kartus toje pačioje eilutėje be tarpų tarp šių skaičių. Pavyzdžiui:
console.log('---------------------7--------------------');
let sk = '25';
let masyvas2 = [];

    for(let i=0; i<5; i++)
    {
        masyvas2 += sk;
    }

console.log(`skaicius - ${sk}, rezultatas - ${masyvas2}`);
console.log('------------------------------------------');

// 8. Susikurkite skaičiaus kintamąjį, kurį išveskite penkis kartus toje pačioje eilutėje su tarpais tarp šių skaičių. Pavyzdžiui:
let sk2 = 25;
console.log(`skaicius - ${sk2}, rezultatas - ${sk2} ${sk2} ${sk2} ${sk2} ${sk2}`);

// 9. Susikurkite kintamąjį, kuriame saugosite norimą simbolį (pavyzdžiui: *). Išveskite tuščiavidurį, norimo dydžio, kvadratą iš turimo simbolio.
console.log('---------------------8--------------------');
console.log("+ + + + + +\n+         +\n+         +\n+         n+\n+ + + + + +");


