function check(){
    let sudung = + document.getElementById("mucsd").value;
    const muc1 = 1806;
    const mucs2 = 1866;
    const mucs3 = 2167;
    const mucs4 = 2729;
    let result;

    if (sudung <= 50){
        result =sudung*muc1;
    }
    else if (sudung <=100){
        result =(50*muc1)+(sudung-50)*mucs2;
    }
    else if (sudung <=200){
        result =(50*muc1)+(50*mucs2)+(sudung-100)*mucs3;
    }
    else {
        result =(50*muc1)+(50*mucs2)+(100*mucs3)+(sudung-200)*mucs4;
    }
    document.getElementById("output").innerHTML = "Tien Dien : " + result;
}