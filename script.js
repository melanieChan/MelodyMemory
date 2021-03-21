// global constants
const clueHoldTime = 1000; //how long each clue plays
// 1 k milliseconds = 1 second

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence




//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;     // number of tones / clues being played for a round
var gamePlaying = false;

var tonePlaying = false;
var volume = 0.5;

var guessCounter = 0;  // counts number of accurate tones player repeats

function startGame() {
  progress = 0;
  gamePlaying = true;
  
  // hide start, show stop button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  // console.log("play seq");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  
  // hide stop, show start button
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}



// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}

// plays tone of given button for given length
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

// tone begins
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

// tone ends
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)





// light up buttons without user input 
function lightButton(btn) {
  document.getElementById("gameBtn" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("gameBtn" + btn).classList.remove("lit");
}

// a button is lit up and played
function playSingleClue(btn) {
  console.log(btn);
  if (gamePlaying) {
    lightButton(btn);  // light up
    playTone(btn, clueHoldTime);  // play
    
    // clear out button after clueHoldTime passes
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// plays a sequence 
function playClueSequence() {
  guessCounter = 0;  // will keep track of player's streak
  
  let delay = nextClueWaitTime;
  
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    
    // play a clue / button
    setTimeout(playSingleClue, delay, pattern[i]);
    
    // time when next clue will play
    delay += cluePauseTime; // play next tone after current tone with time in between the 2 tones

    delay += clueHoldTime; // tone playing
  }
}


function loseGame() {
  stopGame();
  alert("Sorry, you lost.");
}
function winGame() {
  stopGame();
  alert("Congrats, you won!");
}


function guess(userGuess){
  console.log("user guessed: " + userGuess);
  if(!gamePlaying){
    return;
  }

  // check if guess is correct
  var correctBtn = pattern[guessCounter];
  
  // incorrect guess
  if (correctBtn !== userGuess) {
    loseGame();
  }
  
  // user correctly guessed
  
  // not done playing all clues
  else if (guessCounter !== progress) {
    guessCounter++;
  }
  
  // repeated all clues given 
  else if (guessCounter === progress){
    // no more clues left in pattern
    if (progress === pattern.length - 1) {
          winGame();
    }
    
    // more clues yet to be given, play next clue sequence
    progress++;
    playClueSequence();
  } 
  
}