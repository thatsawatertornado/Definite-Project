//example of what data object looks like
/* let data = {
    "event": "thumbnail_blocker, Bolivia, etc"
    "prefs": {
    "banana": "banana"
    }
} */
//message listener
chrome.runtime.onMessage.addListener(data => { //data is sent from popup.js events
    switch (data.event) {
        case 'onStart':
            console.log("start in background");
        case 'onStop':
            console.log("start in background");
        default:
            break;
    }
})