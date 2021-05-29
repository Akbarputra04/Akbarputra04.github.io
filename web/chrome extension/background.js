chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete') {
        chrome.runtime.onMessage.addListener((msg, sender, response) => {
            if (msg.isRun) {
                chrome.tabs.executeScript(tabId, {
                    file: "content-script.js"
                }, res => {
                    const isExist = res[0].toLowerCase().search('customer login') > -1
                    
                    response({status: isExist})
                });
            }
            return true
        })
    }
})