
// Union Type → parameter 可能是多个 Type
// 所以使用前可能需要 Narrowing
// 没有 discriminator → 用 in narrowing

type ConnectToApi = {
    path : string;
    header? : string;
}

type ConnectToServer = {
    address: string;
    body? : string;
}

const connection1 : ConnectToApi = {
    path: "/api/product"
}

const connection2 : ConnectToServer = {
    address: "/localhost/server"
}


//还可以单独写一个method来做这个check /
//而且他不光是知道是返回true or false
//他还知道不是这个type就是另一个type

const typeCheck = function(connection : ConnectToApi | ConnectToServer){

    return "path" in connection;
}

// Type Predicate / Type Guard
// 把 narrowing check 单独封装成 function

function isApi(
    data: ConnectToApi | ConnectToServer
): data is ConnectToApi {
    return "path" in data;
}

// true → TS 知道 data 是 ConnectToApi
// false → 在这个 union 里，剩下就是 ConnectToServer

 //type narrowing
    // TS 知道这里是 ConnectToApi
    // "property" in object
    // → 检查 property 是否存在
    // → 同时帮助 TS 确定具体 Type
    // 如果上面 return
    // TS 知道剩下的是 ConnectToServer
const startConnection = function (
    connection: ConnectToApi | ConnectToServer
) {
   
    if ("path" in connection) {
        console.log(`Connect to API: ${connection.path}`);
        return;
    }

    //他还知道不是这个type就是另一个type
    if(typeCheck(connection)){
         console.log(`Connect to API: ${connection.path}`);
        return;
    }

    console.log(`Connect to Server: ${connection.address}`);
};

startConnection(connection1);
// Connect to API: /api/product

startConnection(connection2);
// Connect to Server: /localhost/server


//另一种方法做这个 check的 discriminator 
//Discriminated Union（可辨识联合类型）

// Discriminated Union
// 每个 Type 有相同的 discriminator property
// 但使用不同的 literal value
// 推荐：自己设计 Type → Discriminated Union

type GetFile = {
    type: "file";  // discriminator
    dirct: string;
}

type GetPhoto = {
    type: "photo";  // discriminator
    res : string;
}

const getDoc1 : GetFile = {
    dirct: "/home/download",
    type: "file"
}

const getDoc2 : GetPhoto = {
    res: "/api/photo/v1",
    type:"photo"
}

const getSingleDoc = function(res: GetFile | GetPhoto){

    // check discriminator → Type Narrowing
    if(res.type === "file"){
        console.log(`Get ${res.type} from ${res.dirct}`);
        return
    }

    console.log(`Get photo from ${res.res}`);

}


//class 版的type narrowing
// instanceof → 主要用于 Class Narrowing
// 检查 object 是不是某个 Class 的 instance

class Car {
    make: string;
    model: string;

    constructor(make:string, model: string){
     this.make = make;
     this.model = model;
    }

}

class Motor {
    brand: string;
    size: number;

    constructor(brand: string, size: number){
        this.brand = brand;
        this.size = size;
    }
}

const audi = new Car("audi", "A4");
const bmw = new Motor("BMW", 3000);

type Transport = Car | Motor;

const getTheTransportInfo = function(trans : Transport){
    if(trans instanceof Car){
        console.log(`He drives a car ${trans.make} and model is ${trans.model}`);
        return;
    }


    // Car 已经 return
    // 所以这里 trans → Motor
    console.log(`he rides a bike ${trans.brand} and size is ${trans.size}`);

}


// // // 1. typeof → 基础类型
//  if (typeof value === "string") {}

// // // 2. in / discriminator → Object
//  if ("path" in data) {}
//  if (data.type === "file") {}

// // // 3. instanceof → Class instance
//  if (transport instanceof Car) {}

