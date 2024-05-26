// Pass by Value Example

let x = 10;
function increase(x) {
x++;
}
console.log(x);
//10

let y = { value: 10 };
function increaseObj(y) {
y.value++;
}
increaseObj(y);
console.log(y.value);
//11