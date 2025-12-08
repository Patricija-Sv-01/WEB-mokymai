// --------- PICKING A RECIPE ----------

let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', function () {

        for(let j = 0; j < cards.length; j++){
            cards[j].querySelector('.checkmark').classList.remove('show');
        }
        
        cards[i].querySelector('.checkmark').classList.add('show');

    });
}
// --------------------------------------

// --------------- CHOOSING A NUMBER ---------------

