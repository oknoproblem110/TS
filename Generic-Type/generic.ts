//generic types 
//可以给一个笼统的 然后在实现他的时候再给 具体的 
//这样他会更flexiable 一点

// Generic <T>
// → T 是 Type placeholder
// → 使用时再决定具体 Type
// → 也可以让 TypeScript 自动推断
type DataStore<T> = {
    [props:string]: T;
}

const dStore1 : DataStore<string | number> = {
    address : "/home/address",
    storage : 128
}

const dStore2 : DataStore<string> = {
    path : "/image/doc1",
    dataType : "json"
}


//generic fucntion 

function createArr<T>(a: T, b: T){

    return [a, b];

}

const res3 = createArr<string>("12", "test"); // 手动指定 T
const res4 = createArr(19,200); //这种情况下他就会自己推断是什么了 不需要自己写了

//更简单的办法就是可以加更多的Generic place holder 
function createArr2<T, U>(a:T, b:U){
    return [a,b];
}

//就因为他有不同的place holder 所以可以给不同的type
const res5 = createArr2("good", 49); 

//generic constrain 约束
//有的时候虽然是generic 但是也需要有特点的type来约束他
// Generic Constraint
// → 不只是限制 Array / Object
// → 只要想限制 Generic 可以接受的 Type 范围，就可以使用

function combineObj<T extends object, U extends object>(a:T, b: U){

    return {...a, ...b};
}


// 两个都是不同 shape 的 object
// 第一个有 string property
// 第二个有 number property

const objRes1 = combineObj({teacherName: "Jack"}, {teacherAge : 35});


function createArr3<T extends Array<string>, U>(a : T , b: U){

    return [...a, b];
}

const arrRes = createArr3(["apple", "banna", "55"], 90);


