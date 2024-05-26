let x={value:10};
let y = x;
x.value= 20;
console.log(y);

var students = ["Hisal","Fazal","Hassam"];
students.splice(1,0,...["Momin","Saeed"])
console.log(...students);
function findFazal(std){
    if(std == "Fazal") return true;
    else return false;
}