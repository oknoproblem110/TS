//null and undefined 

//可以在 一开始就让 userName 可以是 string，也可以明确为空 null，也可以是 undefined。
let userName : string | null | undefined; 

//由于不确定是否存在这个id的html element 这里 htmlElement 有可能是null
let htmlElement = document.getElementById("input-box");

//可以用这个！来让他不是null 但是要小心使用 因为可能 在compile的时候不报错 运行的时候真的是null 就会 break 

let htmlElement1 = document.getElementById("title")!;

let htmlElement2 = document.getElementById("title");

let htmlElement3 = document.getElementById("title");


//也可以在这里使用的时候force 他变成不是null的
let titleValue = htmlElement2!.ariaLabel; // 这里得到的值也是string | null

//这个是最好的 做null check 如果不是null 就用他的值 如果 是null 就是undefined
let titleValue1 = htmlElement3?.ariaLabel;

let titleValue2 = htmlElement1.ariaLabel!; // 这里就是force 他不能是null

//type casting Type Assertion（类型断言） 也要小心使用 
let htmlElement5 = document.getElementById("input-box") as HTMLInputElement | null;

let titleValue3 = htmlElement5?.value;







