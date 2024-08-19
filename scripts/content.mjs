let item,
  item2,
  item3,
  item4,
  item5,
  item6,
  related,
  homeFeed,
  scrollContainer,
  homeFeedIronSelector,
  youtubeLogo,
  shorts,
  commentSection,
  liveChat,
  ad,
  ammo;

chrome.storage.local.get(["mod"], (result) => {
    let {mod} = result;
    if (mod) {
        ammo = mod;
    }
});
var counter = 0;

// EVENT LISTENER
youtubeLogo = document.getElementById("logo-icon");
youtubeLogo.addEventListener("click", () => {
  window.location = "https://www.youtube.com/";
});

// MESSAGE RECEIVER
chrome.runtime.onMessage.addListener(gotMessage);
var thumbnail = document.getElementById("thumbnail");
if (thumbnail) {
  thumbnail.style.visibility = "hidden";
  thumbnail.style.display = "none";
} else {
  console.error("Element with ID 'thumbnail' not found.");
}

// GET THE "TEXT" ELEMENT FROM "MESSAGE"
function gotMessage(message, sender, sendResponse) {
  performAction(message.text);
}

related = document.getElementById("related");
homeFeed = document.getElementById("contents");
thumbnail = document.getElementById("thumbnail");
scrollContainer = document.getElementById("chips-wrapper");
shorts = document.querySelector("[title='Shorts']");
commentSection = document.getElementById("comments");
liveChat = document.getElementById("chat");

async function performAction(message) {
  if (message === "hideRecommendedVideos") {
    related = document.getElementById("related");
    related.style["visibility"] = "hidden";
  } else if (message === "showRecommendedVideos") {
    related = document.getElementById("related");
    related.style["visibility"] = "visible";
  } else if (message === "hideHomeFeed") {
    homeFeed = document.getElementById("contents");
    scrollContainer = document.getElementById("chips-wrapper");
    homeFeed.style["display"] = "none";
    scrollContainer.style["display"] = "none";
  } else if (message === "showHomeFeed") {
    homeFeed = document.getElementById("contents");
    scrollContainer = document.getElementById("chips-wrapper");
    homeFeed.style["display"] = "";
    scrollContainer.style["display"] = "";
  } else if (message === "hideShorts") {
    shorts = document.querySelector("[title='Shorts']");
    shorts.style["display"] = "none";
  } else if (message === "showShorts") {
    shorts = document.querySelector("[title='Shorts']");
    shorts.style["display"] = "";
  } else if (message == "showCommentSection") {
    commentSection = document.getElementById("comments");
    commentSection.style["display"] = "";
  } else if (message == "hideCommentSection") {
    commentSection = document.getElementById("comments");
    commentSection.style["display"] = "none";
  } else if (message == "hideLiveChat") {
    liveChat = document.getElementById("chat");
    liveChat.style["display"] = "none";
  } else if (message == "showLiveChat") {
    liveChat = document.getElementById("chat");
    liveChat.style["display"] = "";
  } else if (message == "showAd") {
    ad = document.querySelectorAll("#masthead-ad");
    ad.forEach(function (ele) {
      ele.style["display"] = "";
    });
  } else if (message == "hideAd") {
    ad = document.querySelectorAll("#masthead-ad");
    ad.forEach(function (ele) {
      ele.style["display"] = "none";
    });
  } else if (message === "hello") {
    await doSomething();
    // declaring variables to store each element
    related = document.getElementById("related");
    homeFeed = document.getElementById("contents");
    scrollContainer = document.getElementById("chips-wrapper");
    youtubeLogo = document.querySelector("#logo-icon");
    shorts = document.querySelector("[title='Shorts']");
    commentSection = document.getElementById("comments");
    liveChat = document.getElementById("chat");
    ad = document.querySelectorAll("#masthead-ad");

    // check if the page has a homefeed
    if (item && item.homeFeed && homeFeed !== null) {
      // set the visibility of home page to hidden
      homeFeed.style["display"] = "none";
      homeFeed = null;
    }

    if (item && item.homeFeed && scrollContainer !== null) {
      // set the display property of scroll container to none
      scrollContainer.style["display"] = "none";
      scrollContainer = null;
    }

    if (youtubeLogo !== null) {
      youtubeLogo.innerHTML =
        '<img src = "https://raw.githubusercontent.com/KishanKokal/Untrapped/89f2281ee2f6f936d9eb831d065ab436cd785675/untrapped.svg" width = "100px"></img>';
      youtubeLogo = null;
    }

    // check if the page has a side bar
    if (item2 && item2.recommendedVideos && related !== null) {
      // set the visibility of side bar to hidden
      related.style["visibility"] = "hidden";
      related = null;
    }

    if (item4 && item4.commentSection && commentSection !== null) {
      commentSection.style["display"] = "none";
      commentSection = null;
    }

    if (item5 && item5.liveChat && liveChat !== null) {
      liveChat.style["display"] = "none";
      liveChat = null;
    }

    if (item6 && item6.ad && ad !== null) {
      ad = document.querySelectorAll("#masthead-ad");
      ad.forEach(function (ele) {
        ele.style["display"] = "none";
      });
    }

    if (item3 && item3.shorts && shorts !== null) {
      // set the visibility of side bar to hidden
      shorts.style["display"] = "none";
      shorts = null;
    }
  }
}

performAction("hello");

// FUNCTION ON WINDOW REFRESH
chrome.storage.local.set(counter);
counter = chrome.storage.local.get(counter);
if (counter === null) {
  counter = 0; // Initialize the counter if it doesn't exist
} else {
  // CONVERTS COUNTER FROM STR TO RADIX 10 INT
  counter = parseInt(counter, 10); // Convert the retrieved value to an integer
}
counter++;

const skipbutton = document.getElementsByClassName("ytp-skip-ad-button");
const bigad = document.getElementById("masthead-ad");
const thumbnails = document.querySelectorAll('ytd-thumbnail, ytd-rich-item-renderer ytd-thumbnail, yt-img-shadow');
export function hidethumbnail(){
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.matches('ytd-thumbnail, ytd-rich-item-renderer ytd-thumbnail, yt-img-shadow, #thumbnail img') || node.querySelector('ytd-thumbnail, ytd-rich-item-renderer ytd-thumbnail, yt-img-shadow, #thumbnail img')) {
            thumbnails.forEach(thumbnail => {
              thumbnail.style.display = 'none';
            });
            bigad.style.display = 'none';
            bigad.style.visibility = 'hidden';
          }
        }
      });
    });
  });
};
observer.observe(document.body, { childList: true, subtree: true });
document.addEventListener('yt-navigate-finish', hidethumbnail);
export function setWindowHeight(x,y){
  var windowHeight = window.innerHeight;
  document.body.style.height = windowHeight + "px";
  console.log(document.body.style.height);
  window.resizeTo(x,y);
}
window.addEventListener("resize",setWindowHeight,false);

export function reductionRV(){
  scrollContainer.style["display"] = "none";
  shorts.style["display"] = "none";
  observer.observe(document.body, { childList: true, subtree: true });
  if (counter >= 10){
    related.style["visibility"] = "hidden";
    homeFeed.style["display"] = "none";
    skipbutton.style["display"] = "none";
  }
  else if (counter >= 3 && counter < 10){
    skipbutton.style["height"] *= (1/counter);
  }
  if(ammo === "thumbnail_blocker"){
    hidethumbnail();
  }
  if(ammo === "thumbnail_blocker"){
    setWindowHeight(1000/counter, 1500/counter);
  }
}
module.exports = {
  hidethumbnail,
  reductionRV,
  setWindowHeight,
};

