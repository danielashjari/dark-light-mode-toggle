"use strict";var CHECKBOX=document.getElementById("checkbox"),DARK_MQ=window.matchMedia("(prefers-color-scheme: dark)");CHECKBOX.addEventListener("change",(function(e){e.target.checked?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")})),DARK_MQ.matches&&(CHECKBOX.checked=!0);
//# sourceMappingURL=Script.js.map