//有的时候 function 的parameters 不确定有还是没有
//object 的 property 也是可有可没有
//就可以用 optional了

function printMessage(message?: string) {
  console.log(`Welcome ${message}`);
}

// optional parameter 在 function 内部可能是 undefined
// 所以 message?: string 读取时相当于 string | undefined

//这里就很flexible 因为可以传parameters 也可不传
printMessage(); // Welcome Alex Wang
printMessage("Alex Wang"); // Welcome undefined

//更好的写法
function printMessage1(message?: string) {
  if (message) {
    console.log(`Welcome ${message}`);
  } else {
    console.log("Welcome");
  }
}
function printMessage2(message?: string) {
  console.log(`Welcome ${message ?? "guest"}`);
}

//object
type Animal = {
  name: string;
  age: number;
  color?: string;
  gender?: "male" | "female";
};

let dog: Animal = {
  name: "dog",
  age: 7,
  gender: "male",
};

let cat: Animal = {
  name: "cat",
  age: 2,
  color: "black",
};

//?? check
// 如果前面的值是 null 或者 undefined 就会 fallback到后面的值

let input = " ";

const isUserInput = input ?? false;

const isUserInput1 = input || false;
