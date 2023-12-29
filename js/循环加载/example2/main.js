import * as m from './even.js';
console.log(m.even(10));;
//true
console.log(m.counter);
//6
console.log(m.even(20));
//true
console.log(m.counter);
//17


/***
 * npx babel-node main.js
true
6
true
17  


分析： !!! 是17不是11哦！！！！！
上面代码中，参数n从 10 变为 0 的过程中，even()一共会执行 6 次，所以变量counter等于 6。第二次调用even()时，参数n从 20 变为 0，even()一共会执行 11 次，加上前面的 6 次，所以变量counter等于 17。

 */