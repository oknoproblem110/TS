//两种方式声明 array

let arr1 = ["jack", "leo"];

//arr1.push(1); 这里自动识别为string type

//easy way
let userNames: (string | number)[];
let phoneNumbers: number[];
let departments: string[];

userNames = [1928923, "sjdasjd1222"];
userNames.push("12sadh123");

phoneNumbers = [234234324, 21321432432];

departments = ["IT", "Admin"];

//generic more advance
let arr: Array<string | number | boolean>;
arr = ["peter", true, 98, "Student", 180, "59kg"];
arr.push("Male");

//当你想限定一个数组的长度 且明确知道或者想设定每个位置是什么 type 就可以用 tuples
let resultArr: [number, string];

resultArr = [99, "peter"];

//object

let userInfo: {
  name: string;
  age: string | number;
  height: string | number;
  job: string;
  nickName: Array<string | number>; // nickName: (string | number)[];
  hobbies: string[];
  role: {
    name: string;
    id: number;
  };
} = {
  name: "Peter",
  age: 25,
  height: "180cm",
  job: "IT",
  nickName: ["JJ", 5050, "Big P", "Arr", 90010],
  hobbies: ["Gaming", "Gym", "Play basketball", "Baking"],
  role: {
    name: "admin",
    id: 12,
  },
};

//如果想要先声明一个 空 object
let obj: {}; // 这样是不行的 这样只能说明 obj是一个非null 非 undefined 的variable

obj = "Peter";

//正确方法 Record<key的类型, value的类型>
let objEmpty: Record<string | number, string | number>; // 前面是 key 的type 后面 是value的type

objEmpty = {
  name: "Peter",
  age: 55,
  15: 20
};

console.log(objEmpty);
