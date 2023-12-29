import { odd } from './odd'
export var counter = 0;
export function even(n) {
  counter++;
  return n === 0 || odd(n - 1);
}
//   even   counter    odd
//   10         1        9   
//     8         2       7      
//     6         3       5      
//                       3
//                       1      
//     0       

//even        counter       odd    
//10           1            9
//8            2            7
//6            3
//4            4
//2             5            1
//0             6    true

