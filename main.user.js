// ==UserScript==
// @name         AutoJoin
// @namespace    http://tampermonkey.net/
// @version      2026-05-31
// @description  AutoJoin with pause/resume toggle
// @include      https://www.fallensword.com/*
// @author       You
// @match        https://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
  const TARGET_URL = "https://www.fallensword.com/index.php?cmd=guild&subcmd=groups&subcmd2=joinall";
  const DELAY = 5000;
  const KEY = "autojoin_active";

  // Restore last state (default: active)
  let isActive = GM_getValue(KEY, true);

  // --- Build toggle button ---
  const btn = document.createElement("button");
  btn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99999;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.25);
    transition: background 0.2s;
  `;

  function updateBtn() {
    btn.textContent = isActive ? "⏸ Pause AutoJoin" : "▶ Resume AutoJoin";
    btn.style.background = isActive ? "#e74c3c" : "#27ae60";
    btn.style.color = "#fff";
  }

  btn.addEventListener("click", () => {
    isActive = !isActive;
    GM_setValue(KEY, isActive);
    updateBtn();
  });

  updateBtn();
  document.body.appendChild(btn);

  // --- Auto-redirect ---
  setTimeout(() => {
    if (isActive) {
      window.location.href = TARGET_URL;
    }
  }, DELAY);

})();
