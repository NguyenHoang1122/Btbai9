function tuoi() {
    let t = document.getElementById("tuoi").value;
    if (t < 15) {
        document.getElementById("output").innerHTML = t + " Tuoi :"+" Khong du dieu kien vao lop 10";
    }
    else {
        document.getElementById("output").innerHTML = t + " Tuoi :" + "Du dieu kien vao lop 10";
    }
}