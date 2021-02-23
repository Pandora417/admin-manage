/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pandora
 * @Date: 2021-02-09 10:05:50
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

// 页面
import Home from './page/home/index.jsx'
import Layout from './component/layout/index.jsx'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={(props) => <Home { ...props } />}/>
            <Redirect from="*" to="/"/>
          </Switch>
        </Layout>
      </Router>
      // <Home/>
    )
  }
}
ReactDOM.render( 
  <App/>,
  document.getElementById('app')
)