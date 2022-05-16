const startingMinutes =1;
let time = startingMinutes * 10;

const countdownEl = document.getElementById('countdown')

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time% 60;

    countdownEl.innerHTML = +seconds;
    time--;
    time = time<0?0:time
}
