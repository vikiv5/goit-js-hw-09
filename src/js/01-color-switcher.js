const body = document.querySelector ("body") ;

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]") ;

let timerId = null ;

startBtn.addEventListener ("click", onStartBtnClick) ;
stopBtn.addEventListener ("click", onStopBtnClick); 

function onStartBtnClick() {
    timerId = setInterval(getRandomHexColor, 1000);
    startBtn.setAttribute("disabled", true);
}

function onStopBtnClick(){
    startBtn.removeAttribute ("disabled")
    clearInterval(timerId);
}

function getRandomHexColor() {
    body.style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;
  }