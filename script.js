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
const locationText = document.getElementById("locationText");
const continueTip = document.getElementById("continueTip");

const bang1 = document.querySelector(".bang1");
const bang2 = document.querySelector(".bang2");
const bang3 = document.querySelector(".bang3");
const introText = document.getElementById("introText");

const sceneText = document.getElementById("sceneText");
const choiceButtons = document.getElementById("choiceButtons");

const askFatherBtn = document.getElementById("askFatherBtn");
const stayQuietBtn = document.getElementById("stayQuietBtn");

const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");








let resultActive = false;

let act1Step = 0;

function hideAllScreens() {
  titleScreen.classList.add("hidden");
  creditsScreen.classList.add("hidden");
  chapterScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
}

function resetOpening() {
  blackScreen.classList.remove("show");
  blackScreen.classList.add("hidden");

  bang1.classList.remove("showBang", "swipeAway");
  bang2.classList.remove("showBang", "swipeAway");
  bang3.classList.remove("showBang", "swipeAway");

  
  bang1.classList.remove("hidden");
 bang2.classList.remove("hidden");
bang3.classList.remove("hidden");
  
  
  locationText.classList.add("hidden");
  locationText.classList.remove("showLocation");

  continueTip.classList.add("hidden");
  continueTip.classList.remove("showTip");
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
  resetOpening();

  act1Step = 0;

  actsButton.classList.remove("hidden");

  blackScreen.classList.remove("hidden");
  blackScreen.classList.add("show");

  setTimeout(() => {
    bang1.classList.add("showBang");
  }, 2200);

  setTimeout(() => {
    bang2.classList.add("showBang");
  }, 2900);

  setTimeout(() => {
    bang3.classList.add("showBang");
    continueTip.classList.remove("hidden");
    continueTip.classList.add("showTip");
    act1Step = 1;
  }, 3600);
});

blackScreen.addEventListener("click", () => {

  /* AFTER BANGS */

  if (act1Step === 1) {

    act1Step = 2;

    continueTip.classList.add("hidden");
    continueTip.classList.remove("showTip");

    bang1.classList.add("swipeAway");
    bang2.classList.add("swipeAway");
    bang3.classList.add("swipeAway");

    setTimeout(() => {
  bang1.classList.add("hidden");
  bang2.classList.add("hidden");
  bang3.classList.add("hidden");
}, 900);
    
    
    
    setTimeout(() => {
      locationText.classList.remove("hidden");
      locationText.classList.add("showLocation");

      continueTip.classList.remove("hidden");
      continueTip.classList.add("showTip");
    }, 900);

    return;
  }

  /* AFTER CALIFORNIA */

  if (act1Step === 2) {

    act1Step = 3;

    locationText.classList.add("fadeOutIntro");

    setTimeout(() => {

      locationText.classList.add("hidden");
      locationText.classList.remove("showLocation");
      locationText.classList.remove("fadeOutIntro");

      introIndex = 0;

      introText.innerText = introLines[introIndex];

      introText.classList.remove("hidden");
      introText.classList.add("showIntro");

    }, 500);

    return;
  }

  /* INTRO TEXT PROGRESSION */

  if (act1Step === 3) {

    introText.classList.remove("showIntro");
    introText.classList.add("fadeOutIntro");

    setTimeout(() => {

      introText.classList.remove("fadeOutIntro");

      introIndex++;

      if (introIndex < introLines.length) {

        introText.innerText = introLines[introIndex];

        void introText.offsetWidth;

        introText.classList.add("showIntro");

      } else {

        introText.classList.add("hidden");

        blackScreen.classList.add("hidden");
        blackScreen.classList.remove("show");
sceneText.style.display = "block";
choiceButtons.style.display = "flex";
resultBox.classList.add("hidden");

gameScreen.classList.remove("hidden");
      }

    }, 500);
  }

});

actsButton.addEventListener("click", () => {
  act1Step = 0;

  resetOpening();

  hideAllScreens();
  chapterScreen.classList.remove("hidden");

  actsButton.classList.add("hidden");
});

const introLines = [
  "You are George Takei, a young Japanese American boy living with your family in Los Angeles.",

  "As war between the United States and Japan rapidly escalates, fear and suspicion begin spreading across America.",

  "Soon, George and his family will be forced to leave behind everything they know."
];

let introIndex = 0;

const askFatherLines = [
  "Father: “Stay with your mother, George.”",
  "His voice is calm… but something feels wrong.",
  "Your father slowly walks toward the front door and opens it."
];

const stayQuietLines = [
  "You stay frozen behind your father, too nervous to speak.",
  "Your father slowly walks toward the front door and opens it."
];

let currentResultLines = [];
let currentResultIndex = 0;

function startChoiceResult(lines) {
  sceneText.style.display = "none";
  choiceButtons.style.display = "none";

  resultActive = true;

  currentResultLines = lines;
  currentResultIndex = 0;

  resultText.textContent = currentResultLines[currentResultIndex];

  resultBox.classList.remove("hidden");
  resultBox.classList.remove("fadeIn");

  void resultBox.offsetWidth;

  resultBox.classList.add("fadeIn");
}

function nextResultLine() {
  currentResultIndex++;

  if (currentResultIndex < currentResultLines.length) {
    resultBox.classList.remove("fadeIn");

    setTimeout(() => {
      resultText.textContent = currentResultLines[currentResultIndex];

      void resultBox.offsetWidth;
      resultBox.classList.add("fadeIn");
    }, 150);

  } else {
    resultActive = false;
    resultText.textContent = "The door opens.";

    setTimeout(() => {
      gameScreen.classList.add("hidden");

      blackScreen.classList.remove("hidden");
      blackScreen.classList.add("show");

      locationText.classList.add("hidden");
      continueTip.classList.add("hidden");

      introText.innerText =
        "Soldiers: “Under Executive Order 9066, you are instructed to leave immediately.”";

      introText.classList.remove("hidden");
      introText.classList.remove("fadeOutIntro");
      introText.classList.remove("showIntro");

      void introText.offsetWidth;
      introText.classList.add("showIntro");

      setTimeout(() => {
        showOrderTip();
      }, 4000);

    }, 1200);
  }
}

function showOrderTip() {
  const oldTip = document.querySelector(".order-tip");
  if (oldTip) oldTip.remove();

  const orderTip = document.createElement("div");
  orderTip.className = "order-tip";

  orderTip.innerText =
    "Executive Order 9066 was signed by President Franklin D. Roosevelt. It allowed the U.S. military to force Japanese Americans from their homes and send many of them to internment camps during WWII.";

  document.body.appendChild(orderTip);

  setTimeout(() => {
    orderTip.classList.add("show");
  }, 50);
}

askFatherBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  startChoiceResult(askFatherLines);
});

stayQuietBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  startChoiceResult(stayQuietLines);
});

gameScreen.addEventListener("click", () => {
  if (resultActive) {
    nextResultLine();
  }
});
