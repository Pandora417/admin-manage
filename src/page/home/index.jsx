/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pandora
 * @Date: 2021-02-21 21:03:41
 */
import React from 'react'
import PageTitle from '../../component/page-title/index.jsx'
import './index.css'
class Home extends React.Component{
  render(){
    return(
      <div id="page-wrapper">
        <PageTitle title="首页" />
        <div className="row">
          <div className="col-md-12">
            body
          </div>
        </div>
        <button className="btn btn-default">test</button>
      </div>
    )
  }
}
export default Home