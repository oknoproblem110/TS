"use strict";
//create a class in ts
class User {
    fullName;
    age;
    //不像js ts这里可以直接写出property 然后给赋初始值
    hobbies; // 不写的就是直接是public 如果这里不赋值 就要在constructor里赋值
    likeFood = []; // 这个就是一个标准的 property
    tvShows = [];
    //readonly 就是不能给他assign新的值 但是 obj 和 array 可以在这个原始的
    //基础上进行修改 因为他是一个指向内存的地址 内存里怎么改都不算给新值
    nicNames = [];
    //private 就是外面看不到 也改不了 但是class内部 可以改
    skills = ["Walk", "Talk", "Eat"];
    //这里就是在new 一个新的instance出来的时候会call的function
    //有一个short cut 就是可以直接在这个 parameter 里写好public 。。。
    //这样就是表示 直接创建了一个property 并在这里会给他赋值了
    constructor(fullName, age, hobbies) {
        this.fullName = fullName;
        this.age = age;
        //这里就是给上面没有给初始值的property 赋值
        this.hobbies = hobbies;
    }
    //这里就是没写就是public 
    callNicName() {
        console.log(`Hello ${this.nicNames.at(-1)}`);
    }
    addSkills(...newSkills) {
        this.skills = this.skills.concat(newSkills);
        return this.skills;
    }
}
const peter = new User("Peter Alex", 25, ["Play games", "Play basketball"]);
peter.addSkills("run", "swim", "climb");
peter.likeFood = ["Pizza", "Burger"];
peter.tvShows = ["Nba", "F1"];
peter.nicNames.push("Slim", 45, 88, "Old boy");
peter.callNicName();
console.log(peter);
