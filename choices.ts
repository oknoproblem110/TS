//enum
enum userType {
  admin, // 0
  employee, //1
  guest, //2
  visitor,
  worker,
}

let user1: userType = 0;
let user2: userType = userType.employee;

user2 = userType.guest;

console.log(user1); //0

console.log(user2); //2

//常用的是 这样写的好处是可以直接得到 对应的string 可以直接用 而不是number 很不好用
enum userStatus {
  checkedin = "checkedin",
  checkedout = "checkedout",
  online = "online",
  offline = "offline",
}

let userStatus1: userStatus = userStatus.checkedin;

userStatus1 = userStatus.online;

console.log(userStatus1); // "online"
