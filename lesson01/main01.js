// const var letを使い分ける

// const 再代入は不要 定数など
// let ブロックスコープ
// var ブロックの外でも参照可能

const DAYS 		= document.getElementById('days');
const HOURS 	= document.getElementById('hours');
const MINUTES = document.getElementById('minutes');
const SECONDS = document.getElementById('seconds');
const MILIS 	= document.getElementById('milliseconds');

function update() {
	//let now = new Date().getTime();
	//Date オブジェクトは、1970 年 1 月 1 日 (UTC)
	//から始まるミリ秒単位の時刻値を基準としている
  DAYS.innerHTML 		= 999;
  HOURS.innerHTML 	= 23;
  MINUTES.innerHTML = 59;
  SECONDS.innerHTML = 59;
  MILIS.innerHTML 	= 99;
}

update();
