const images = [
  "./img/carousel/carousel1.jpeg",
  "./img/carousel/carousel2.jpg",
  "./img/carousel/carousel3.jpeg",
  "./img/carousel/carousel4.png",
  "./img/carousel/carousel5.jpg",
  "./img/carousel/carousel6.png",
];

let nextBtn = document.querySelector(".next");
let preBtn = document.querySelector(".pre");
let interval;
let carouselImg = document.querySelector(".homeCarosal figure img");
let index = 0;

function showImg(index) {
  carouselImg.src = images[index];
}

function startCarousel() {
  interval = setInterval(() => {
    index = (index + 1) % images.length;
    showImg(index);
  }, 5000);
}

function stopCarousel() {
  clearInterval(interval);
}

startCarousel();

preBtn.addEventListener("click", () => {
  stopCarousel();

  if (index === 0) {
    index = images.length - 1;
  } else index--;

  showImg(index);
  startCarousel();
});

nextBtn.addEventListener("click", () => {
  stopCarousel();
  if (index === images.length - 1) index = 0;
  else index++;

  showImg(index);
  startCarousel();
});

//Electonic
let btnPre = document.querySelector(".nextPreSection button.elPreBtn ");
let btnNext = document.querySelector(".nextPreSection button.elNextBtn");

// let elctonicSec = document.querySelector(".elctonicSec");

// let electronicBtn = true;

// btnPre.addEventListener("click", () => {
//   elctonicSec.style.transform = "translate(0)";
//   btnNext.style.display = "block";
//   btnPre.style.display = "none";
// });
// btnNext.addEventListener("click", () => {
//   elctonicSec.style.transform = 'translate("-500px")';
//   btnNext.style.display = "none";
//   btnPre.style.display = "block";
// });
