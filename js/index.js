const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`October 13 ${currentYear} 00:00:00`);


// start of my code
const days2 = document.getElementById('days2');
const hours2 = document.getElementById('hours2');
const minutes2 = document.getElementById('minutes2');
const seconds2 = document.getElementById('seconds2');
const countdown2 = document.getElementById('countdown2');
let inputDate = new Date(document.getElementById('start').value);


function countWithYourDate(){
  const currentTime2 = new Date();
  const diff2 = inputDate - currentTime2;
  
  const d = Math.floor(diff2 / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff2 / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff2 / 1000 / 60) % 60;
  const s = Math.floor(diff2 / 1000) % 60;

  days2.innerHTML = d;
  hours2.innerHTML = h < 10 ? '0' + h : h;
  minutes2.innerHTML = m < 10 ? '0' + m : m;
  seconds2.innerHTML = s < 10 ? '0' + s : s;
}
setTimeout(() => {
  loading.remove();
  countdown2.style.display = 'flex';
}, 1000);

setInterval(countWithYourDate, 1000);

// end of my code


  // Set background year
year.innerText = currentYear;

//Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);

//slides

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
 
function nextSlide(){
    slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
};








