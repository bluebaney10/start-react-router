import React,{Component} from 'react'
import Todo from './Todo'
import { Link } from 'react-router'
//import { Link } from 'react-router-dom'
//import Routing from './routes'
//https://github.com/reactbkk/1.0.0

class AppTodo extends Component{
    render(){
        return(
           
            <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <div className="card clearfix">
                        <Link to="/page1">
                          <div className="tab-page">Page 1</div>
                        </Link>
                        <Link to="/page2">
                          <div className="second tab-page">Page 2</div>
                        </Link>
                        <Link to="/page3">
                          <div className="tab-page">Page 3</div>
                        </Link>
                      </div>
                      <Todo buttonColor="green"/>
    
                      {this.props.children}
    
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
           
          </div>
          
         )
    }
}

export default AppTodo