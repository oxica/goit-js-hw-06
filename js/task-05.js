const myInput = document.querySelector('#name-input' );
const mySpan = document.querySelector('#name-output');

myInput.addEventListener('input', newInput);

function newInput(e) {
    //console.log(e.currentTarget);
    mySpan.textContent = e.currentTarget.value;

    if (e.currentTarget.value === "") {
        mySpan.textContent = 'Anonymous'
    }
}