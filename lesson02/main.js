const intervalTime = 100;

const SLOT1 = document.getElementById('slot1');
const SLOT2 = document.getElementById('slot2');
const SLOT3 = document.getElementById('slot3');

const STARTBUTTON = document.getElementById('startButton');

const MATCH = document.getElementById('congratulationBackground');
const TEXT = document.getElementById('congratulationText');

// 1/64で揃う
var hoge = ["peach", "apple", "icecream", "sakura"];
var isPlay = true;

function update() {

  if (isPlay) {
    return;
  }

  var randomNum = Math.floor((Math.random() * hoge.length));
  SLOT1.src = `images/${hoge[randomNum]}.png`;
  var randomNum = Math.floor((Math.random() * hoge.length));
  SLOT2.src = `images/${hoge[randomNum]}.png`;
  var randomNum = Math.floor((Math.random() * hoge.length));
  SLOT3.src = `images/${hoge[randomNum]}.png`;
}

function stop() {
  MATCH.style.display = 'block';
  isPlay = !isPlay;

  if (isPlay) {
    STARTBUTTON.innerText = "STOP";
    MATCH.style.display = 'none';
  } else {
    STARTBUTTON.innerText = "PLAY";
  }

  if (SLOT1.src === SLOT2.src && SLOT2.src === SLOT3.src) {
    MATCH.style.display = 'block';
    TEXT.style.display = 'block';
    congratulation();
  }
}

function congratulation() {
  Particles.init({
    selector: '.background',
    sizeVariations: 30,
    color: [
      '#0bd', 'rgba(0,187,221,.5)', 'rgba(0,187,221,.2)'
    ]
  });
};

setInterval(update, intervalTime);
