// Sfruttiamo le timing functions per fare il conto alla rovescia per la fine di quest'anno!
// Che scadra' quindi a capodanno!

const daysEl = document.querySelector('span#days');
const hoursEl = document.querySelector('span#hours');
const minutesEl = document.querySelector('span#minutes');
const secondsEl = document.querySelector('span#seconds');



// mi salvo la data che voglio raggiungere

const newYearsEveDate = new Date (2024, 0, 1, 0, 0, 0, 0);





const timer = setInterval( function (){
    // trovo il momento attuale
    const nowDate = new Date ();


    const dateDifference = newYearsEveDate.getTime() - nowDate.getTime();


    const seconds = Math.floor((dateDifference % (60 * 1000)) / 1000);
    const minutes = Math.floor((dateDifference % (60 * 60 * 1000)) / (1000 * 60));
    const hours = Math.floor((dateDifference % (60 * 60 * 24 * 1000)) / (100 * 60 * 60));
    const days = Math.floor((dateDifference / (60 * 60 * 24 * 1000)));


    if ( dateDifference <= 0){
        clearInterval(timer);
        document.querySelector('main .text-container h2').innerHTML = 'HAPPY 2024!!!';
    }
}, 1000);