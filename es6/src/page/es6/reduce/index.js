import React, { Component } from "react";

export default class ReduceDom extends Component {
  componentDidMount() {
    console.log("例1：-----求和-----");
    const arr1 = [1, 2, 3, 4, 5];
    const result1 = arr1.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    console.log("例1结果为：" + result1);

    console.log("例2：-----展平嵌套数组-----");
    const arr2 = [
      [0, 1],
      [2, 3],
      [4, 5],
    ];
    const result2 = arr2.reduce((accumulator, currentValue) =>
      accumulator.concat(currentValue)
    );
    console.log("例2结果为：", result2);

    console.log("例3：-----实现管道-----");

    const double = (x) => x * 2;
    const triple = (x) => x * 3;
    const quadruple = (x) => x * 4;
    const pipe = function(...funcs){
        return (initialValue)=> funcs.reduce((accumulator,func)=>func(accumulator),initialValue)
    }
    const multiply24 = pipe(double,triple,quadruple)
    console.log('例3结果：',multiply24(2));

    console.log("例4：-----实现compose----");
    function compose(){
        const args = Array.prototype.slice.call(arguments);
        args.reverse();
        return (initialValue)=>args.reduce((accumulator,arg)=>arg(accumulator),initialValue)
    }

    const multiply24Composed = compose(double,triple,quadruple)
    console.log('例4：',multiply24Composed(2));
  }
  render() {
    return <div>ReduceDom</div>;
  }
}
