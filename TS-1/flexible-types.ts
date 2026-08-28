//如果你想要 virable 只是一种 type 
let ageToday : any = 50; // 可以但是不推荐 除非迫不得已

ageToday = '99';
ageToday = true;
ageToday = {};
ageToday = [];


//更推荐用这种 union type 因为可以 明确哪种 type 
let ageToThisYear: string | number = 77;
