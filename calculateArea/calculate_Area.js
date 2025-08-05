let len;
let width;

function calculateArea(){
    len = parseFloat(document.getElementById("lenght").value);
    width = parseFloat(document.getElementById("width").value);
    document.getElementById("result").innerHTML = `The area of the rectangle is: ${area}`;
}

let area = len * width;