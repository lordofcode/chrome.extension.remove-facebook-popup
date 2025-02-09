chrome.action.onClicked.addListener(async (tab) => {
    console.log(tab);
    chrome.scripting.executeScript({
      target : {tabId : tab.id},
      files : [ "script.js" ],
    });
  });