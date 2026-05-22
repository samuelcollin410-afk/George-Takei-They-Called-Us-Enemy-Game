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

const afterOrderScreen = document.getElementById("afterOrderScreen");
const understandBtn = document.getElementById("understandBtn");
const familyBtn = document.getElementById("familyBtn");
const afterOrderResultBox = document.getElementById("afterOrderResultBox");
const afterOrderResultText = document.getElementById("afterOrderResultText");
const flashbackText = document.getElementById("flashbackText");

const flashbackIntro = document.getElementById("flashbackIntro");

const pearlHarborScene = document.getElementById("pearlHarborScene");
const harborTextBox = document.getElementById("harborTextBox");
const act2Btn = document.getElementById("act2Btn");

const rohwerMapScene = document.getElementById("rohwerMapScene");

const rohwerArrivalScene = document.getElementById("rohwerArrivalScene");
const mapContinueBtn = document.getElementById("mapContinueBtn");

const rohwerArrivalTextBox = document.getElementById("rohwerArrivalTextBox");

const rohwerChoices = document.getElementById("rohwerChoices");

const lookAroundBtn = document.getElementById("lookAroundBtn");

const stayFamilyBtn = document.getElementById("stayFamilyBtn");

const walkAroundText = document.getElementById("walkAroundText");

const kidsGameScene =
  document.getElementById("kidsGameScene");



const kidsReflectionTip =
  document.getElementById("kidsReflectionTip");
  
  const sewingScene =
  document.getElementById("sewingScene");
  
  
  
  let act2Unlocked = false;
let rohwerWalkStep = 0;
let resultActive = false;
let orderTipTimer = null;
let act1Step = 0;

let flashbackIndex = 0;
let flashbackActive = false;



function unlockAct2() {
  act2Unlocked = true;

  act2Btn.disabled = false;
  act2Btn.classList.remove("locked");
  act2Btn.textContent = "Life Inside Rohwer (Act 2)";
}


lookAroundBtn.addEventListener("click", () => {

  rohwerChoices.classList.add("hidden");

  rohwerArrivalScene.style.animation =
    "introFadeOut 0.8s forwards";

  setTimeout(() => {

    rohwerArrivalScene.classList.add("hidden");

    blackScreen.style.background = "black";

    walkAroundText.classList.remove("hidden");
    walkAroundText.classList.add("showText");

    walkAroundText.innerHTML =
      "As I walked around, I saw many other families who looked tired and unhappy.";

    rohwerWalkStep = 1;

  }, 800);
});

if (stayFamilyBtn) {
  stayFamilyBtn.addEventListener("click", () => {

    rohwerChoices.classList.add("hidden");

    rohwerArrivalScene.style.animation =
      "introFadeOut 0.8s forwards";

    setTimeout(() => {

      rohwerArrivalScene.classList.add("hidden");

      blackScreen.style.background = "black";

      walkAroundText.classList.remove("hidden");
      walkAroundText.classList.remove("showText");

      walkAroundText.innerHTML =
        "I decided to stay beside my family. My father immediately began helping both our family and the families living nearby.";

      void walkAroundText.offsetWidth;

      walkAroundText.classList.add("showText");

      rohwerWalkStep = 50;

    }, 800);
  });
}



function hideAllScreens() {
 rohwerWalkStep = 0;
  titleScreen.classList.add("hidden");
  creditsScreen.classList.add("hidden");
  chapterScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  afterOrderScreen.classList.add("hidden");

if (sewingScene) {
  sewingScene.classList.add("hidden");
}

  if (rohwerMapScene) {
    rohwerMapScene.classList.add("hidden");
    rohwerMapScene.classList.remove("showMap");
  }

  if (rohwerArrivalScene) {
    rohwerArrivalScene.classList.add("hidden");
    rohwerArrivalScene.classList.remove("showArrival");
    rohwerArrivalScene.style.display = "none";
  }

  if (rohwerChoices) {
    rohwerChoices.classList.add("hidden");
    rohwerChoices.style.display = "none";
  }

  if (rohwerArrivalTextBox) {
    rohwerArrivalTextBox.classList.remove("hidden");
  }

  if (kidsGameScene) {
    kidsGameScene.classList.add("hidden");
  }

  if (kidsReflectionTip) {
    kidsReflectionTip.classList.add("hidden");
  }
}
function resetOpening() {
 rohwerWalkStep = 0;
  blackScreen.classList.remove("show");
  blackScreen.classList.add("hidden");

if (rohwerChoices) {
  rohwerChoices.style.display = "none";
  rohwerChoices.classList.add("hidden");
}

if (sewingScene) {
  sewingScene.classList.add("hidden");
}

if (rohwerArrivalTextBox) {
  rohwerArrivalTextBox.classList.remove("hidden");
}

rohwerArrivalScene.classList.add("hidden");
rohwerArrivalScene.classList.remove("showArrival");
rohwerArrivalScene.style.display = "none";

  bang1.classList.remove("showBang", "swipeAway");
  bang2.classList.remove("showBang", "swipeAway");
  bang3.classList.remove("showBang", "swipeAway");

   pearlHarborScene.classList.add("hidden");
   pearlHarborScene.style.display = "none";

   harborTextBox.classList.add("hidden");
   harborTextBox.classList.remove("showBox");

  rohwerMapScene.classList.add("hidden");
rohwerMapScene.classList.remove("showMap");


  bang1.classList.remove("hidden");
 bang2.classList.remove("hidden");
bang3.classList.remove("hidden");
  
  
  locationText.classList.add("hidden");
  locationText.classList.remove("showLocation");

  continueTip.classList.add("hidden");
  continueTip.classList.remove("showTip");
}

function removeOrderTip() {
  if (orderTipTimer) {
    clearTimeout(orderTipTimer);
    orderTipTimer = null;
  }

  const oldTip = document.querySelector(".order-tip");

  if (oldTip) {
    oldTip.remove();
  }
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

  const unlockAll = confirm(
    "Unlock all acts?"
  );

  if (unlockAll) {

    unlockAct2();

    const act3Btn = document.querySelectorAll(".chapter-btn")[2];

    act3Btn.disabled = false;
    act3Btn.classList.remove("locked");
    act3Btn.textContent = "Tule Lake / Aftermath (Act 3)";
  }
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

  pearlHarborScene.classList.add("hidden");
  pearlHarborScene.style.display = "none";
  harborTextBox.classList.add("hidden");
  
  
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


if (rohwerWalkStep === 52) {

  walkAroundText.classList.remove("showText");
  walkAroundText.classList.add("fadeOutIntro");

  setTimeout(() => {

    walkAroundText.classList.remove("fadeOutIntro");

    walkAroundText.innerHTML =
      "However, no matter where we went in the jeep, we could never leave the camp.";

    void walkAroundText.offsetWidth;

    walkAroundText.classList.add("showText");

  }, 600);

  rohwerWalkStep = 53;

  return;
}


if (rohwerWalkStep === 51) {

  walkAroundText.classList.remove("showText");
  walkAroundText.classList.add("fadeOutIntro");

  setTimeout(() => {

    walkAroundText.classList.remove("fadeOutIntro");

    walkAroundText.innerHTML =
  "Since my father was block manager, the rest of my family and I were sometimes allowed to ride around the camp with him in a jeep. Traveling through Rohwer showed me just how large the camp really was.";

    void walkAroundText.offsetWidth;

    walkAroundText.classList.add("showText");

  }, 600);

  rohwerWalkStep = 52;

  return;
}

if (rohwerWalkStep === 50) {

  walkAroundText.classList.remove("showText");
  walkAroundText.classList.add("fadeOutIntro");

  setTimeout(() => {

    walkAroundText.classList.remove("fadeOutIntro");

    walkAroundText.innerHTML =
      "Eventually, the other families began depending on him, and he was promoted to block manager.";

    void walkAroundText.offsetWidth;

    walkAroundText.classList.add("showText");

  }, 600);

  rohwerWalkStep = 51;

  return;
}


  if (rohwerWalkStep === 1) {
    walkAroundText.innerHTML =
      "Eventually, I ran into other kids playing a game...";

    rohwerWalkStep = 2;
    return;
  }

  if (rohwerWalkStep === 2) {
    walkAroundText.classList.add("hidden");
    walkAroundText.classList.remove("showText");

    kidsGameScene.classList.remove("hidden");

    rohwerWalkStep = 3;
    return;
  }

  if (rohwerWalkStep === 4) {
    kidsReflectionTip.classList.remove("hidden");
    kidsReflectionTip.classList.add("showTipBox");

    rohwerWalkStep = 5;
    return;
  }

  if (rohwerWalkStep === 5) {
   kidsReflectionTip.classList.add("hidden");
kidsReflectionTip.classList.remove("showTipBox");
kidsReflectionTip.style.display = "none";
    walkAroundText.classList.remove("showText");
    walkAroundText.classList.add("fadeOutIntro");

    setTimeout(() => {
      walkAroundText.classList.remove("fadeOutIntro");

      walkAroundText.innerHTML =
        "After walking around camp, I returned to our barrack. It was hot, cramped, and nothing like the home we had left behind.";

      void walkAroundText.offsetWidth;
      walkAroundText.classList.add("showText");
    }, 600);

    rohwerWalkStep = 6;
    return;
  }

if (rohwerWalkStep === 6) {

  walkAroundText.classList.remove("showText");
  walkAroundText.classList.add("fadeOutIntro");

  setTimeout(() => {

    walkAroundText.classList.remove("fadeOutIntro");

    walkAroundText.innerHTML =
      "As I opened the door, I saw my mother unpacking a sewing machine from her suitcase.";

    void walkAroundText.offsetWidth;

    walkAroundText.classList.add("showText");

  }, 600);

  rohwerWalkStep = 7;

  return;
}


if (rohwerWalkStep === 7) {

  walkAroundText.classList.add("hidden");

  sewingScene.classList.remove("hidden");

  rohwerWalkStep = 8;

  return;
}

  // keep the rest of your old act1Step code under here



if (act1Step === 22) {
  act1Step = 23;

  rohwerArrivalTextBox.classList.add("hidden");

  rohwerChoices.classList.remove("hidden");
  rohwerChoices.style.display = "flex";

  return;
}
 
 
  if (act1Step === 20) {
  act1Step = 21;

  continueTip.classList.add("hidden");
  continueTip.classList.remove("showTip");

  introText.classList.remove("showIntro");
  introText.classList.add("fadeOutIntro");

  setTimeout(() => {
    introText.classList.add("hidden");
    introText.classList.remove("fadeOutIntro");

 rohwerMapScene.classList.remove("hidden");
rohwerMapScene.classList.add("showMap");
    continueTip.classList.remove("hidden");
    continueTip.classList.add("showTip");
  }, 600);

  return;
}
 

 
  if (act1Step === 9) {
  act1Step = 10;

  continueTip.classList.add("hidden");
  continueTip.classList.remove("showTip");

  introText.classList.remove("showIntro");
  introText.classList.add("fadeOutIntro");

  setTimeout(() => {
    introText.classList.add("hidden");
    introText.classList.remove("fadeOutIntro");

    introText.innerText = "Why us?";

    introText.classList.remove("hidden");

    void introText.offsetWidth;

    introText.classList.add("showIntro");

    continueTip.classList.remove("hidden");
    continueTip.classList.add("showTip");
  }, 500);

  return;
}

if (act1Step === 10) {
  act1Step = 11;

  continueTip.classList.add("hidden");
  continueTip.classList.remove("showTip");

  introText.classList.remove("showIntro");
  introText.classList.add("fadeOutIntro");

  setTimeout(() => {
    introText.classList.add("hidden");
    introText.classList.remove("fadeOutIntro");

  introText.innerText = "Act 1 Finished\n\nContinue to Act 2";

    introText.classList.remove("hidden");

    void introText.offsetWidth;

    introText.classList.add("showIntro");

    continueTip.classList.remove("hidden");
    continueTip.classList.add("showTip");

    unlockAct2();
  }, 500);

  return;
}

if (act1Step === 11) {
  blackScreen.classList.add("hidden");
  blackScreen.classList.remove("show");

  introText.classList.add("hidden");
  introText.classList.remove("showIntro");

  continueTip.classList.add("hidden");
  continueTip.classList.remove("showTip");

  unlockAct2();

  hideAllScreens();
  chapterScreen.classList.remove("hidden");

  return;
}
  
  
  if (act1Step === 4) {
  act1Step = 5;

  removeOrderTip();

  continueTip.classList.add("hidden");
  continueTip.classList.remove("showTip");

  introText.classList.remove("showIntro");
  introText.classList.add("fadeOutIntro");

  setTimeout(() => {
    introText.classList.add("hidden");
    introText.classList.remove("fadeOutIntro");

  introText.innerText =
  "Your father lowers his head and nods.\n\n“We understand. We’ll be ready shortly.”\n\nThe door closes, leaving the room silent.";

introText.style.display = "block";

introText.classList.remove("hidden");
introText.classList.remove("showIntro");
introText.classList.remove("fadeOutIntro");

void introText.offsetWidth;

introText.classList.add("showIntro");

    continueTip.classList.remove("hidden");
    continueTip.classList.add("showTip");
  }, 500);

  return;
}
  
  


 /* AFTER FATHER COMPLIES */

if (act1Step === 5) {
  act1Step = 6;

  continueTip.classList.add("hidden");
  continueTip.classList.remove("showTip");

  introText.classList.remove("showIntro");
  introText.classList.add("fadeOutIntro");

  setTimeout(() => {
    blackScreen.classList.add("hidden");
    blackScreen.classList.remove("show");

    introText.classList.add("hidden");
    introText.classList.remove("fadeOutIntro");

    afterOrderScreen.classList.remove("hidden");
  }, 500);

  return;
}

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

      continueTip.classList.remove("hidden");
      continueTip.classList.add("showTip");
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

    return;
  }


/* AFTER FAMILY INTRO */

if (act1Step === 7) {
  act1Step = 8;

  continueTip.classList.add("hidden");
  continueTip.classList.remove("showTip");

  flashbackIntro.classList.add("fadeOutIntro");

  setTimeout(() => {
    flashbackIntro.classList.add("hidden");
    flashbackIntro.classList.remove("showIntro");
    flashbackIntro.classList.remove("fadeOutIntro");

    pearlHarborScene.style.display = "flex";
    pearlHarborScene.classList.remove("hidden");

    setTimeout(() => {
      harborTextBox.classList.remove("hidden");
      harborTextBox.classList.add("showBox");

      continueTip.classList.remove("hidden");
      continueTip.classList.add("showTip");

      flashbackActive = true;
      flashbackIndex = -1;
    }, 2000);

  }, 600);

  return;
}


/* FLASHBACK TEXT PAGES */

if (flashbackActive && act1Step === 8) {
  harborTextBox.classList.add("hidden");
  harborTextBox.classList.remove("showBox");

  pearlHarborScene.classList.add("hidden");
  pearlHarborScene.style.display = "none";

  flashbackIndex++;

  if (flashbackIndex < flashbackLines.length) {
    flashbackIntro.innerText = flashbackLines[flashbackIndex];

    flashbackIntro.classList.remove("hidden");
    flashbackIntro.classList.remove("fadeOutIntro");

    void flashbackIntro.offsetWidth;

    flashbackIntro.classList.add("showIntro");
} else {
  flashbackActive = false;

  flashbackIntro.classList.add("hidden");
  flashbackIntro.classList.remove("showIntro");
  flashbackIntro.classList.remove("fadeOutIntro");

  introText.innerText = "Returning to George’s home...";

  introText.classList.remove("hidden");
  introText.classList.remove("fadeOutIntro");
  introText.classList.remove("showIntro");

  void introText.offsetWidth;

  introText.classList.add("showIntro");

  continueTip.classList.remove("hidden");
  continueTip.classList.add("showTip");

  act1Step = 9;
}

  return;
}


});


actsButton.addEventListener("click", () => {
  act1Step = 0;

  resetOpening();

  removeOrderTip();
  
hideAllScreens();
  chapterScreen.classList.remove("hidden");

  actsButton.classList.add("hidden");
});

const introLines = [
  "You are George Takei, a young Japanese American boy living with your family in Los Angeles.",

  "As war between the United States and Japan rapidly escalates, fear and suspicion begin spreading across America.",

  "Soon, George and his family will be forced to leave behind everything they know."
];

const flashbackLines = [
  "After the attack, fear spread rapidly across the United States.\n\nMany Japanese Americans were suddenly treated with suspicion, even if they had lived in America their entire lives.",

  "Assistant Secretary of War John J. McCloy and other government leaders argued that Japanese Americans could not be trusted, even without evidence.",

  "On February 19, 1942, President Franklin D. Roosevelt signed Executive Order 9066."
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

      act1Step = 4;

continueTip.classList.remove("hidden");
continueTip.classList.add("showTip");
      
      
      
removeOrderTip();

orderTipTimer = setTimeout(() => {
  if (act1Step === 4 && !blackScreen.classList.contains("hidden")) {
    showOrderTip();
  }
}, 2200);
    }, 1200);
  }
}

function showOrderTip() {
  removeOrderTip();

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



understandBtn.addEventListener("click", () => {
  hideAllScreens();

  blackScreen.classList.remove("hidden");
  blackScreen.classList.add("show");

  introText.classList.add("hidden");
  continueTip.classList.add("hidden");

  removeOrderTip();

  flashbackText.classList.remove("hidden");
  flashbackText.classList.add("showFlashback");

  setTimeout(() => {
    flashbackText.classList.add("fadeOutIntro");

    setTimeout(() => {
      flashbackText.classList.add("hidden");
      flashbackText.classList.remove("showFlashback");
      flashbackText.classList.remove("fadeOutIntro");

      flashbackIntro.innerHTML = `
        December 7, 1941<br><br>

        George Takei lived in Los Angeles with his father Takekuma,
        his mother Fumiko, his younger brother Henry,
        and his baby sister Nancy.<br><br>

        At first, it seemed like an ordinary day.
      `;

      flashbackIntro.classList.remove("hidden");
      flashbackIntro.classList.add("showIntro");

      act1Step = 7;

      continueTip.classList.remove("hidden");
      continueTip.classList.add("showTip");
    }, 700);
  }, 2200);
});

function startFlashback() {
  hideAllScreens();

  blackScreen.classList.remove("hidden");
  blackScreen.classList.add("show");

  flashbackText.classList.remove("hidden");
  flashbackText.classList.remove("fadeOutIntro");
  flashbackText.classList.remove("showFlashback");

  void flashbackText.offsetWidth;

  flashbackText.classList.add("showFlashback");

  setTimeout(() => {
    flashbackText.classList.add("fadeOutIntro");

    setTimeout(() => {
      flashbackText.classList.add("hidden");
      flashbackText.classList.remove("showFlashback");
      flashbackText.classList.remove("fadeOutIntro");

      flashbackIntro.innerHTML = `
        December 7, 1941<br><br>
        George Takei lived in Los Angeles with his father Takekuma,
        his mother Fumiko, his younger brother Henry,
        and his baby sister Nancy.<br><br>
        At first, it seemed like an ordinary day.
      `;

      flashbackIntro.classList.remove("hidden");
      flashbackIntro.classList.add("showIntro");

      continueTip.classList.remove("hidden");
      continueTip.classList.add("showTip");

      act1Step = 7;
    }, 700);
  }, 2200);
}




function unlockAct2() {
  act2Unlocked = true;

  act2Btn.disabled = false;
  act2Btn.classList.remove("locked");
  act2Btn.textContent = "Life Inside Rohwer (Act 2)";
}

familyBtn.addEventListener("click", () => {
  hideAllScreens();

  blackScreen.classList.remove("hidden");
  blackScreen.classList.add("show");

  introText.innerText = "Why us?";

  introText.classList.remove("hidden");
  introText.classList.remove("fadeOutIntro");
  introText.classList.remove("showIntro");

  void introText.offsetWidth;

  introText.classList.add("showIntro");

  continueTip.classList.remove("hidden");
  continueTip.classList.add("showTip");

  act1Step = 10;
});

act2Btn.addEventListener("click", () => {
  if (!act2Unlocked) return;

  hideAllScreens();

  actsButton.classList.remove("hidden");

  blackScreen.classList.remove("hidden");


  blackScreen.classList.remove("hidden");
  blackScreen.classList.add("show");

  introText.innerText = "ACT 2\nLife Inside Rohwer";

  introText.classList.remove("hidden");
  introText.classList.remove("fadeOutIntro");
  introText.classList.remove("showIntro");

  void introText.offsetWidth;

  introText.classList.add("showIntro");

  continueTip.classList.remove("hidden");
  continueTip.classList.add("showTip");

  act1Step = 20;
});

if (mapContinueBtn) {
  mapContinueBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    act1Step = 22;

    continueTip.classList.add("hidden");
    continueTip.classList.remove("showTip");

    rohwerMapScene.classList.add("hidden");
    rohwerMapScene.classList.remove("showMap");
    rohwerMapScene.style.display = "none";

    rohwerArrivalScene.classList.remove("hidden");
    rohwerArrivalScene.classList.add("showArrival");

    if (rohwerChoices) {
      rohwerChoices.classList.add("hidden");
      rohwerChoices.style.display = "none";
    }

    if (rohwerArrivalTextBox) {
      rohwerArrivalTextBox.classList.remove("hidden");
    }

    continueTip.classList.remove("hidden");
    continueTip.classList.add("showTip");
  });
}

if (kidsGameScene) {
  kidsGameScene.addEventListener("click", () => {
    if (rohwerWalkStep !== 3) return;

    kidsGameScene.classList.add("hidden");

    walkAroundText.classList.remove("hidden");
    walkAroundText.classList.remove("showText");

    walkAroundText.innerHTML =
      "The other kids looked like they were having fun, but I didn’t understand why nobody wanted to play as the Japanese soldiers. Everyone wanted to be the heroes.";

    void walkAroundText.offsetWidth;

    walkAroundText.classList.add("showText");

    setTimeout(() => {
      if (kidsReflectionTip) {
        kidsReflectionTip.classList.remove("hidden");
        kidsReflectionTip.classList.add("showTipBox");
      }
    }, 2000);

    rohwerWalkStep = 4;
    return;
  });
}

if (sewingScene) {
  sewingScene.addEventListener("click", () => {
    if (rohwerWalkStep !== 8) return;

    sewingScene.classList.add("hidden");

    walkAroundText.classList.remove("hidden");
    walkAroundText.classList.remove("showText");

    walkAroundText.innerHTML =
      "I heard my dad say earlier that sewing machines weren’t allowed in camp. Seeing my mother bring one anyway made me realize how much she cared about taking care of our family.";

    void walkAroundText.offsetWidth;

    walkAroundText.classList.add("showText");

    rohwerWalkStep = 9;
  });
}