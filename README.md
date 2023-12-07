# Discontinued: Three Rings API-Always

**This project is discontinued. In its current form it is incompatible with ManifestV3 and so cannot be installed into Chrome versions from mid-2024 onwards, and it doesn't appear to be being used.**

Browser plugin for Chrome and Firefox. Given a
*[Three Rings](https://www.3r.org.uk/)* API key, automatically passes
that key with every request, allowing the browser to automatically log
in and perpetually stay logged-in.

**Warning:** use of this plugin puts your *Three Rings* account at risk,
as anybody with physical access to your computer can use the
*Three Rings* account associated with the API key you supply. You
are responsible for securing the computer appropriately and for
revoking the API key if it is ever compromised.

## Installation

Install in Chrome in Developer Mode using the "Load unpacked extension..."
button, or pack it to a CRX for your use.

Install in Firefox in Developer Mode using the "Load Temporary Add-on"
button, or compile it as an XPI for your use.

## Limitations

This plugin does nothing to suppress the keep-alive checks done by the
client-side Javascript. Because API keys were never intended to be used
for extended user-controlled sessions, the keep-alive checks will always
result in a page refresh (under the assumption that the session has
timed out). This could be desirable (e.g. for an auto-refreshing rota)
but could make use of long-interaction features like writing News or Comms
messages very frustrating.

## Unsupported software

This software is released without warranty. Use it at your own risk.
