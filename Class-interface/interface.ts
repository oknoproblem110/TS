//interface
//可以有两种用 一种是obj的 像type 一样
//另一种是class implement 的
//他规定了 需要有哪些properties 和 function
//且只是规定 不赋值和实现function

//// Interface
// → 规定一个 object 必须有什么 properties / methods
// → 只规定 structure，不提供具体值和 method implementation
interface PlayBasketball {
  //这里只规定都有什么property 不赋值
  point: number;
  foul: number;

  //这里只规定有什么method 不实现
  pass(toTeamMate: string): void;
  score(points: number): number;
  getFoul(foulOnMemeber: string, foulType: string, foulNumner: number): number;
  celebrate(): void;
}

//obj 的interface

//这种情况下interface 和 type没啥区别
// interface → 特别适合描述 object / class 的结构

// type → 更灵活
// object、union、literal、tuple 等都可以

type PlayBall = {
  point: number;
  foul: number;

  pass(toTeamMate: string): void;
  score(points: number): number;
  getFoul(foulOnMemeber: string, foulType: string, foulNumner: number): number;
  celebrate(): void;
};

//唯一的区别就是
//可以以同样的名字加一个interface 然后 增加新的property 或者method
//他会自动被merge到原来的 interface里

// interface 可以 Declaration Merging
interface PlayBasketball {
  moves: string[];
}

//type 就不行
// type PlayBall = {\
// }

// interface vs type
// 描述 object 时两者非常像

// interface → 主要描述 object / class structure
// type → 更灵活，可以做 object / union / literal / tuple 等
// interface → 支持同名 Declaration Merging
// type → 不支持同名重复声明

const player1: PlayBasketball = {
  point: 20,
  foul: 2,
  moves: ["Spin move", "Eurp Step"],

  pass(teamMateName: string) {
    console.log(`Pass to ${teamMateName}`);
  },
  score(points: number) {
    this.point += points;
    return this.point;
  },
  getFoul(foulOnMemeber: string, foulType: string, foulNumner: number) {
    console.log(`Foul on ${foulOnMemeber} with ${foulType}`);
    this.foul += foulNumner;
    return this.foul;
  },
  celebrate() {
    console.log("YES!!!!!!!");
  },
};

const player2: PlayBall = {
  point: 90,
  foul: 4,

  pass(teamMateName: string) {
    console.log(`Pass to ${teamMateName}`);
  },
  score(points: number) {
    return this.point + points;
  },
  getFoul(foulOnMemeber: string, foulType: string, foulNumner: number) {
    console.log(`Foul on ${foulOnMemeber} with ${foulType}`);
    return this.foul + foulNumner;
  },
  celebrate() {
    console.log("YES!!!!!!!");
  },
};

//interface 給 class
// implements = class 必须实现 interface 规定的 structure
// 一个 class 可以 implements 多个 interfaces
// interface 只规定“必须有什么”，不提供具体实现
// extends = 继承现成实现
// implements = 承诺自己实现

interface LearnEnglish {
  words: string[];
  grammer: string;

  read(words: string[]): void;
  studyGrammer(): string;
}

interface LearnMath {
  numbers: number[];

  add(numbers: number[]): number;
  times(numbers: number[]): number;
}

class Student implements LearnEnglish, LearnMath {
  words = ["Apple", "Array"];
  grammer = "good grammer";
  numbers = [1, 4, 3, 2];

  read(words: string[]): void {
    words.forEach((word) => {
      console.log(word);
    });
  }

  studyGrammer(): string {
    return this.grammer;
  }

  add(numbers: number[]) {
    const finalNumber = numbers.reduce((pre, curr) => pre + curr, 0);
    return finalNumber;
  }
  times(numbers: number[]): number {
    const finalNumber = numbers.reduce((pre, curr) => pre * curr, 1);
    return finalNumber;
  }
}
