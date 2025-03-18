// nhan so tuong ung khi nhap vao 1 o input
function inputvalue(value) {
    document.getElementById("caculator").value += value;
}
function outputvalue(){
    // b1: lay du lieu tu input
    let bt = document.getElementById("caculator").value;
    let result = eval(bt);
    document.getElementById("caculator").value = result;
}