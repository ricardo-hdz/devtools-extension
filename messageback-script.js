// document.querySelector('button').addEventListener('click', function() {
//  chrome.extension.sendMessage({action: 'message', content:"Changed by page"}, function(message){});
// });

// TODO Send response to devtools
document.querySelector('button').addEventListener('click', function() {
    sendObjectToDevTools({content: "Changed by page"});
});
function sendObjectToDevTools(message) {
    // The callback here can be used to execute something on receipt
    chrome.extension.sendMessage(message);
}