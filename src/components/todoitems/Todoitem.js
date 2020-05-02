import React from "react";
import './Todoitem.css';

const TodoItems = (props) => {
    const {items, deleteItem} = props;
    let length = items.length;
    const Listitems = length ? (
        items.map(item => {
        return(
            <div key = {item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
            </div>
        )
    }) ) : (
        <p>There is no item to show</p>
    )
    return(
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Delete</span>
            </div>
            {Listitems}
        </div>
    )
} 

export default TodoItems;