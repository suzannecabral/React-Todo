import React from "react";

const TodoList = (props) => {

    const {keyGen, todoList} = props;

    return (
        <ul>
            {todoList.map((item)=>{
            return <li key={keyGen()}>{item}</li>
            })}
        </ul>
    );
}

export default TodoList;