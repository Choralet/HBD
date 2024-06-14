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

const dialogueVariant = {
  1: {
    name: "NERD",
    text: "Actually... One More Time..",
    img: "images/dialogue/nerd.PNG",
  },
  2: {
    name: "NERD",
    text: "Play 5 games to get your present back..",
    img: "images/dialogue/nerd.PNG",
  },
};
