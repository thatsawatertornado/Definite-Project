chrome.runtime.onMessage.addListener( (data) => {
    chrome.tabs.create({ url: 'https://www.potato.io' });
});
