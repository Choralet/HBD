const canvas = document.getElementById("MyCanvas");
const video = document.getElementById("MyVideo");
const image = document.getElementById("MyImage");

const dialogue = {
  all: document.getElementById("dialogue"),
  name: document.getElementById("name"),
  text: document.getElementById("text"),
  img: document.getElementById("profile"),
  box: document.getElementById("box"),
  blur: document.getElementById("blur"),
};

const gameElem = {
  all: document.getElementById("tool"),
  frame: document.getElementById("frame"),
  input: document.getElementById("numInput"),
  btn: document.getElementById("specBtn"),
  submit: document.getElementById("submit"),
};

const resume = document.getElementById("btn1");
const startBtn = document.getElementById("start-btn");
const skipBtn = document.getElementById("skip-btn");
const testBtn = document.getElementById("btn2");

const blackScreen = document.getElementById("black-screen");
const gameTitle = document.getElementById("game");
const gameTitleSub = document.getElementById("sub");

let startBtnCount = 1;
var typingCount = 0;
const guessCount = {
  value: 0,
};

const testText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi voluptate quidem alias debitis ut cum animi dolorum itaque beatae voluptatum inventore, ex placeat a ducimus in laboriosam omnis impedit magnam?";

const introVariant = {
  0: {
    id: "start-btn",
    text: "REDEEM YOUR PRESENT!",
    img: "images/intro/1.GIF",
  },
  1: {
    id: "start-btn-var1",
    text: "DON'T YOU WANT A GIFT? &#128515;",
    img: "images/intro/2.GIF",
  },
  2: {
    id: "start-btn-var2",
    text: "JUST CLICK THE BUTTON IT'S NOT THAT HARD &#128557;",
    img: "images/intro/3.GIF",
  },
};
const gameVariant = {
  1: {
    text: "GAME 1/5",
    sub: "(really easyyyyy)",
    type: "img",
    img: { 1: "images/game1/1.GIF", 2: "images/game1/2.GIF" },
  },
  2: { text: "GAME 2/5", sub: "(real easy)" },
  3: { text: "GAME 3/5", sub: "(maybe hard)" },
  4: { text: "GAME 4/5", sub: "(idk &#128070;&#129299;)" },
  5: { text: "GAME 5/5", sub: "(superb &#128526;)" },
};

const profileVariant = {
  what: {
    name: "WhAt??",
    img: "images/dialogue/confuse.PNG",
  },
  good: {
    name: "NICE GUY",
    img: "images/dialogue/good.PNG",
  },
  nerd: {
    name: "NERD",
    img: "images/dialogue/nerd.PNG",
  },
  mogo: {
    name: "mOgo jAn",
    img: "images/dialogue/mogo.PNG",
  },
  angry: {
    name: "&$!#%",
    img: "images/dialogue/angry.PNG",
  },
  shit: {
    name: "STOPPPPPPPP",
    img: "images/dialogue/shit.PNG",
  },
  dog: {
    name: "HAHAHAHAH",
    img: "images/dialogue/dog.GIF",
  },
};

const dialogueVariant = {
  0: {
    profile: "what",
    text: "Nothing here GO AWAY",
  },
  1: {
    profile: "nerd",
    text: "Actually... One More Time..",
  },
  2: {
    profile: "mogo",
    text: "PLaY 5 gAmes to gET yoUr pREseNt BacK..",
  },
  3: {
    profile: "angry",
    text: "I said N-U-M-B-E-R. Do you understand? 😡 😡 😡",
  },
  4: {
    profile: "nerd",
    text: "*Hint Unlocked*",
  },
  5: {
    profile: "dog",
    text: "The hint is just give up. You can't win this for sure",
  },
  6: {
    profile: "nerd",
    text: "Actually... win or loss it's doesn't matter... So just click give up to continue",
  },
};
