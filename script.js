const displayTime = document.querySelector('.display-time');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let milleseconds = 0;
let seconds = 0;
let minutes = 0;
let intervalId = null;


start.addEventListener("click", (e) => {

    intervalId = setInterval(() => {
        
        milleseconds += 10;
        if (milleseconds >= 1000) {
            milleseconds = 0;
            seconds++;
            if (intervalId !== null) return;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        const m = String(minutes).padStart(2, "0");
        const s = String(seconds).padStart(2, "0");
        const ms = String(Math.floor(milleseconds / 10)).padStart(2, "0");
        displayTime.innerHTML = `${m}:${s}:${ms}`
        start.disabled = true;

    }, 10);
});


stop.addEventListener("click", (e) => {

    clearInterval(intervalId);
    intervalId = null;
    start.disabled = false;

})


reset.addEventListener("click", (e) => {

    clearInterval(intervalId);
    intervalId = null;
    start.disabled = false;
    milleseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTime.innerHTML = `00:00:00`;
    intervalId = null;

})


document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {
        event.preventDefault(); 

        if (intervalId === null) {
            start.click(); 
        } else {
            stop.click(); 
        }
    }

    if (event.key === "r" || event.key === "R") {
        reset.click(); 
    }

});
