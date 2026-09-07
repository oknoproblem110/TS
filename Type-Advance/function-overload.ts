
//可以用function overload 来解决
//必须写在前面 提前定好
// Function Overload
// → 根据不同 input，告诉 TS 更准确的 return type
function check(input: string) : string;
function check (input: any[]) : number;

function check(input : string | any[]){
    if(typeof input === "string"){

        const numberOfWord = input.split(" ").length;

        return `The input is a string and its length is ${numberOfWord}`;
    } 

    return input.length;
}

const result1 = check("Hi I am Peter Alex");
// const ch = result1.split(" ");
// 这里不行是因为这个返回值可能是 number 或者 string
const ch = result1.split(" ");

const result2 = check(["Good", "Morning", "teacher"]);
const ch1 = result2 + 1;