function getBMI() {
    // nhap du lieu
    let w = + document.getElementById("weight").value;
    let h = +document.getElementById("height").value;
    // tinh BMI
    let bmi = w/(h*h);
    // Du ra ket qua
    let result;
    if(bmi >= 30){
        result = bmi + "beo phi";
    }
    else if(bmi >= 25){
        result = bmi + "Thua can";
    }
    else if(bmi >= 18.5){
        result = bmi + "BT";
    }
    else result = bmi + "Suy dinh duong";
    // Ket qua ra
    document.getElementById("output").innerHTML = result;
}