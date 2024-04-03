'use strict';

const startButton = document.getElementById('startButton');
const output = document.getElementsByClassName('output');

//Creates a new speech recognition instance allowing for a speech  session 
const recognition = new webkitSpeechRecognition(); 

recognition.continuous = true; //Continuous recognition -means recognition will continue listening for speech input until explicitly stopped.
recognition.lang = 'en-US'; //Set the language for recognition 

//Event listener for when speech recognition starts
recognition.onstart = function () {
    output.textContent = 'Listening ...';
}

//Event listener for when speech recognition results are available
recognition.onresult = function(event){
const transcript = event.results[event.results.length - 1][0].transcript ; //Get the transcript of the last result
}
