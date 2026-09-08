// Index Signature
// → object 的 key 不确定时使用
// → 规定动态 key 和 value 的 type

//我不知道这个 object 未来具体有哪些 key，
// 所以不把 property 写死；但规定 key 和 value 必须是什么类型。
type Res = {
    [prop : string | number] : string | number | boolean;
}

// Record<K, V>
// → 也可以描述动态 object
// K = key type
// V = value type
let objRes : Record<number | string, string | boolean| number>;


const res1 : Res = {
    statusCode : 201,
    404 : false,
    statusName: "Created"
}

let res2: Res = {};
res2.style = "free";
res2.numOfName = 45;


// as const
// → 把 value 变成更具体的 literal type
// → object/array property 会变 readonly

let arrNames1 = ["Jack", "Leo","Peter"] as const;

//arrNames1.push("luke") 这里就不行了 因为是readonly了
let pepName = arrNames1[2];

type AMG = {
    engSize : string;
    engName: string;
    price: number;
}

let objCar = {
    make : "BWM",
    year: 1995
} as const;

// objCar.price = 19900; 不能加
//objCar.make = "AMG"; 不能改

