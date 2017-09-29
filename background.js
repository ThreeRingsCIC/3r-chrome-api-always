"use strict"; // ES6

// Icon clicked - open options page
chrome.browserAction.onClicked.addListener(tab => chrome.runtime.openOptionsPage());

// Load settings from storage and watch for changes
let settings = { key: '', enabled: false };C:\Users\Dan\Documents\GitHub\3r-chrome-api-always
const loadSettings = ()=>{
  chrome.storage.local.get({
    key: '',
    enabled: true
  }, items => settings = items)
};
chrome.storage.onChanged.addListener(loadSettings);
loadSettings();

// Inject headers when connecting to 3r.org.uk
chrome.webRequest.onBeforeSendHeaders.addListener(details => {
  if(settings.enabled && settings.key != ''){
    details.requestHeaders.push({ name: 'Authorization', value: `APIKEY ${settings.key}` });
  }
  return {requestHeaders: details.requestHeaders};
}, { urls: ["https://www.3r.org.uk/*"] }, ["blocking", "requestHeaders"]);
