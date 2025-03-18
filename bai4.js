function max() {
    let so1 = + document.getElementById("so1").value;
    let so2 = + document.getElementById("so2").value;
    let so3 = + document.getElementById("so3").value;
    let result;
    if (so1 >= so2){
        if (so1 >= so3){
            result = "Gia tri lon nha la : " + so1;
        }
    }
    else{
        if (so2 >= so3){
            result = "Gia tri lon nha la : " + so2;
        }
        else{
            result = "Gia tri lon nha la : " + so3;
        }
    }
    document.getElementById("output").innerHTML = result;
}