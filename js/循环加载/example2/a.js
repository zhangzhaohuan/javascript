import { bar } from "./b.js";
console.log("a.js");
console.log(bar);
export let foo = "foo";

/***
 * $ npx babel-node a.js
b.js
undefined
a.js
bar
ESM处理循环加载
分析：a.js加载b.js, b.js加载a.js,此时认为a.js的接口已经存在，所以不在去执行a.js,而是继续执行b.js. 执行完再去执行a.js
 */
