// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
chrome.devtools.panels.create("Finder Dev Tools", "toast.png", "panel.html", function(panel) {
	panel.onShown.addListener(function(innerPanel) {
		message = {action: "code", content: "sessionStorage.getItem('finder')"};
		message.tabId = chrome.devtools.inspectedWindow.tabId;
    	chrome.extension.sendMessage(message);
	});
});