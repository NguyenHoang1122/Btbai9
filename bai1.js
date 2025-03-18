function check() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let C = a%b;
    if(b == 0) {
        document.getElementById("output").innerHTML = "Khong the chia 1 so cho 0";
    }
     else if(C != 0){
        document.getElementById("output").innerHTML = "A khong chia het cho B";
    }
    else
        document.getElementById("output").innerHTML = "A chia het cho B";
}