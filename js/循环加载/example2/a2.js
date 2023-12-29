import { bar } from "./b2.js";
console.log("a2.js");
console.log(bar());
function foo() {
  return "foo";
}
export { foo };

/***
 * 分析：函数具有提升作用，在执行import {bar} from './b'时，函数foo就已经有定义了
 *
 */

/*** 
 * $ npx babel-node a.js
b2.js
foo
a2.js
bar
 */
