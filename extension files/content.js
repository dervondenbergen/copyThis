var copyThis = document.createElement("iframe");
copyThis.id = "copyThisExtension";   
copyThis.src = chrome.extension.getURL("copyThis.html");
copyThis.style.height = 0;
copyThis.style.width = 0;
copyThis.style.opacity = 0;
copyThis.style.background = "transparent";
copyThis.style.border = 0;
copyThis.style.position = "absolute";
copyThis.style.top = "-99999px";
copyThis.style.bottom = "-99999px";
document.body.appendChild(copyThis);