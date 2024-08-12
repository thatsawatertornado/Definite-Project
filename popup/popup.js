console.log("Strating popup");
//Checkbox Elements
const RehabSelection = document.getElementById("rehab_selection");

//Button Elements
const StopButton = document.getElementById("stop_button");
const StartButton = document.getElementById("start_button");

StartButton.onclick = function() {
    const prefs = {
        https://www.youtube.com/watch?v=dFVxUrd1wzA&list=PLVrGZCP4x3PRHKbq-gDrSygGHbU4X9pTR&index=5
    }
    chrome.runtime.sendMessage({event: 'onStart'});
    console.log("You clicked the start button!");
    //this doesnt seem to work rn
    //send the input data to background.js for processing using the "sendMessage" Chrome API
 
}
StopButton.onclick = function() {
    chrome.runtime.sendMessage({event: 'onStop'});
    console.log("You clicked the stop button!");
}













//window.open('https://potato.io', -4).focus(); 
