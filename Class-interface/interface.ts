//interface
//可以有两种用 一种是obj的 像type 一样
//另一种是class implement 的
//他规定了 需要有哪些properties 和 function 
//且只是规定 不赋值和实现function

interface PlayBasketball{

    //这里只规定都有什么property 不赋值
    point: number;
    foul: number;

    //这里只规定有什么method 不实现
    pass(toTeamMate: string): void;
    score(points : number) : number;
    getFoul(foulOnMemeber : string, foulType: string, foulNumner: number ): number;
    celebrate(): void; 

}



//obj 的interface

//这种情况下interface 和 type没啥区别
type PlayBall = {
     
    point: number;
    foul: number;

    pass(toTeamMate: string): void;
    score(points : number) : number;
    getFoul(foulOnMemeber : string, foulType: string, foulNumner: number ): number;
    celebrate(): void; 
}

//唯一的区别就是
//可以以同样的名字加一个interface 然后 增加新的property 或者method
//他会自动被merge到原来的 interface里
interface PlayBasketball{
    moves: string [];
}

//type 就不行
// type PlayBall = {

// }

const player1 : PlayBasketball = {
    point : 20,
    foul: 2,
    moves: ["Spin move", "Eurp Step"],

    pass(teamMateName : string){
        console.log(`Pass to ${teamMateName}`);
    },
    score(points: number){
        return this.point + points;
    },
    getFoul(foulOnMemeber : string, foulType: string, foulNumner: number){

         console.log(`Foul on ${foulOnMemeber} with ${foulType}`);
        return this.foul + foulNumner;
    },
    celebrate(){
         console.log("YES!!!!!!!");
    }
}



const player2 : PlayBall = {

    point : 90,
    foul: 4,

    pass(teamMateName : string){
        console.log(`Pass to ${teamMateName}`);
    },
    score(points: number){
        return this.point + points;
    },
    getFoul(foulOnMemeber : string, foulType: string, foulNumner: number){

         console.log(`Foul on ${foulOnMemeber} with ${foulType}`);
        return this.foul + foulNumner;
    },
    celebrate(){
         console.log("YES!!!!!!!");
    }
}
