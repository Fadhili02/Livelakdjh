const timerScreen = document.querySelector('.clock-screen');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');

//functions
let time =  10;
startBtn.addEventListener('click', function(){
const timerId = setInterval ( function(){

        const min = String(Math.floor(time / 60)).padStart(2, '0');
        const sec = String(time % 60).padStart(2, 0);
        timerScreen.textContent = `${min}:${sec}`; 

        time--;
        if(time < 0) clearInterval(timerId)
    }, 1000 )

stopBtn.addEventListener('click', ()=> {
    clearInterval(timerId);
})
})