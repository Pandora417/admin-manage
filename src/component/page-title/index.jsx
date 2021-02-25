/*
 * @Description: 标题
 * @Version: 1.0
 * @Autor: Pandora
 * @Date: 2021-02-25 15:11:30
 */
import React from 'react';

class PageTitle extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor");
  }
  componentWillMount(){
    console.log(this.props.title + " - pandora")
    document.title = this.props.title + ` - pandora`
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
      return true;        // 记得要返回true
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <h1 className="page-header">{ this.props.title }</h1>
        </div>
      </div>
    )
  }
}
export default PageTitle 