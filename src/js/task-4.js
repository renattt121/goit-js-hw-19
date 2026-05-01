const control = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function handleFontSizeChange(event) {
  text.style.fontSize = event.target.value + "px";
}

control.addEventListener("input", handleFontSizeChange);
