//ts 里需要type 但是如果是 有初始值的就不需要写 是什么type了
let userName1: string;
let age = 30; //Type Inference

//function也一样
function addAge(a: number, b = 10) {
  console.log(a + b);
}

addAge(10, 15);
