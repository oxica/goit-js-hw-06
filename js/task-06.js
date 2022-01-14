const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", onBlur);
function onBlur(e) {
  const input1 = e.currentTarget;
  const inputLength = Number(input1.dataset.length);
  if (input1.value.length === inputLength) {
    input1.classList.remove("invalid");
    input1.classList.add("valid");
  } else {
    input1.classList.remove("valid");
    input1.classList.add("invalid");
  }
  //console.log(input1);
  //console.log(inputLength);
}
