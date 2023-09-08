// "use strict";
/** */
// x=5;
// console.log(x);
/**2 parameters with the same name */
// function f(x,x){
//     console.log(x)
// }
// f(5,6);
/**read only property */
// let s="hello";
// s.length=10;
// console.log(s.length);
/**delete variable are not allowed */
// let x=11;
// delete x;
/**object in js */
// let user={
//     name:"sama",
//     age : 21
// };
// /**access object useing dot notation or bracket notation => user[""] */
// console.log(user.name);
// console.log(user["age"]);
// /***second way to create object */
// let user2 = new Object({
//     name2:"ahmed",
//     age2:18,
    
// })
// console.log(user2.name2);
// console.log(user2.age2);
// /*** */
// user2.name2="mohamed";
// console.log(user2.name2);
// /***assign objects */
// let a1={
//     num1: 1,
// }
// let a2={
//     num2: 2,
// }
// let a3=Object.assign(a1,a2);
// console.log(a3);
// /***this */
// let userfunc = {
//     country:"egypt",
//     getCountry:function(){
//         return this.country
//     }
// }
// console.log(userfunc.getCountry());
// let user={
//     name:"ahmed",
//     age:21
// }
// console.log(user.name);
// console.log(user["age"]);
// 
let a1={
    num1:1,
}
let a2={
    num2:2,
}
let a3=Object.assign(a1,a2);
console.log(a3);