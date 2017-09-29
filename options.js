"use strict"; // ES6

const key = document.getElementById('key');
const enabled = document.getElementById('enabled');

// Save options to chrome.storage
function saveOptions() {
  chrome.storage.local.set({
    key: key.value,
    enabled: enabled.checked
  }, function() {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function loadOptions() {
  // Default values
  chrome.storage.local.get({
    key: '',
    enabled: true
  }, function(items) {
    key.value = items.key;
    enabled.checked = items.enabled;
  });
}
document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click', saveOptions);
