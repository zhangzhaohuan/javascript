/**
 * 手写promise
 * 参考资料 https://zhuanlan.zhihu.com/p/183801144
 * 参考资料 Promise/A+ 规范：https://promisesaplus.com/
 */
import React, { Component } from "react";
import Promise from "./diyPromise/index";

export default class Demo2 extends Component {
  componentDidMount() {
    console.log(Promise);
  }
  // 手写promise完整版
  diyPromise() {
    const PENDING = "PENDING";
    const FULFILLED = "FULFILLED";
    const REJECTED = "REJECTED";

    const resolvePromise = (promise2, x, resolve, reject) => {
      // 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise  Promise/A+ 2.3.1
      if (promise2 === x) {
        return reject(
          new TypeError("Chaining cycle detected for promise #<Promise>")
        );
      }
      // Promise/A+ 2.3.3.3.3 只能调用一次
      let called;
      // 后续的条件要严格判断 保证代码能和别的库一起使用
      if ((typeof x === "object" && x != null) || typeof x === "function") {
        try {
          // 为了判断 resolve 过的就不用再 reject 了（比如 reject 和 resolve 同时调用的时候）  Promise/A+ 2.3.3.1
          let then = x.then;
          if (typeof then === "function") {
            // 不要写成 x.then，直接 then.call 就可以了 因为 x.then 会再次取值，Object.defineProperty  Promise/A+ 2.3.3.3
            then.call(
              x,
              (y) => {
                // 根据 promise 的状态决定是成功还是失败
                if (called) return;
                called = true;
                // 递归解析的过程（因为可能 promise 中还有 promise） Promise/A+ 2.3.3.3.1
                resolvePromise(promise2, y, resolve, reject);
              },
              (r) => {
                // 只要失败就失败 Promise/A+ 2.3.3.3.2
                if (called) return;
                called = true;
                reject(r);
              }
            );
          } else {
            // 如果 x.then 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.3.4
            resolve(x);
          }
        } catch (e) {
          // Promise/A+ 2.3.3.2
          if (called) return;
          called = true;
          reject(e);
        }
      } else {
        // 如果 x 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.4
        resolve(x);
      }
    };

    class Promise {
      constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = (value) => {
          if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
            this.onResolvedCallbacks.forEach((fn) => fn());
          }
        };

        let reject = (reason) => {
          if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            this.onRejectedCallbacks.forEach((fn) => fn());
          }
        };

        try {
          executor(resolve, reject);
        } catch (error) {
          reject(error);
        }
      }

      then(onFulfilled, onRejected) {
        //解决 onFufilled，onRejected 没有传值的问题
        //Promise/A+ 2.2.1 / Promise/A+ 2.2.5 / Promise/A+ 2.2.7.3 / Promise/A+ 2.2.7.4
        onFulfilled =
          typeof onFulfilled === "function" ? onFulfilled : (v) => v;
        //因为错误的值要让后面访问到，所以这里也要跑出个错误，不然会在之后 then 的 resolve 中捕获
        onRejected =
          typeof onRejected === "function"
            ? onRejected
            : (err) => {
                throw err;
              };
        // 每次调用 then 都返回一个新的 promise  Promise/A+ 2.2.7
        let promise2 = new Promise((resolve, reject) => {
          if (this.status === FULFILLED) {
            //Promise/A+ 2.2.2
            //Promise/A+ 2.2.4 --- setTimeout
            setTimeout(() => {
              try {
                //Promise/A+ 2.2.7.1
                let x = onFulfilled(this.value);
                // x可能是一个proimise
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                //Promise/A+ 2.2.7.2
                reject(e);
              }
            }, 0);
          }

          if (this.status === REJECTED) {
            //Promise/A+ 2.2.3
            setTimeout(() => {
              try {
                let x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0);
          }

          if (this.status === PENDING) {
            this.onResolvedCallbacks.push(() => {
              setTimeout(() => {
                try {
                  let x = onFulfilled(this.value);
                  resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                  reject(e);
                }
              }, 0);
            });

            this.onRejectedCallbacks.push(() => {
              setTimeout(() => {
                try {
                  let x = onRejected(this.reason);
                  resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                  reject(e);
                }
              }, 0);
            });
          }
        });

        return promise2;
      }
    }
  }
  // 手写promise 阶段1
  diyPromise1() {
    // 三个状态：PENDING、FULFILLED、REJECTED
    const PENDING = "PENDING";
    const FULFILLED = "FULFILLED";
    const REJECTED = "REJECTED";

    class Promise {
      constructor(executor) {
        // 默认状态为 PENDING
        this.status = PENDING;
        // 存放成功状态的值，默认为 undefined
        this.value = undefined;
        // 存放失败状态的值，默认为 undefined
        this.reason = undefined;

        // 调用此方法就是成功
        let resolve = (value) => {
          // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
          if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
          }
        };

        // 调用此方法就是失败
        let reject = (reason) => {
          // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
          if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
          }
        };

        try {
          // 立即执行，将 resolve 和 reject 函数传给使用者
          executor(resolve, reject);
        } catch (error) {
          // 发生异常时执行失败逻辑
          reject(error);
        }
      }

      // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
      then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
          onFulfilled(this.value);
        }

        if (this.status === REJECTED) {
          onRejected(this.reason);
        }
      }
    }
  }

  render() {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <div>123123123</div>;
  }
}
