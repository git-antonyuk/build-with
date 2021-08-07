browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('%c 🍾 request, sender, sendResponse: ', 'font-size:12px;background-color: #ED9EC7;color:#fff;', request, sender, sendResponse);
  console.log('Hello from the background')
})
