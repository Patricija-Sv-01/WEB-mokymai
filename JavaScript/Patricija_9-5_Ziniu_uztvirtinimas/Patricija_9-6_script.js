let darboVal = 8;

// Cia bus suvedami duoemnys
let kiekisVal = 3, darbuotojai = 5, savikaina = 8, kainaKep = 10, uzsakymai = 150;

// Kiek kepykla per vieną darbo dieną spės iškepti duonos kepalų.
let pirmas = darboVal * kiekisVal * darbuotojai;
console.log(`Per viena darbo diena kepykla iskeps ${pirmas} duonos kepalu`);

console.log();

// Visų kepalų savikainą, gautas pajamas pardavus ir iš to gauto pelno dalį.
let antras = savikaina * pirmas;
let trecias = pirmas * kainaKep;
let ketvirtas = trecias - antras;

console.log(`Visų kepalų savikainą: ${antras} 
    \nGautos pajamos pardavus: ${trecias}
    \nIš to gauto pelno dalis: ${ketvirtas}`);

console.log();

// Patikrinti ar kepykla spės iškepti visus tos dienos užsakymus. Jei ne, suskaičiuoti kiek kepalų nespės iškepti.
if(pirmas >= uzsakymai){
    console.log('Kepykla spes iskepti kepalus');
}
    else{
            let nespesSk = uzsakymai - pirmas;
            console.log(`Nespes iskepti dar ${nespesSk} kepalu`);
    }

console.log();

// Įvertinkite tai, kad pajamas ir pelną galite gauti tik iš parduotų kepalų.
console.log('Įvertine tai, kad pajamas ir pelną gali gauti tik iš parduotų kepalų:\n');

let antras2 = savikaina * uzsakymai;
let trecias2 = uzsakymai * kainaKep;
let ketvirtas2 = trecias2 - antras2;

console.log(`Pajamos: ${trecias2}
    \nPelnas: ${ketvirtas2}`);

console.log();

