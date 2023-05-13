const formElm = document.getElementById('clockForm');
const timeInputElm = document.getElementById('time-input');
const chessClockBtnElm = document.getElementById('setClockTimeBtn');
const btnContainerElm = document.getElementById('btn-container');
const p1BtnElm = document.getElementById('p1Btn');
const p2BtnElm = document.getElementById('p2Btn');
const playersBtnContainerElm = document.getElementById('player-btn-container');
// const fullScreenBtnElm = document.getElementById('make-full-screen');
const resetBtnElm = document.getElementById('reset');

chessClockBtnElm.addEventListener('click', handleChessClockTimeSet);
p1BtnElm.addEventListener('click', handleP1BtnClick);
p2BtnElm.addEventListener('click', handleP2BtnClick);
resetBtnElm.addEventListener('click', handleReset);
// fullScreenBtnElm.addEventListener('click', handleFullScreen);

const DEFAULT_TIME = 5 * 60;

let p1Time = 0;
let p2Time = 0;

let p1Interval = null;
let p2Interval = null;

function handleChessClockTimeSet(event) {
  event.preventDefault();

  const chessForm = new FormData(formElm);
  const chessTime = Number(chessForm.get('clockTime'));

  if (chessTime < 5) {
    alert('Please set minimum time of 5 minutes.');
    // TODO
    timeInputElm.value = undefined;
    // chessForm.set('clockTime', 0);

    return;
  }

  if (chessTime > 60) {
    alert('Please set time less than 60 minutes');
    // TODO
    timeInputElm.value = undefined;
    // chessForm.set('clockTime', 0);

    return;
  }

  localStorage.setItem('p1Time', chessTime * 60);
  localStorage.setItem('p2Time', chessTime * 60);
  btnContainerElm.classList.remove('no-display');
  formElm.classList.add('no-display');

  init();

  event.stopPropagation();
}

function handleP1BtnClick(event) {
  event.preventDefault();
  startP2Interval();
  p1BtnElm.classList.add('disable-btn');
  p2BtnElm.classList.remove('disable-btn');
  event.stopPropagation();
}

function handleP2BtnClick(event) {
  event.preventDefault();
  startP1Interval();
  p2BtnElm.classList.add('disable-btn');
  p1BtnElm.classList.remove('disable-btn');
  event.stopPropagation();
}

function startP2Interval() {
  clearInterval(p1Interval);

  p2Interval = setInterval(() => {
    p2Time = p2Time - 1;
    p2BtnElm.innerHTML = getTimeFromMinute(p2Time);
    console.log('p2Time', p2Time);
  }, 1000);
}

function startP1Interval() {
  clearInterval(p2Interval);

  p1Interval = setInterval(() => {
    p1Time = p1Time - 1;
    p1BtnElm.innerHTML = getTimeFromMinute(p1Time);

    console.log('p1Time', p1Time);
  }, 1000);
}

function getTimeFromMinute(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  return `${mins}:${secs}`;
}

function handleReset() {
  reset();

  formElm.classList.remove('no-display');
  btnContainerElm.classList.add('no-display');
}

function reset() {
  localStorage.setItem('p1Time', 0);
  localStorage.setItem('p2Time', 0);
  timeInputElm.value = undefined;
  init();
}

function init() {
  p1Time = Number(localStorage.getItem('p1Time')) || DEFAULT_TIME;
  p2Time = Number(localStorage.getItem('p2Time')) || DEFAULT_TIME;

  if (p1Time === 0 || p2Time === 0) {
    p1BtnElm.classList.add('disable-btn');
    p2BtnElm.classList.add('disable-btn');
  } else {
    p1BtnElm.classList.remove('disable-btn');
    p2BtnElm.classList.remove('disable-btn');
  }

  p1BtnElm.innerHTML = getTimeFromMinute(p1Time);
  p2BtnElm.innerHTML = getTimeFromMinute(p2Time);
}

function handleFullScreen(event) {
  event.preventDefault();

  playersBtnContainerElm.requestFullscreen();

  event.stopPropagation();
}

(() => {
  init();
})();
