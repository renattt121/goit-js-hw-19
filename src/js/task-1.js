const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});
