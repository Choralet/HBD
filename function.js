function watchVariable(obj, prop, callback) {
  let value = obj[prop];

  Object.defineProperty(obj, prop, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        const oldValue = value;
        value = newValue;
        callback(newValue, oldValue);
      }
    },
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function updateStartButton(id, text, imagePath) {
  startBtn.id = id;
  startBtn.innerHTML = text;
  image.src = imagePath;
}

function setDisplayElement(displayType = "img") {
  canvas.style.display = "none";
  video.style.display = "none";
  image.style.display = "none";

  if (displayType === "img") {
    image.style.display = "block";
  } else if (displayType === "canvas") {
    canvas.style.display = "block";
  } else if (displayType === "vid") {
    video.style.display = "block";
  }
}
function setGameTitle(game) {
  variant = gameVariant[game];
  gameTitle.innerHTML = variant.text + '<p id="sub">' + variant.sub + "</p>";
}

async function fadeIn(time = 1000, type = blackScreen) {
  type.style.transition = "opacity " + time / 1000 + "s";
  if (type == blackScreen) {
    type.style.zIndex = 99;
  }
  type.style.opacity = 1;
  await wait(time);
}
async function fadeOut(time = 1000, type = blackScreen) {
  type.style.transition = "opacity " + time / 1000 + "s";
  type.style.opacity = 0;
  await wait(time);
  if (type == blackScreen) {
    type.style.zIndex = 0;
  }
}

function typingEffect(element = dialogue.text, text = "placeholder") {
  if (typingCount < text.length) {
    element.innerHTML += text.charAt(typingCount);
    typingCount++;
    setTimeout(() => typingEffect(element, text), 20);
  }
}

async function showDialogue(show, number) {
  const { name: nameElem, text: textElem, img: imgElem } = dialogue;

  if (show) {
    const { text, profile } = dialogueVariant[number];
    const { name, img } = profileVariant[profile];
    typingCount = 0;
    nameElem.innerHTML = name;
    textElem.innerHTML = "";
    imgElem.src = img;
    dialogueMinimize(false);
    await wait(300);
    typingEffect(textElem, text);
  } else {
    await wait(number || 0);
    dialogueMinimize(true);
  }
}
function dialogueMinimize(state) {
  const elements = [
    dialogue.img,
    dialogue.all,
    dialogue.blur,
    dialogue.box,
    skipBtn,
  ];

  if (state === undefined) {
    elements.forEach((element) => element.classList.toggle("transformed"));
  } else if (state) {
    elements.forEach((element) => element.classList.add("transformed"));
  } else {
    elements.forEach((element) => (element.className = ""));
  }
}
video.addEventListener("play", function () {
  if (bgMusic.paused) {
    bgMusic.play();
  }
  video.muted = false;
});
