/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pandora
 * @Date: 2021-02-24 09:15:15
 */

import React from 'react';
import { Link } from 'react-router-dom'

class NavTop extends React.Component{
  constructor(props){
    super(props)
  }
  // 退出登录
  onLogout(){

  }
  render(){
    return(
      <div className="navbar navbar-default top-navbar" role="navigation"> 
        <div className="navbar-header"> 
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button> 
          <Link className="navbar-brand" to="index.html"><b>Pandora</b></Link> 
        </div> 
        <ul className="nav navbar-top-links navbar-right"> 
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-user fa-fw"></i>
              欢迎，Pandora
              <i className="fa fa-caret-down"></i>
            </a> 
            <ul className="dropdown-menu dropdown-user"> 
              <li>
                <span onClick={() => {this.onLogout()}}>
                  <i className="fa fa-sign-out fa-fw"></i> 
                  <span>Logout</span>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-sign-user fa-fw"></i> 
                  <span>用户信息</span>
                </span>
              </li>
            </ul> 
          </li> 
        </ul> 
      </div> 
    )
  }
}
export default NavTop