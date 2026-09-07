
// Index Signature
// → Object 的 property 名不确定时使用
// → 规定动态 key 和 value 的 Type

//我不知道这个 object 未来具体有哪些 key，
// 所以不把 property 写死；但规定 key 和 value 必须是什么类型。
type Res = {
    [prop : string | number] : string | number | boolean;
}

const res1 : Res = {
    statusCode : 201,
    404 : false,
    statusName: "Created"
}