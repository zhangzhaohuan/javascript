import { foo } from "./a2.js";
console.log("b2.js");
console.log(foo());
function bar() {
  return "bar";
}
export { bar };
