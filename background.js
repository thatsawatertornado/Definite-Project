//example of what data object looks like
/* let data = {
    "event": "onstart/onstop"
    "prefs": {
    "banana": "banana"
    }
} */

//life cycle event
chrome.runtime.onInstalled.addListener(details => {
    console.log("onInstalled reason: ", details.reason);
}
)

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
    console.log("stopping in background...");
    
    
}

const handleonStart = (prefs) => {
    console.log("start in background");
    console.log("prefs received: ", prefs);
    chrome.storage.local.set(prefs); //saves prefs into local storage; can pull the data anytime
}

function clearCounter(counter) {
    chrome.storage.local.remove(counter);
}

chrome.runtime.onMessage.addListener( () => {
    chrome.tabs.create({ url: 'https://www.potato.io' });
})

