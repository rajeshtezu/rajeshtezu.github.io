const formElm = document.getElementById('clockForm');
const timeInputElm = document.getElementById('time-input');
const chessClockBtnElm = document.getElementById('setClockTimeBtn');
const btnContainerElm = document.getElementById('btn-container');
const p1BtnElm = document.getElementById('p1Btn');
const p2BtnElm = document.getElementById('p2Btn');
const playersBtnContainerElm = document.getElementById('player-btn-container');
const setOwnTimeBtnElm = document.getElementById('set-own-time');
const resetBtnElm = document.getElementById('reset');
const startDialog = document.getElementById('start-dialog');
const startBtnElm = document.getElementById('start-btn');
const dialogElm = document.getElementById('generic-dialog');
const messageElm = document.getElementById('message');
const okElm = document.getElementById('dialog-ok');

chessClockBtnElm.addEventListener('click', handleChessClockTimeSet);
p1BtnElm.addEventListener('click', handleP1BtnClick);
p2BtnElm.addEventListener('click', handleP2BtnClick);
setOwnTimeBtnElm.addEventListener('click', handleSetOwnTime);
resetBtnElm.addEventListener('click', handleReset);
startBtnElm.addEventListener('click', handleStart);
okElm.addEventListener('click', () => dialogElm.close());

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
    showDialog('Please set minimum time of 5 minutes.');
    // TODO
    timeInputElm.value = undefined;
    // chessForm.set('clockTime', 0);

    return;
  }

  if (chessTime > 60) {
    showDialog('Please set time less than 60 minutes.');
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
  showStart();

  event.stopPropagation();
}

function handleP1BtnClick(event) {
  event.preventDefault();
  startP2Interval();
  p1BtnElm.classList.add('disable-btn');
  p2BtnElm.classList.remove('disable-btn');
  playSound();
  event.stopPropagation();
}

function handleP2BtnClick(event) {
  event.preventDefault();
  startP1Interval();
  p2BtnElm.classList.add('disable-btn');
  p1BtnElm.classList.remove('disable-btn');
  playSound();
  event.stopPropagation();
}

function startP2Interval() {
  p2BtnElm.classList.add('shadow-black');
  p1BtnElm.classList.remove('shadow-white');

  p2Interval = setInterval(() => {
    p2Time = p2Time - 1;
    p2BtnElm.innerHTML = getTimeFromMinutes(p2Time);

    if (p2Time === 0) {
      clearInterval(p2Interval);
      init();
      showStart();
      showDialog('White Won!');
    }
  }, 1000);

  clearInterval(p1Interval);
}

function startP1Interval() {
  p1BtnElm.classList.add('shadow-white');
  p2BtnElm.classList.remove('shadow-black');

  p1Interval = setInterval(() => {
    p1Time = p1Time - 1;
    p1BtnElm.innerHTML = getTimeFromMinutes(p1Time);

    if (p1Time === 0) {
      clearInterval(p1Interval);
      init();
      showStart();
      showDialog('Black Won!');
    }
  }, 1000);

  clearInterval(p2Interval);
}

function getTimeFromMinutes(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  return `${mins}:${secs}`;
}

function handleSetOwnTime(e) {
  e.preventDefault();

  closeStart();
  setOwnTime();

  formElm.classList.remove('no-display');
  btnContainerElm.classList.add('no-display');

  e.stopPropagation();
}

function setOwnTime() {
  localStorage.setItem('p1Time', 0);
  localStorage.setItem('p2Time', 0);
  timeInputElm.value = undefined;

  init();
}

function handleReset(event) {
  event.preventDefault();
  init();
  showStart();
  event.stopPropagation();
}

function init() {
  clearInterval(p1Interval);
  clearInterval(p2Interval);

  p1Time = Number(localStorage.getItem('p1Time')) || DEFAULT_TIME;
  p2Time = Number(localStorage.getItem('p2Time')) || DEFAULT_TIME;

  if (p1Time === 0 || p2Time === 0) {
    p1BtnElm.classList.add('disable-btn');
    p2BtnElm.classList.add('disable-btn');
  } else {
    p1BtnElm.classList.remove('disable-btn');
    p2BtnElm.classList.remove('disable-btn');
  }

  p1BtnElm.innerHTML = getTimeFromMinutes(p1Time);
  p2BtnElm.innerHTML = getTimeFromMinutes(p2Time);
}

function handleStart(e) {
  handleP2BtnClick(e);
  closeStart();
}

function showStart() {
  startBtnElm.classList.remove('no-display');
  startDialog.showModal();
}

function closeStart() {
  startBtnElm.classList.add('no-display');
  startDialog.close();
}

function showDialog(message) {
  messageElm.innerText = message;
  dialogElm.showModal();
}

const audio = new Audio('../assets/mixkit-on-or-off-light-switch-tap-2585.wav');

function playSound() {
  audio.play();
}

(() => {
  init();
  showStart();
})();
