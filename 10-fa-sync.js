//destructured method:
const {readFileSync, writeFileSync}=require('fs');
//another method:
// const fs=require('fs');
// fs.readFileSync;
console.log('start')
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second)
writeFileSync('./content/result-sync.txt',`Here is the result: ${first},${second}`,{flag:'a'})
console.log('done with this task')
console.log('starting the next one')
//seems this was the synchronous approach



//waka_58920aea-d456-4186-9746-2882642f1bf2