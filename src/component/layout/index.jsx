/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pandora
 * @Date: 2021-02-24 08:25:37
 */

import React from 'react';

import NavTop from '../nav-top/index.jsx';
import NavSide from '../nav-side/index.jsx';

import './theme.css';
class Layout extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="wrapper">
        <NavTop />
        <NavSide />
        {this.props.children}
      </div>
    )
  }
}
export default Layout