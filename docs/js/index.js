function disableButton() {
  var element = document.getElementById('main');
  element.classList.add("main-disabled");
}

function enableButton() {
  var element = document.getElementById('main');
element.className = element.className.replace(/\main-disabled\b/g, "");
}