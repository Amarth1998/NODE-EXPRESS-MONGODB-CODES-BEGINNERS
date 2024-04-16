// const oper = require('./cust2')

// console.log(oper) //{ add: [Function: add], sub: [Function: sub] }

// console.log(oper.add(5, 3)) //8
// console.log(oper.sub(5, 3)) //2



const {add,sub,mul,name} = require('./cust2')

console.log(add(5, 5)) //8
console.log(sub(5, 5)) //2
console.log(mul(5, 5)) //25
console.log(name)

