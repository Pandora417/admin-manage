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
          <Route exact={true} path="/" component={(props) => <Home { ...props } />}/>
          <Route path="/product" component={(props) => <Home { ...props } />}/>
          <Route path="/product-category" component={(props) => <Home { ...props } />}/>
          <Route path="/order" component={(props) => <Home { ...props } />}/>
          <Route path="/user" component={(props) => <Home { ...props } />}/>
            {/* <Redirect from="*" to="/"/> */}
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