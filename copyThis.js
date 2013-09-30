var copyThisExtension = document.getElementById('copyThisExtension').contentWindow;
function copyThis(string) {
  copyThisExtension.postMessage(string, '*');
}