// ==UserScript==
// @name         AutoJoin
// @namespace    http://tampermonkey.net/
// @version      2026-05-31
// @description  AutoJoin
// @include      https://www.fallensword.com/*
// @author       You
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    const targetURL = "https://www.fallensword.com/index.php?cmd=guild&subcmd=groups&subcmd2=joinall";

    setTimeout(function() {
        window.location.href = targetURL;
    }, 5000); // refresh every 5 seconds
})();
