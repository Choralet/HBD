const project = {
  scene: 0,
  /* PLAN
    0 = intro
    1 = cutscene
    2 = game1
    3 = game2
    4 = game3
    5 = game4
    6 = game5
    7 = outro
  */
};
showDialogue(false);
gameElem.all.style.display = "none";

async function resetScene() {
  startBtnCount = 1;
  reset = introVariant[0];
  updateStartButton(reset.id, reset.text, "images/blank.PNG");
  gameTitle.style.display = "none";
  gameElem.all.style.display = "none";
  startBtn.style.display = "none";
  video.pause();
  video.currentTime = 0;
  video.load();
  showDialogue(false);
}

watchVariable(project, "scene", async (newValue, oldValue) => {
  switch (newValue) {
    case 0:
      setDisplayElement("img");
      startBtn.style.display = "block";
      break;
    case 1:
      await scene1();
      break;
    case 2:
      await scene2();
      break;
  }
});

startBtn.addEventListener("click", async function () {
  if (startBtnCount <= 2) {
    bgMusic.play();
    upd = introVariant[startBtnCount];
    updateStartButton(upd.id, upd.text, upd.img);
    if (startBtnCount == 2) {
      showDialogue(true, 1);
    }
  } else if (startBtnCount === 3) {
    project.scene = 1;
  }
  startBtnCount++;
});

skipBtn.addEventListener("click", () => {
  dialogueMinimize();
});

dialogue.img.addEventListener("click", () => {
  dialogueMinimize();
});

resume.addEventListener("click", () => {
  goToScene = 2;
  console.log(project.scene);
  if (goToScene !== project.scene) {
    resetScene();
    project.scene = goToScene;
  }
});

async function scene1() {
  showDialogue(false);
  video.src = "video/cutscene1.mp4";
  video.load();
  await fadeIn(1000);
  startBtn.style.display = "none";
  setDisplayElement("vid");

  await fadeOut(1000);
  video.play();
  await new Promise((resolve) => {
    video.onended = resolve;
  });
  await wait(100);
  project.scene = 2;
}

async function scene2() {
  await fadeIn(1000);
  setGameTitle(1);
  gameTitle.style.display = "block";
  await fadeOut(0, gameTitle);
  image.src = gameVariant[1].img[1];
  setDisplayElement(gameVariant[1].type);
  await fadeIn(2000, gameTitle);
  await fadeOut(1000, gameTitle);
  await fadeOut(1000);
  gameElem.all.style.display = "block";
  showDialogue(true, 2);
}

function checkGuess(input, target) {
  if (input == target) {
    return 0;
  } else if (input < target) {
    return 1;
  } else return 2;
}

gameElem.submit.addEventListener("click", () => {
  if (guessCount.value == 0) {
    project.scene = 3;
  } else {
    const userGuess = parseFloat(gameElem.input.value);
    const target = 37.37734043;

    if (!isNaN(userGuess)) {
      guessCount.value -= 1;
      const result = checkGuess(userGuess, targetNumber);
      if (result === 0) {
        // Win
        showDialogue(true, 8);
      } else if (result === 1) {
        // Higher
        gameElem.frame.style.top = "40%";
      } else if (result === 2) {
        // Lower
        gameElem.frame.style.top = "65%";
      }
    } else {
      showDialogue(true, 3);
    }
  }
});
gameElem.btn.addEventListener("click", async () => {
  if (guessCount.value > 7) {
    showDialogue(true, 7);
  } else if (!guessCount.hint) {
    image.src = gameVariant[1].img[2];
    await wait(300);
    showDialogue(true, 5);
    guessCount.hint = true;
  } else if (guessCount.hint) {
    guessCount.value = 0;
  }
});

watchVariable(guessCount, "value", (newValue) => {
  gameElem.text.innerHTML = "Guess Left: " + newValue;
  if (newValue === 7) {
    showDialogue(true, 4);
  } else if (newValue === 0) {
    showDialogue(true, 6);
  }
});
