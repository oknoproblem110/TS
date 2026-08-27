//enum
enum UserType {
  admin, // 0
  employee, //1
  guest, //2
  visitor,
  worker,
}

let user1: UserType = 0;
let user2: UserType = UserType.employee;

user2 = UserType.guest;

console.log(user1); //0

console.log(user2); //2

//常用的是 这样写的好处是可以直接得到 对应的string 可以直接用 而不是number 很不好用
enum UserStatus {
  checkedin = "checkedin",
  checkedout = "checkedout",
  online = "online",
  offline = "offline",
}

let userStatus1: UserStatus = UserStatus.checkedin;

userStatus1 = UserStatus.online;

console.log(userStatus1); // "online"

//另一种写法来实现choices 更常用 
//literal types

let userStatus2 : "CheckIn" | "CheckOut" | "OnSite" | "OffSite" | 100 | 101 = "CheckOut";

userStatus2 = 100;

//tuple 也可以用 提前设定好 规定的值 限制数组长度，并且限制每个位置的类型。
let tuples1 : ["Ok" | 1 , "No" | 0]; 
tuples1 = [1, "No"];

//更easy的 更常用的 方式来实现这种需求 
//custom type, type alases 

type UserStatus3 = "CheckIn" | "CheckOut" | "OnSite" | "OffSite" | 0 | 1;

let userCurrStatus : UserStatus3 = "OffSite";

userCurrStatus = "CheckIn";

userCurrStatus = 1;

//这样的好处就是 即使以后再加更多的type 也不需要再去更新所有地方
function updateUserStatus (status : UserStatus3){


}

//obj 也可以这样用

type User = {
  name : string,
  age: number,
  height : string | number,
  status : UserStatus3,
  nickNames : Array<string | number>,
  sites : string [],
  role : {
    name : string,
    id : number
  }
}

let jerry : User = {
  name: "Jerry Smith",
  age: 50,
  height: "175 cm",
  status: "OffSite",
  nickNames : ["Bird", "Rock", 1130],
  sites: ["VIC", "WA"],
  role : {
    name: "Admin",
    id: 1992
  }
}