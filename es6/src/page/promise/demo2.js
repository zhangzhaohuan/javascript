/**
 * 手写promise
 * 参考资料 https://zhuanlan.zhihu.com/p/183801144
 * 参考资料 Promise/A+ 规范：https://promisesaplus.com/
 */
import React,{ Component } from "react";
import Promise  from "./diyPromise/index";

export default class Demo2 extends Component {
  componentDidMount() {
    console.log(Promise);
  }
  render() {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <div>123123123</div>;
  }
}
