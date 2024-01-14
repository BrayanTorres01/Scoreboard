// JS I'll be using for the incrementing the scoreboard
let numLeft = document.getElementById("count-el1")
let numRight = document.getElementById("count-el2")
let countLeft = 0
let countRight = 0

// JS I'll be using for the timer
// to get into the html of the timer display. 
let timerDisplay = document.getElementById("timer-display")
let timerInput = document.getElementById("timer-input")
let timerInterval
let timerSeconds = 0

// functions that will allow the buttons to increment the scoreboard
function leftIncrement1(){
    countLeft++
    numLeft.innerText = countLeft
}

function leftIncrement2(){
    countLeft += 2
    numLeft.innerText = countLeft
}

function leftIncrement3(){
    countLeft += 3
    numLeft.innerText = countLeft
}

function rightIncrement1(){
    countRight++
    numRight.innerText = countRight
}

function rightIncrement2(){
    countRight += 2
    numRight.innerText = countRight
}

function rightIncrement3(){
    countRight += 3
    numRight.innerText = countRight
}

function startTimer() {
    // Clear any existing intervals
    clearInterval(timerInterval)
    // Update the timer every second
    // setInterval is a builtIn fucntion
    const durationInMinutes = parseInt(timerInput.value, 10)
    // Convert minutes to seconds
    const durationInSeconds = durationInMinutes * 60
    // Update timer every second
    timerInterval = setInterval(updateTimer, 1000)
    // Set a timeout to stop the timer after the specified duration
    setTimeout(stopTimer, durationInSeconds * 1000)
}

//  Update the timer when the fucntion is called
function updateTimer() {
    timerSeconds++;
    const minutes = Math.floor(timerSeconds / 60)
    const seconds = timerSeconds % 60
    timerDisplay.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
// Stop timer when function is called
function stopTimer() {
    // Stop the timer
    clearInterval(timerInterval)
    // Reset timer seconds and display
    timerSeconds = 0;
    timerDisplay.innerText = "0:00";
}

// Will reset the timer
function resetTimer() {
    // Stop the timer
    clearInterval(timerInterval)
    // Reset timer seconds and display
    timerSeconds = 0
    timerDisplay.innerText = "0:00"
    countRight = 0;
    countLeft = 0;
    numLeft.innerText = 0
    numRight.innerText = 0
}

// Will pause the timer
function pauseTimer() {
    clearInterval(timerInterval)
}
