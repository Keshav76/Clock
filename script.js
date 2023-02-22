const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector(".digital-clock");

function setDate() {
    const now = new Date();

    var hr = now.getHours() % 12;
    if (hr == 0) hr = 12;
    if (hr < 10) hr = "0" + hr;
    
    var mn = now.getMinutes();
    if (mn < 10) mn = "0" + mn;
    
    var sc = now.getSeconds();
    if (sc < 10) sc = "0" + sc;

    dateAnalog = hr + ":" + mn + ":" + sc;

    digitalClock.innerHTML = dateAnalog;

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

