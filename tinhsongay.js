function day() {
    let month = + document.getElementById("month").value;

    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
           document.getElementById("output").innerHTML = "So ngay la : 31 ngay";
        break;
        case 2:
            document.getElementById("output").innerHTML = "So ngay la : 28 hoac 29 ngay";
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("output").innerHTML = "So ngay la : 30 ngay";
        break;
        default:
            document.getElementById("output").innerHTML = "Nhap sai xin hay nhap lai :";
        break;
    }
}