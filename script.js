// const animation = document.querySelector(".move div");
// const tombol = document.querySelector(".button");
// const pagefirst = document.querySelector(".first");
// const pagesec = document.querySelector(".second");
// var musik = "musik.mp3";
// var audio = document.querySelector(".audio");
// audio.src = musik;

// tombol.addEventListener("click", function () {
//   audio.play();
//   animation.classList.add("page-transition");
//   animation.parentElement.classList.remove("hide");
//   setTimeout(function () {
//     pagefirst.classList.add("hide");
//     pagesec.classList.remove("hide");
//   }, 400);
//   setTimeout(function () {
//     animation.parentElement.classList.add("hide");
//   }, 1500);
//   var i = 0;
//   var speed = 100;
//   const ucapanSurat = "Taqabbalallahu Minna Wa Minkum <br> Minal Aidzin Wal Faidzin <br> jangan lupa pitrahnya kak <br> ❤️";
//   function typewriter() {
//     const char = ucapanSurat.charAt(i);
//     if (char === "<") {
//       const tagEnd = ucapanSurat.indexOf(">", i) + 1;
//       document.getElementById("text").innerHTML += ucapanSurat.substring(i, tagEnd);
//       i = tagEnd;
//     } else {
//       document.getElementById("text").innerHTML += ucapanSurat.charAt(i);
//       i++;
//     }
//     if (i < ucapanSurat.length) {
//       setTimeout(typewriter, speed);
//     }
//   }
//   typewriter();
//   const backButton = document.getElementById("backButton");
//   backButton.addEventListener("click", function () {
//     audio.pause();
//     pagesec.classList.add("hide");
//     pagefirst.classList.remove("hide");
//     i = 0;
//     ucapanSurat.normalize;
//   });
// });

// cobain code
const animation = document.querySelector(".move div");
const tombol = document.querySelector(".button");
const pagefirst = document.querySelector(".first");
const pagesec = document.querySelector(".second");
var musik = "musik.mp3";
var audio = document.querySelector(".audio");
audio.src = musik;
let intervalId;
let i;
let ucapanSurat;
let speed = 100;

const kirimpesan = document.getElementById("wa");
var message = "berapa nomor rekening nya, sini aku isiin..";
const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;

kirimpesan.addEventListener("click", function () {
  window.open(whatsappLink);
});

function resetTypewriter() {
  audio.pause();
  audio.currentTime = 0;
  document.getElementById("text").innerHTML = "";
  clearInterval(intervalId);
  i = 0;
  ucapanSurat = "Taqabbalallahu Minna Wa Minkum \n Minal Aidzin Wal Faidzin \n kalo ada salah minta THRnya \n ❤️";
}

function typewriter() {
  const char = ucapanSurat.charAt(i);
  if (char === "\n") {
    document.getElementById("text").innerHTML += "<br>";
    i++;
  } else {
    document.getElementById("text").innerHTML += ucapanSurat.charAt(i);
    i++;
  }
  if (i === ucapanSurat.length) {
    clearInterval(intervalId);
    // const button = document.createElement("button");
    // button.innerHTML = "Reset";
    // button.addEventListener("click", function () {
    //   resetTypewriter();
    // });
    // document.getElementById("text").appendChild(button);
  }
}

tombol.addEventListener("click", function () {
  resetTypewriter();
  audio.play();
  animation.classList.add("page-transition");
  animation.parentElement.classList.remove("hide");
  setTimeout(function () {
    pagefirst.classList.add("hide");
    pagesec.classList.remove("hide");
  }, 400);
  setTimeout(function () {
    animation.parentElement.classList.add("hide");
  }, 1500);
  intervalId = setInterval(typewriter, speed);
});

const backButton = document.getElementById("backButton");

backButton.addEventListener("click", function () {
  pagesec.classList.add("hide");
  pagefirst.classList.remove("hide");
  resetTypewriter();
});
