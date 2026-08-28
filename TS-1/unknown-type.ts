//有的时候不确定 在function 的 parameters 里要传什么 type的 但是有不要用 any
// 因为any 太随意了 可以是任何 可以是null 可以是undefined
function print(item: unknown) {
  //然后再使用这个 item 之前 要做 if check 来判断她的 类型
  if (
    typeof item === "object" &&
    !!item &&
    "log" in item &&
    typeof item.log === "function"
  ) {
    item.log();
  }
}
