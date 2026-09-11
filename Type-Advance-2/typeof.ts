//type of 
//js 和 ts 都有 typeof
//js


// TS typeof → 从已有 value 获取它的 Type
// typeof name → "Alex"
const peopleName = "Alex Smith";

// typeof name2 → string
let peopleName1 = "Alex Smith";

console.log(typeof peopleName); // string

//ts 
//ts 的就更加多功能一点 如果是let 他的就和js 一样得到的是 
//virable 的 type
//const 就得到的是那个 assign给他的值 

type PeopleInfo = typeof peopleName; // 这里就相当于是 ="Alex Smith"
type PeopleInfo1 = typeof peopleName1;

const dog : PeopleInfo = "Alex Smith"; // 这里就必须是 Alex Smith
const dog1 : PeopleInfo1 = "Karr"; // 这里就是string 随便起名

//更常用的
// typeof settings → 获取整个 object 的 shape
const appSettings = {
    appType : "web app",
    versionNumber: 899,
    appName: "new app"
}

//这里就直接拿到到了 appSettings 这个obj
//可以直接使用他作为一个type 一个 pattern 使用
type AppSetting = typeof appSettings; 

function getAppName (settings : AppSetting){
    return settings.appName;
}

//这里就相当于他的一个快捷写法
function getVersionNumber (settings : typeof appSettings){
    return settings.versionNumber;
}

getAppName(appSettings);
getVersionNumber(appSettings);

//with as const
const settings = {
  appType: "web",
  version: 899
} as const; // 因为const 只是保证这个obj 不会变 
//as const 是保证里面的 也不会变

type Settings = typeof settings;

//结果
// type Settings = {
//   readonly appType: "web";
//   readonly version: 899;
// };
