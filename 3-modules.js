/*const  amount = -0.123
if(amount<10){
    console.log("small number");
}
else{
    console.log("large number");
}
console.log(`this is my first  node app`)*/

// GLOBALS - NO WINDOW!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules(CommonJS)
// module - info about current module(file)
// process - info about env where the program is being executed

/*console.log(process)
setInterval(() => {
    console.log('hello world')
}, 1000)*/

// MODULES

const nam=require('./4-names')
const Hi = require('./5-utils')
// console.log(names)
Hi(`susan`)
Hi(nam.john)
Hi(nam.peter)
const item=require('./6-alt-flavor')
console.log(item)
// Hi(item.items[0])
// Hi(item.person.name)

// node uses commonjs under the hood
// every file in node is a module
require('./7-mind-grenade')