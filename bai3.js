function so() {
    let number = document.getElementById("so").value;
    let result;
    if (number > 0){
        result = "So " + number + " > 0.";
    }
    else if (number < 0){
        result = "So " + number + " < 0.";
    }
    else {
        result = "Bang " + number;
    }
    document.getElementById("output").innerHTML = result;
}