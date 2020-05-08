import React, { Component } from 'react';

class Assign extends Component {
    componentDidMount() {
        
            
            // Must be writable: true, enumerable: false, configurable: true
            Object.defineProperty(Object, "assignNew", {
              value: function assignNew(target, varArgs) { // .length of function is 2
                'use strict';
                if (target == null) { // TypeError if undefined or null
                  throw new TypeError('Cannot convert undefined or null to object');
                }
                console.log('9090',arguments)
                let to = Object(target);
          
                for (var index = 1; index < arguments.length; index++) {
                  var nextSource = arguments[index];
          
                  if (nextSource != null) { // Skip over if undefined or null
                    for (let nextKey in nextSource) {
                      // Avoid bugs when hasOwnProperty is shadowed
                      if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                      }
                    }
                  }
                }
                return to;
              },
              writable: true,
              configurable: true
            });
          
          const o1 = { a: 1 };
          const o2 = { b: 2 };
          const o3 = { c: 3 };
          
          const obj = Object.assignNew(o1, o2);
          console.log(obj); // { a: 1, b: 2, c: 3 }
          console.log(o1);  // { a: 1, b: 2, c: 3 } 
      }
    render() {
        return (
            <>
                <p>user</p>
            </>
        )
    }
}
export default Assign;
