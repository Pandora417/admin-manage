/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pandora
 * @Date: 2021-02-09 10:05:50
 */
import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css'
// import './index.css';
// import './index.scss'
/**function 形式 */
// function Component(){ // 组件变量名用大写
//   return <h1>I am PQ</h1>
// }

// ReactDOM.render(
//   <Component/>,
//   document.getElementById('app')
// )

/**ES6形式 */
class ES6Component extends React.Component{
  render(){
    return <h1>I am PQ ES6</h1>
  
  }
}

class Component extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Pandora'
    }
  }
  render(){
    setTimeout(()=>{
      this.setState({
        name: 'Pandora Tea'
      })
    },2000)
    return <h1>I am {this.state.name}</h1>
  }
}
ReactDOM.render( 
  <div>
    <Component/>
    <ES6Component/>
  </div>,
  document.getElementById('app')
)