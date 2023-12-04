import React,{ Component } from "react";

export default class Demo1 extends Component {
  componentDidMount() {
    console.log('git reset test1');
    console.log("------1 start------");
    function timeout(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, "done");
      });
    }
    timeout(100).then((value) => {
      console.log(value);
    });
    console.log("------1-end------");

    console.log("------2 start------");
    // p2依赖p1的状态
    // p4依赖p3的状态
    const p1 = new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error("fail")), 1000);
    });

    const p2 = new Promise(function (resolve, reject) {
      setTimeout(() => resolve(p1), 1000);
    });
    console.log("p1:");
    console.log(p1);
    console.log("p2:");
    console.log(p2);
    p2.then((result) => console.log(result)).catch((error) =>
      console.log(error)
    );

    const p3 = new Promise(function (resolve, reject) {
      setTimeout(() => resolve("success"), 3000);
    });

    const p4 = new Promise(function (resolve, reject) {
      setTimeout(() => resolve(p3), 1000);
    });
    console.log(p3);
    console.log(p4);
    p3.then((result) => console.log(result)).catch((error) =>
      console.log(error)
    );

    p4.then((result) => {
      console.log(result);
      return result;
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
    console.log("------2 end------");
  }
  render() {
    return <div>Demo1</div>;
  }
}
