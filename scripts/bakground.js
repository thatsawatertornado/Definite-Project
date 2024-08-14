//example of what data object looks like
/* let data = {
    "event": "onstart/onstop"
    "prefs": {
    "banana": "banana"
    }
} */
//message listener
chrome.runtime.onMessage.addListener( (data) => { //"data" is sent from popup.js events. This is a fat arrow function
    let {event, prefs} = data;
    switch (event) {
        case 'onStop':
            handleonStop();
            break;
        case 'onStart':
            handleonStart(prefs);
            break;
        default:
            break;
    }
})

const handleonStop = () => {
    console.log("stop in background");
}

const handleonStart = (prefs) => {
    console.log("start in background");
    console.log("prefs received: ", prefs);
}

chrome.runtime.onMessage.addlistener(function(tab) {
    chrome.tabs.create({ url: 'https://www.potato.io' });
});

