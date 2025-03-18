function set(){
    let toan = + document.getElementById("Toan").value;
    let ly = + document.getElementById("Ly").value;
    let hoa = + document.getElementById("Hoa").value;
    TBC = (toan + ly + hoa)/3;
    let result;

    if (TBC<5){
        result = "So diem " + TBC + " Khong dat.";
    }
    else if (TBC<7){
        result = "So diem " + TBC + " Dat.";
    }
    else{
        result = "So diem " + TBC + " Tot.";
    }
    document.getElementById("output").innerHTML = result;
}