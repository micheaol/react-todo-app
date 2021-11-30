import React, { Component } from 'react'
import Header from '../functionBased/Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from "uuid";
import { Switch, Route } from 'react-router-dom';
import About from '../functionBased/About';
import NotMatch from '../functionBased/NotMatch';
import Navbar from '../components/Navbar';


export class TodoContainer extends Component {
   state = {
            todos: [],
    }

    handleDelete = id => {
        this.setState({
            todos: [
              ...this.state.todos.filter(todo => {
                return todo.id !== id;
              })
            ]
          });
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

    addTodoItem = title =>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          });
    }

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
              if (todo.id === id) {
                todo.title = updatedTitle
              }
              return todo
            }),
          })
      }
      componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
          this.setState({
            todos: loadedTodos
          })
        }
      }

      componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
          const temp = JSON.stringify(this.state.todos)
          localStorage.setItem("todos", temp)
        }
      }
    render() {
        return (
          <>
            <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <div className="container">
                        <div className="inner">
                            <Header />
                            <InputTodo addTodoProps={this.addTodoItem}/>
                            <TodosList  
                            todos={this.state.todos} 
                            handleChangeProps={this.handleChange} 
                            handleDeleteProps={this.handleDelete}
                            setUpdate={this.setUpdate}
                            />
                        </div>
                    </div>
                  </Route>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="*">
                      <NotMatch />
                  </Route>
            </Switch>
        </>
        )
    }
}

export default TodoContainer
