const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fn1);
function fn1(e) {
  text.style.fontSize = `${e.target.value}px`;
}
