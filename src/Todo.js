import React, { Component, PropTypes } from 'react';

class Todo extends Component{

    static _propTypes = {
        buttonColor: PropTypes
    }
  
    state={
        inputText:'',
        listItem:[]
    }

    deleteListAtIndex=(index)=>{
        //this.state.listItem.splice(index,1)
        // this.setState({})  //check every state 
        const result=this.state.listItem
        result.splice(index,1)
        this.setState({
            listItem:result
        })

    }

    submitList=()=>{
        this.setState({
            listItem:this.state.listItem.concat([this.state.inputText]),
            inputText:''
        })
    }

    handleKeyPress=(event)=>{
        if(event.key==='enter'){
            this.submitList()
        }
    }

    handleChangeText=(event) =>{
        this.setState({inputText:event.target.value})
    }

    render(){
        return(
        <div className="card clearfix">
            <div className="to-do-box">
                <h1 className="title">To-do-list</h1>
                <div className="form-box">
                    <input className="input-todo"
                    type="text" onChange={this.handleChangeText}
                    value={this.state.inputText}
                    placeholder="what do you want to do?" 
                    onKeyPress={this.handleKeyPress}/>
                    <button className="bb-input button"
                    onClick={this.submitList} 
                    style={{background:this.props.buttonColor}}>Add</button>
                </div>

                <div className="list-box">
              {
                  this.state.listItem.map((value,index)=>{
                      return(

                          <div key={index+value} className="list-item">
                          <div className="text-list"> {value}</div>
                          <div className="bb-action"
                          onClick={this.deleteListAtIndex.bind(this,index)}>x</div>
                         
                          
                          </div>
                      )
                  })
              }
             </div>

            </div>


        </div>
         )
    }
}

export default Todo