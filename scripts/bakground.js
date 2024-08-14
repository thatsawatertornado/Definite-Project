//example of what data object looks like
/* let data = {
    "event": "onstart/onstop"
    "prefs": {
    "banana": "banana"
    }
} */
//message listener
chrome.runtime.onMessage.addListener(data => { //data is sent from popup.js events
    switch (data.event) {
        case 'onStart':
            console.log("start in background");
            console.log("prefs received: ", data.prefs);
            break;

        case 'onStop':
            console.log("stop in background");
            break;
        default:
            break;
    }
})