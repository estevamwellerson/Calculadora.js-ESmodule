import { buttonClear, buttonPress, typing } from "./btnPress.js";
import { calculate } from "./calculate.js";
import { copyToClipboard } from "./copyToClipaboard.js";
import { themeSwitcher } from "./themeSwither.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {charKeyBtn.addEventListener("click",buttonPress)});

document.getElementById("clear").addEventListener("click", buttonClear)

input.addEventListener("keydown", typing);

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard);

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher);
