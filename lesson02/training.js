const SLOT1 = document.getElementById('slot1');
const SLOT2 = document.getElementById('slot2');
const SLOT3 = document.getElementById('slot3');
// SLOT1.src = "images/peach.png";
// SLOT2.src = "images/peach.png";
// SLOT3.src = "images/peach.png";

var isStop = true;

function start(){
  isStop = !isStop;

  if(isStop){
    if(SLOT1.src == SLOT2.src && SLOT2.src == SLOT3.src){
      alert("揃いました！");
    }
  }
}
function update(){

  if(isStop){
    return;
  }

  var hoge = ["peach", "apple", "icecream", "sakura"];
  var randomNum = Math.floor((Math.random() * hoge.length));
  SLOT1.src = "images/" + hoge[randomNum] + ".png";
  var randomNum = Math.floor((Math.random() * hoge.length));
  SLOT2.src = "images/" + hoge[randomNum] + ".png";
  var randomNum = Math.floor((Math.random() * hoge.length));
  SLOT3.src = "images/" + hoge[randomNum] + ".png";
}

setInterval(update, 1000);
