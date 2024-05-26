var students = ["usman", "Ali", "Nouman"];
//let searchstudents = students.findIndex(findAli);
//students[5] = "Zeeshan";
//students.sorts();
students.splice(1,0,...["Zahid","Anwar"]);
console.log(...students);
function findAli(std){
    if(std == "Ali") return true;
    else return false;
}

let x=13;
let y=x;
x=50;
console.log(y);