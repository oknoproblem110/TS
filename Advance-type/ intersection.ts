//intersction types 可以俩个以上的types 拼成一个type

// Intersection Type: &
// 把多个 Type 组合成一个新的 Type
// 新 Type 必须同时满足所有 Type 的要求

type ConnectData = {
  connectURL: string;
  resource: string;
};

type ConnectApi = {
  connectApi: string;
  resData?: string; //这个就是可有可无
};

type ResourceData = {
  connectRes: string;
  connectDat: string;
};

type ResourceApi = {
  res: string;
  resab: string;
};

type Resource = {
  mas: string;
  brs: string;
};

//可以把多个type 组合成不同的新type
type ComType1 = ConnectData & ConnectApi & ResourceData;
type ComType2 = ResourceApi & Resource;

const bd: ComType1 = {
  connectURL: "sd",
  resource: "sds",
  connectApi: "cs",
  connectRes: "asd",
  connectDat: "qasd",
};

//interface 也有类似的
interface A {
  word: string;
  mark: string;
  num: number;

  add(num1: number, num2: number): void;
  times(num1: number, num2: number): number;
}

interface B {
  qwe: string;

  read(): void;
}

interface C {
  nas: string;
  bas: number;

  call(): void;
}

interface D extends A, B, C {}
