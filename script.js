let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;
let lapCounter = 1;

function startStop() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        document.getElementById("startStopBtn").textContent = "Pause";
        isRunning = true;
    } else {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        document.getElementById("startStopBtn").textContent = "Start";
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00:00";
    document.getElementById("startStopBtn").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
    lapCounter = 1;
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;

    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    document.getElementById("display").textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, "0");
}

function recordLap() {
    const lapTime = document.getElementById("display").textContent;
    const lapElement = document.createElement("div");
    lapElement.textContent = `Lap ${lapCounter}: ${lapTime}`;
    document.getElementById("laps").appendChild(lapElement);
    lapCounter++;
}
