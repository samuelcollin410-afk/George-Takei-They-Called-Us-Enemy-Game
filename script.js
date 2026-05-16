const titleScreen = document.getElementById("titleScreen");
const creditsScreen = document.getElementById("creditsScreen");
const chapterScreen = document.getElementById("chapterScreen");
const gameScreen = document.getElementById("gameScreen");

const playBtn = document.getElementById("playBtn");
const creditsBtn = document.getElementById("creditsBtn");
const extraBtn = document.getElementById("extraBtn");

const chapterBackBtn = document.getElementById("chapterBackBtn");
const creditsBackBtn = document.getElementById("creditsBackBtn");
const actsButton = document.getElementById("actsButton");

const act1Btn = document.getElementById("act1Btn");

const blackScreen = document.getElementById("blackScreen");
const bangText = document.getElementById("bangText");
const locationText = document.getElementById("locationText");

let act1Step = 0;

function hideAllScreens() {
  titleScreen.classList.add("hidden");
  creditsScreen.classList.add("hidden");
  chapterScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
}

playBtn.addEventListener("click", () => {
  hideAllScreens();
  chapterScreen.classList.remove("hidden");
});

creditsBtn.addEventListener("click", () => {
  hideAllScreens();
  creditsScreen.classList.remove("hidden");
});

extraBtn.addEventListener("click", () => {
  alert("This can later become Settings, Gallery, or Bonus Content.");
});

chapterBackBtn.addEventListener("click", () => {
  hideAllScreens();
  titleScreen.classList.remove("hidden");
});

creditsBackBtn.addEventListener("click", () => {
  hideAllScreens();
  titleScreen.classList.remove("hidden");
});

act1Btn.addEventListener("click", () => {
  hideAllScreens();

  act1Step = 0;

  actsButton.classList.remove("hidden");

  blackScreen.classList.remove("hidden");
  blackScreen.classList.add("show");

  bangText.classList.remove("hidden", "swipeAway");
  locationText.classList.add("hidden");

  setTimeout(() => {
    bangText.classList.add("showText");
    act1Step = 1;
  }, 2000);
});

blackScreen.addEventListener("click", () => {
  if (act1Step === 1) {
    act1Step = 2;

    bangText.classList.add("swipeAway");

    setTimeout(() => {
      bangText.classList.add("hidden");

      locationText.classList.remove("hidden");
      locationText.classList.add("showLocation");
    }, 800);

    setTimeout(() => {
      blackScreen.classList.add("hidden");
      blackScreen.classList.remove("show");

      locationText.classList.add("hidden");
      locationText.classList.remove("showLocation");

      gameScreen.classList.remove("hidden");
    }, 4800);
  }
});

actsButton.addEventListener("click", () => {
  hideAllScreens();

  blackScreen.classList.add("hidden");
  blackScreen.classList.remove("show");

  bangText.classList.remove("showText", "swipeAway");
  locationText.classList.remove("showLocation");

  chapterScreen.classList.remove("hidden");
  actsButton.classList.add("hidden");

  act1Step = 0;
});