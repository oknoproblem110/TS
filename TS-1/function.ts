//在function里也同样可以限定 parameter 的type 还有 function 返回值的 type
function addNumber (a:number,b: number): number{ 
    return a + b;
} 

//如果没有返回值 就是可以用void 来作为返回值的type 
function printName(name : string) : void{

    console.log(name);
}

//这种情况下一般也可以不写返回的type 他自己会识别 
function reduceNumber(a: number, b : number){

    return a - b;
}

function printIdNumber(id : number | string){
    console.log(id);
}

//另外function也可以作为type 来 作为function的 parameter 或 在object里设定好 

function printWork (item : string | number, workMethod : (printItme: string | number) => void){

workMethod(item);

}

// 注意 这里要注意 传进来的method 必须和 这里 设置好的method parameter 是完全一样的要求
//传进来的 function 必须与要求的 function type 兼容。
printWork(addNumber(4,9), printIdNumber); 

//在object里 

type UserDetail = {
    name: string,
    age: number,
    greeting : () => void // 设定是function type 且 没有 parameter 和 return type 
}

//注意这里 如果想要用 this 指向调用它的 那个 object 就不要用arrow function 
//Arrow function 不创建自己的 this，它会从定义它的外层 lexical scope 获取 this。
// let jackDetail : UserDetail = {
//     name: "Jack",
//     age: 55,
//     greeting: () => {
//         console.log(`Hello I am ${this.name}`);
//     }
// } 

//这里的method的就是比较常用的写法
let peterDetail : UserDetail = {
    name: "Peter",
    age: 15,
    greeting (){
        console.log(`Hello I am ${this.name}`)
    }
}