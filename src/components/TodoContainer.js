import React, { Component } from 'react'
import Header from './Header';
import TodosList from './TodosList';

export class TodoContainer extends Component {
   state = {
            todos: [
              {
                id: 1,
                title: "Setup development environment",
                completed: true
              },
              {
                id: 2,
                title: "Develop website and add content",
                completed: false
              },
              {
                id: 3,
                title: "Deploy to live server",
                completed: false
              }
            ]
    }

    handleDelete = id => {
        console.log("Deleted", id)
    }


    handleChange = id => {
        this.setState(prevState =>({
          todos: prevState.todos.map(todo => {
            if (todo.id === id) {
               return{
                ...todo,
                completed: !todo.completed
               }
            }
            return todo;
          })
        }));
      };

    render() {
        return (
            <React.Fragment>
                <Header />
                <TodosList  todos={this.state.todos} handleChangeProps={this.handleChange} handleDeleteProps={this.handleDeleteProps}/>
            </React.Fragment>
        )
    }
}

export default TodoContainer
