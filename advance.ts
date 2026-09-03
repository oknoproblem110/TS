//getter setter static

// getter = 外面像读 property 一样读，但内部其实执行一段逻辑。
// setter = 外面像给 property 赋值一样写，但内部先执行一段逻辑。
// static = 属于 Class 本身，不属于某一个 instance。


class People {


    constructor (private firstName : string, private lastName: string, private age: number ){

    }

    //这种情况下就可以使用getter 来帮助得到 组合的值 或者说处理过的值

    //这样就相当于新加了一个property 在这个class里
    //不过更准确叫 computed/accessor property，因为 fullName 并没有真的保存一份 "Jimmy Frank"
    //get里必须是有return的 因为return的那个就是这个property的值
    get fullName(){

        return this.firstName + " " + this.lastName; 
    }

    //前面可以写public 还是private 来决定外部是否可以使用他
    private get realAge(){
        return this.age + 1 ;
    }

    //这个是只有class 本身可以使用的 他的instance都不能用
    static bodyType : string; 

    static greeting(word: string){

        console.log(`Hello + ${word}`);
    }
}

const jimmy = new People("Jimmy", "Frank", 36);
console.log(jimmy.fullName); //这里就可以拿到那个getter 设置好的新的property
//console.log(jimmy.realAge); 

//这里就是instance是拿不到这两个static的 
//jimmy.bodyType
//jimmy.greeting("people")

//只有class自己本身可以使用
People.bodyType = "Tall";
People.greeting("Pretty");



//setter 
class Animal{
    //这种写法就是常见的要用一个名字 但是又代表两个property的
    private _anName : string = ""; 
    private _anAge : number = 0;

    //setter 里必须有parameter 是给这个property 设定值的
    //一般是有想对设置的值有validation check的property 用set
    // setter 控制 anName 如何被赋值
    // getter 控制 anName 如何被读取
    set anName(name: string){
     if(name.trim() !== ""){

        this._anName = name;
     }
    }

    //Set 完要get 外面才能拿到这个anName
    get anName(){

        return this._anName;
    }

    private set anAge(age: number){
        if(age > 0){
            this._anAge = age;
        }
    }
} 

const cow = new Animal();
//这里set 然后 get
cow.anName = "Big OX";
//这里是只有get 了 才能拿到
console.log(cow.anName);

//inherite

// ================= Inheritance 继承 =================

// extends = 继承另一个 class
// Child class 可以使用 Parent class 里允许继承的 property / method

// public    → 自己、子类、外部都能用
// protected → 自己、子类能用，外部不能用
// private   → 只有自己 class 能用

class Human {

    protected gender : "Male" | "Female"; 
    protected hobbies : string[] = [];


    constructor (private firstName : string, private lastName: string,
         private age: number, gender: "Male" | "Female" ){
        this.gender = gender;
    }

    // getter 也可以被子类继承
    get fullName(){
        return this.firstName + " " + this.lastName; 
    }

    private get realAge(){
        return this.age + 1 ;
    }
    static bodyType : string; 

    static greeting(word: string){

        console.log(`Hello + ${word}`);
    }
}

//用extends 来表示继承了 Human Class
// extends    → 继承 Parent Class
// super()    → 调用 Parent Class constructor
// protected  → 自己 + 子类可以用，外部不能用
// private    → 只有定义它的 Class 自己能用
class Hooper extends Human{

    public backNumber : number; 
    public teamName : string;
    
    constructor(firstName : string, lastName: string, age: number, 
        backNumber : number, teamName: string, gender: "Male" | "Female", hobbies: string[]){
        
        // super = 调用 Parent class 的 constructor
        // Parent constructor 要什么参数，这里就传什么
        super(firstName, lastName, age, gender);
        this.backNumber = backNumber;
        this.teamName = teamName;

        // hobbies 是 protected
        // 所以 Child class 可以使用
        this.hobbies = hobbies;
    
    }

    //这个就是这个 Hooper class新加的method
    shot(){
        // fullName 是从 Human 继承来的 getter
        console.log(`Number ${this.backNumber} 
            from ${this.teamName} - ${this.fullName} made a three points shot`)
    }
}

const ben = new Hooper("Ben", "Lee", 25, 11, "Tiger", "Male", ["Dance","Singing"]);
ben.shot();


//abstract 抽象类是只能作为base被继承 不能实例的一种类
//一般就是作为基底的class
abstract class UIBase{
    constructor(public systemId : number, public systemName : string){

    }

    loading(){
        console.log("System is loading, Please wait");
    }
}

//const newUi = new UIBase();

class UIPage extends UIBase{

    public pageName: string;

    constructor(systemId : number, systemName: string, pageName: string){
        super(systemId, systemName);
        this.pageName = pageName;
    }
}


