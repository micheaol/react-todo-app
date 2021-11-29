import React, { Component } from 'react'

export class InputTodo extends Component {

    state = {
        title: ""
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value,
            
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        if(this.state.title.trim()){
            this.props.addTodoProps(this.state.title)
            this.setState({
                title: ""
              });
        }else{
            alert("Please write item")
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add Todo..." 
                    value={this.state.title}
                    name="title"
                    className="input-text"
                    onChange={this.onChange}
                    />
                    <button className="input-submit">Submit</button>
                    
                </form>
            </div>
        )
    }
}

export default InputTodo
