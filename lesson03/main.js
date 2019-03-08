const intervalTime = 100;

const SLOT1 = document.getElementById('slot1');
const SLOT2 = document.getElementById('slot2');
const SLOT3 = document.getElementById('slot3');
const STARTBUTTON = document.getElementById('startButton');

// 1/64で揃う
var hoge = ["peach", "apple", "icecream", "sakura"];
var isPlay = true;

function update() {

  if (isPlay) {
    return;
  }

  var randomNum = Math.floor((Math.random() * 4));
  SLOT1.src = `images/${hoge[randomNum]}.png`;
  var randomNum = Math.floor((Math.random() * 4));
  SLOT2.src = `images/${hoge[randomNum]}.png`;
  var randomNum = Math.floor((Math.random() * 4));
  SLOT3.src = `images/${hoge[randomNum]}.png`;
}

function stop() {
  isPlay = !isPlay;

  if (isPlay) {
    STARTBUTTON.innerText = "STOP";
  } else {
    STARTBUTTON.innerText = "PLAY";
  }

  if (SLOT1.src === SLOT2.src && SLOT2.src === SLOT3.src) {
    alert("Congratulations!!");
  }
}

setInterval(update, intervalTime);