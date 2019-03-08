const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const intervalTime = 10;

const DAYS = document.getElementById('days');
const HOURS = document.getElementById('hours');
const MINUTES = document.getElementById('minutes');
const SECONDS = document.getElementById('seconds');
const MILIS = document.getElementById('milliseconds');

var countDown = new Date(Date.parse('2019-07-01'));

function update() {
  let now = new Date().getTime();
  let distance = countDown - now;
  DAYS.innerText = Math.floor(distance / (day));
  HOURS.innerText = Math.floor((distance % (day)) / hour);
  MINUTES.innerText = Math.floor((distance % (hour)) / minute);
  SECONDS.innerText = Math.floor((distance % (minute)) / second);
  MILIS.innerText = Math.floor((distance % (second)) / 10);
}

setInterval(update, intervalTime);
