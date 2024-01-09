import React, { Component } from "react";

export default class MapDom extends Component {
  componentDidMount() {
    let aa;
    console.log(aa);
    console.log("=========Set start============");

    let set = new Set(["red", "green", "blue"]);
    console.log(set);

    for (let item of set.keys()) {
      console.log(item);
    }
    // red
    // green
    // blue

    for (let item of set.values()) {
      console.log(item);
    }
    // red
    // green
    // blue

    for (let item of set.entries()) {
      console.log(item);
    }

    console.log("=========Set end============");

    console.log("=========Map start============");

    const map = new Map([
      ["F", "no"],
      ["T", "yes"],
    ]);

    for (let key of map.keys()) {
      console.log(key);
    }
    // "F"
    // "T"

    for (let value of map.values()) {
      console.log(value);
    }
    // "no"
    // "yes"

    for (let item of map.entries()) {
      console.log(item);
    }
    // "F" "no"
    // "T" "yes"

    // 或者
    for (let [key, value] of map.entries()) {
      console.log(key, value);
    }
    // "F" "no"
    // "T" "yes"

    // 等同于使用map.entries()
    for (let [key, value] of map) {
      console.log(key, value);
    }
    // "F" "no"
    // "T" "yes"

    console.log("=========Map end============");

    console.log("=========WeakMap start============");
    // #当demo1被移除，所对应的wekaMap记录就会自动被移除 start 
    const wm = new WeakMap();
    const element = document.getElementById("demo1");
    wm.set(element, "demo value");
    wm.get(element); // demo value
    document.getElementById("demo1parent").innerHTML = null;
    wm.get(element); // 
    // end 
    console.log('==================')
    //  注意：弱引用的只是键名，键值依然是正常引用
    // 键值obj会在WeakMap产生新的引用，当你修改obj不会影响到内部
    const vm = new WeakMap();
    let key = {};
    let obj = { fool:1};

    wm.set(key, obj);
    obj = null;
    wm.get(key); // Object { foo: 1}
    // 对比对象
    let key1 = "key";
    let obj1 = { fool:1};
    const o = {
      key1: obj1,
    };
    obj1 = null;
    console.log(o.key1); // Object { foo: 1}
    console.log("=========WeakMap end============");
  }
  render() {
    return (
      <div>
        <div>Map</div>
        <div>WeakMap</div>
        <div>Set</div>
        <div>WeakSet</div>
        <div id="demo1parent">
          <div id="demo1"></div>
        </div> 
      </div>
    );
  }
}
