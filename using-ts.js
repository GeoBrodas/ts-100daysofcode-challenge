var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
//typescript knows that we get a string through the .value from the input field. Noice!
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
