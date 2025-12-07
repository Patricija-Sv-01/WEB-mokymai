
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function() {
    
    let ilgis = parseInt(document.getElementById('ilgis').value);
    let plotis = parseInt(document.getElementById('plotis').value);
    let gylis = parseInt(document.getElementById('gylis').value);
    let kiekis = parseInt(document.getElementById('kiekis').value);

    let kubaturaVieno = (ilgis * plotis * gylis) / 1000000;
    let galutineKub = kubaturaVieno * kiekis;
    let kainaVieno = kubaturaVieno * 250;

    let results = document.querySelector('.results');

    results.innerHTML = `<p><strong>Kubtūra visų lentų:</strong> ${galutineKub}m³</p>`;

    results.innerHTML += `<p><strong>Kaina ${kiekis} lentų: </strong>${kainaVieno * kiekis} eurai.</p>`;
});

document.getElementById('ilgis').addEventListener('keyup', function(event){
    
    let inputNr = event.target.valueAsNumber;

    if(inputNr <= 0){
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    }
        else {
            event.target.classList.remove('error');
            event.target.nextElementSibling.classList.remove('show');
        }
});

document.getElementById('plotis').addEventListener('keyup', function(event){
    
    let inputNr = event.target.valueAsNumber;

    if(inputNr <= 0){
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    }
        else {
            event.target.classList.remove('error');
            event.target.nextElementSibling.classList.remove('show');
        }
});

document.getElementById('gylis').addEventListener('keyup', function(event){
    
    let inputNr = event.target.valueAsNumber;

    if(inputNr <= 0){
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    }
        else {
            event.target.classList.remove('error');
            event.target.nextElementSibling.classList.remove('show');
        }
});

document.getElementById('kiekis').addEventListener('keyup', function(event){
    
    let inputNr = event.target.valueAsNumber;

    if(inputNr <= 0){
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    }
        else {
            event.target.classList.remove('error');
            event.target.nextElementSibling.classList.remove('show');
        }
});

document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('ilgis').value = 0;
    document.getElementById('plotis').value = 0;
    document.getElementById('gylis').value = 0;
    document.getElementById('kiekis').value = 0;
    document.querySelector('.results').innerHTML = '<p>Duomenys nėra įvesti</p>';
})
