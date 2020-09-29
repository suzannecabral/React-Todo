import React from "react";

class TodoList extends React.Component {
    render() {
        const { todoList, keyGen } = this.props
        return(
            
        <ul>
            {todoList.map((item)=>{

            return <li key={keyGen()}>{item.name}</li>

            })}
        </ul>


        );
    }
}

export default TodoList;