let startTime, updatedTime, difference, tInterval;
let running = false;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateTime(){
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    milliseconds = Math.floor((difference%1000)/10);
    seconds = Math.floor((difference/1000)%60);
    minutes =Math.floor((difference/(1000*60))%60); 

    milliseconds = ('0' + milliseconds).slice(-2);
    seconds = ('0'+seconds).slice(-2);
    minutes =('0'+ minutes).slice(-2);

    timeDisplay.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
}

function startTimer(){
    if (!running){
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 10);
        running =true;
    }
}
function stopTimer(){
    if(running){
        clearInterval(tInterval);
        running = false;
    }
}
 function resetTimer(){
    clearInterval(tInterval);
    running = false;
    minutes = '00';
    seconds = '00';
    milliseconds = '00';
    timeDisplay.innerHTML =`${minutes}:${seconds}:${milliseconds}`;

 }

 startButton.addEventListener('click',startTimer);
 stopButton.addEventListener('click',stopTimer);
 resetButton.addEventListener('click',resetTimer);
