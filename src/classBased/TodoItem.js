import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

export class TodoItem extends Component {
    state = {
      editing: false,
    }

    handleEditing = () => {
      this.setState({
        editing: true,
      });
    }

    handleUpdatedDone = (event) => {
      if (event.key === 'Enter') {
        this.setState({ editing: false });
      }
    }

    render() {
      const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };

      const viewMode = {};
      const editMode = {};

      if (this.state.editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }

      const { completed, id, title } = this.props.todo;
      return (
        <li className={styles.item}>
          <div onDoubleClick={this.handleEditing} style={viewMode}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={() => this.props.handleChangeProps(id)}
            />
            <button onClick={() => this.props.handleDeleteProps(id)}>
              <FaTrash />
            </button>
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
          </div>
          <input
            style={editMode}
            type="text"
            className={styles.textInput}
            value={title}
            onChange={(e) => {
              this.props.setUpdate(e.target.value, id);
            }}
            onKeyDown={this.handleUpdatedDone}
          />
        </li>
      );
    }
}

export default TodoItem;
