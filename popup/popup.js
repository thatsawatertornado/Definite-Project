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
 
};

StopButton.onclick = function() {
    chrome.runtime.sendMessage({event: 'onStop'});
};

chrome.stroage.local.get(["mod"], (result) => {
    let {"mod"} = result;
    if (mod) /* is valid*/ {
        RehabSelection.value = mod;
    }
})











//window.open('https://potato.io', -4).focus(); 
