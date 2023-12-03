import React, { Component } from 'react'

export default class MapDom extends Component {


    componentDidMount(){
let aa ;console.log(aa);
        console.log('=========Set start============');
        
        let set = new Set(['red', 'green', 'blue']);
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

        console.log('=========Set end============');


        console.log('=========Map start============');
   



          const map = new Map([
            ['F', 'no'],
            ['T',  'yes'],
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
          

        console.log('=========Map end============');









    }
    render() {
        return (
            <div>
                MapDom
            </div>
        )
    }
}
