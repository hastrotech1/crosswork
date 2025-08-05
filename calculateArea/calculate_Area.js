let len;
let width;

function calculateArea(){
    len = parseFloat(document.getElementById("len").value);
    width = parseFloat(document.getElementById("width").value);

    let area = len * width;
    document.getElementById("result").innerHTML = `The area of the rectangle is: ${area}`;
}

let grocery1;
let grocery2;
let grocery3;

function groceryTracker(){
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    grocery3 = parseFloat(document.getElementById("grocery3").value);

    let totalAmout = grocery1 + grocery2 + grocery3;

    document.getElementById("total-amount").innerHTML = `The total amount for the groceries is: ${totalAmout}`;
}