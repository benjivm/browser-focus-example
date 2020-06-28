// ==UserScript==
// @name         Override Focus and Visibility API
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let event_name;
    document.hasFocus = function() { return true; };
    window.onblur = function() { window.onfocus = function(){}; return true; };
    for (event_name of ["visibilitychange", "webkitvisibilitychange", "blur"]) { window.addEventListener(event_name, function(event) { event.stopImmediatePropagation(); }, true); }
})();