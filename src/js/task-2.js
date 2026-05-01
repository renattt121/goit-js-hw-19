const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function handleNameInput(event) {
  if (event.target.value === "") {
    output.textContent = "незнайомець";
  } else {
    output.textContent = event.target.value;
  }
}

input.addEventListener("input", handleNameInput);
