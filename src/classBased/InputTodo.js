import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,

      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.title.trim()) {
        this.props.addTodoProps(this.state.title);
        this.setState({
          title: '',
        });
      } else {
        alert('Please write item');
      }
    }
    
    render() {
      const { title } = this.state;
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Add Todo..."
              value={title}
              name="title"
              className="input-text"
              onChange={this.onChange}
            />
            <button className="input-submit" type="submit">
              <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
            </button>

          </form>
        </div>
      );
    }
}

InputTodo.propTypes = {
  title: PropTypes.node.isRequired,
};

export default InputTodo;
