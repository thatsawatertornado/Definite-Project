console.log("Strating popup");
//Checkbox Elements
const RehabSelection = document.getElementById("rehab_selection");

//Button Elements
const StopButton = document.getElementById("stop_button");
const StartButton = document.getElementById("start_button");

StartButton.onclick = function() {
    console.log("You clicked the start button!");
    console.log("Rehab is in progress for: ", RehabSelection.value);
    //this doesnt seem to work rn
 
}
StopButton.onclick = function() {
    console.log("You clicked the stop button!");
}












//window.open('https://potato.io', -4).focus(); 
