window.setTimeout(start, 200);
function start (){
  var copyThisExtension = document.getElementById("copyThisExtension").contentWindow;
};
function copyThis(a){
  copyThisExtension.postMessage(a,"*");
};