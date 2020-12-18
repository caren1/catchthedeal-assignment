// Set the date we're counting down to
let countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

// Update the count down every 1 second
let countTheTime = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  setHour(hours);
  setMinutes(minutes);
  setSeconds(seconds);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(countTheTime);
    setHour('');
    setMinutes('');
    setSeconds('');
  }
}, 1000);
