const radios = document.querySelectorAll('input[type="radio"]');

function handleRadioChange(event) {
  document.body.style.backgroundColor = event.target.value;
}

function addChangeListener(radio) {
  radio.addEventListener("change", handleRadioChange);
}
radios.forEach(addChangeListener);
