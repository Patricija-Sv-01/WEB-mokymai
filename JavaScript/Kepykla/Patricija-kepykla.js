let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function () {
    let employeesCount = parseInt(document.getElementById('employees-count').value);
    let employeeMakesPerDay = parseInt(document.getElementById('employee-makes-per-day').value);
    let dayReservations = parseInt(document.getElementById('day-reservations').value);

    let bakeryTotal = employeesCount * employeeMakesPerDay;
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

    // let logInfo = {
    //     bakeryTotal,
    //     isBakeryGonnaMakeIt
    // };
    // console.log(logInfo);

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p><strong>Kepykla per viena diena spes pagaminti: </strong>${bakeryTotal} kepalu</p>`;

    resultsDiv.innerHTML += `<p><strong>Jai reikia speti pagaminti: </strong>${dayReservations} kepalu</p>`;

    resultsDiv.innerHTML += `<p><strong>Ar kepykla spes pagaminti uzsakymus? </strong>${isBakeryGonnaMakeIt ? 'Taip' : 'Ne'}</p>`;
});

document.getElementById('employees-count').addEventListener('keyup', function (event) {
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    }
        else {
            event.target.classList.remove('error');
            event.target.nextElementSibling.classList.remove('show');
        }
});

document.getElementById('employee-makes-per-day').addEventListener('keyup', function (event) {
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    }
        else {
            event.target.classList.remove('error');
            event.target.nextElementSibling.classList.remove('show');
        }
});


document.getElementById('day-reservations').addEventListener('keyup', function (event) {
    let inputValue = event.target.valueAsNumber;

    if ((inputValue < 0) || (inputValue > 100)) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    }
        else {
            event.target.classList.remove('error');
            event.target.nextElementSibling.classList.remove('show');
        }
});

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('employees-count').value = 0;
    document.getElementById('employee-makes-per-day').value = 0;
    document.getElementById('day-reservations').value = 0;
    document.getElementById('results').innerHTML = '<p>Nieko nera kol kas</p>';
});