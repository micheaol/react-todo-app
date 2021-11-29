import React from 'react';
import styles from "./TodoItem.module.css"

const TodoItem = (props) => {
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }

    const handleEditing = ()=>{
        console.log("Edit mde activated")
    }
    const { completed, id, title} = props.todo;
    return ( 
        <li className={styles.item}>
            <div onDoubleClick={handleEditing}>
                <input type="checkbox"
                className={styles.checkbox}
                checked={completed}
                onChange={() => props.handleChangeProps(id)}
                
                />
                <button onClick={() => props.handleDeleteProps(id)}>Delete</button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
        </li>
        )
}

export default TodoItem



