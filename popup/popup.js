console.log("Strating popup");
//Checkbox Elements
const RehabSelection = document.getElementById("rehab_selection");

//Button Elements
const StopButton = document.getElementById("stop_button");
const StartButton = document.getElementById("start_button");

StartButton.onclick = () => {
    const prefs = {
        mod: RehabSelection.value
    };
    chrome.runtime.sendMessage({event: 'onStart', prefs});
    //this doesnt seem to work rn
    //send the input data to background.js for processing using the "sendMessage" Chrome API
    // debug: console.log("start button pressed")
 
};

StopButton.onclick = function() {
    chrome.runtime.sendMessage({event: 'onStop'});
    // debug: console.log("stop button pressed")
};

chrome.storage.local.get(["mod"], (result) => {
    let {mod} = result;
    if (mod) {
        RehabSelection.value = mod;
    }
})











//window.open('https://potato.io', -4).focus(); 
