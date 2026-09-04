//create a class in ts

class User {

    //不像js ts这里可以直接写出property 然后给赋初始值
    
    hobbies : string[]; // 不写的就是直接是public 如果这里不赋值 就要在constructor里赋值
    public likeFood : string[] = []; // 这个就是一个标准的 property
    public tvShows : string[] = [];
    //readonly 就是不能给他assign新的值 但是 obj 和 array 可以在这个原始的
    //基础上进行修改 因为他是一个指向内存的地址 内存里怎么改都不算给新值
    public readonly nicNames: Array<string | number> = []; 
    //private 就是外面看不到 也改不了 但是class内部 可以改
    private skills : string[] = ["Walk", "Talk", "Eat"];

    //js版的private
    #ideas = [];

    //这里就是在new 一个新的instance出来的时候会call的function
    //有一个short cut 就是可以直接在这个 parameter 里写好public 。。。
    //这样就是表示 直接创建了一个property 并在这里会给他赋值了
    //创建 property + 把 constructor argument assign 给 property。
    constructor(public fullName : string, public age: number, hobbies : string[]){

        //这里就是给上面没有给初始值的property 赋值
        this.hobbies = hobbies;
    }

    //这里就是没写就是public 
   callNicName (){

    //防止 nicNames是空的
    console.log(`Hello ${this.nicNames.at(-1) ?? this.fullName}`);
    }

    addSkills(...newSkills : string[]) : string[] {
        
       this.skills= this.skills.concat(newSkills);

       return this.skills;

    }

    //更好的写法
    addTvShows(...newTvShows : string[]) : string[]{

        this.tvShows.push(...newTvShows);

        return this.tvShows;
    }

}

const peter = new User("Peter Alex", 25, ["Play games", "Play basketball"]);

peter.addSkills("run","swim","climb");
peter.likeFood = ["Pizza", "Burger"];
peter.tvShows = ["Nba", "F1"];
//虽然是readonly 限制的是 property 
// 本身不能被重新赋值，并不代表这个 property 指向的 object/array 本身不可修改。
peter.nicNames.push("Slim", 45, 88,"Old boy");
peter.callNicName();

console.log(peter);