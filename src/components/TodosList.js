import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class TodosList extends Component {
    render() {
        return (
            <div>
                 <ul>
                  {this.props.todos.map(todo =>(
                      <TodoItem  todo={todo} key={todo.id}/>
                  ))}
              </ul>
            </div>
        )
    }
}

export default TodosList
