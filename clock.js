function workingClock(){
    const clock = document.querySelector('.clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2 ,'0');
    const mins = now.getMinutes().toString().padStart(2 ,'0');
    const secs = now.getSeconds().toString().padStart(2 ,'0');
    clock.textContent = `${hours}:${mins}:${secs}`;
}

setInterval(workingClock, 1000);
workingClock();