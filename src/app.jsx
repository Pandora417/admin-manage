/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pandora
 * @Date: 2021-02-09 10:05:50
 */
import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import './index.scss'
// ReactDOM.render(
//   <div>
//     <i className="fa fa-snowflake-o"></i>
//     <h1>Hello, world!</h1>
//   </div>
//   ,
//   document.getElementById('app')
// )
// 样式没有了横杠，变成了驼峰
let style = { // 优先级比css更高一点
  // color: 'red',
  // fontSize: '20px',
}
let name = 'Pandora'
let flag = false
let names = ['ppq', 'pq', 'pandora']
let jsx = (
  <div className="jsx" style={style}>
    {/*变量*/}
    <p>I am {name}</p>
    {/**条件判断 */}
    {
      flag ? <p>I am {name}</p> : <p>not {name}</p>
    }
    {/**数组循环 */}
    {
      names.map((name, index) => 
        <p key={index}>Hello,I love {name}</p>
      )
    }
    jsx____
  </div>
);

ReactDOM.render(
  jsx,
  document.getElementById('app')
)