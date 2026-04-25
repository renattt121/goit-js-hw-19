const input = document.querySelector("#validation-input");
const length = input.dataset.length;

input.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
