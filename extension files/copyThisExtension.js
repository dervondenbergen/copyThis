window.onload = function() {
  function copyThisExtension(string) {
    var input = document.getElementById("value");
    input.value = string.data;
    input.focus();
    document.execCommand("SelectAll");
    document.execCommand("Copy", false, null);
  }
  window.addEventListener("message", copyThisExtension);
}
