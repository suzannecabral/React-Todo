import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    render() {
        const { todoList, keyGen } = this.props
        return(
            
        <ul>
            {todoList.map((item)=>{

            return(
                <Todo 
                    keyGen={keyGen}
                    item={item}
                />
            ); 

            })}
        </ul>


        );
    }
}

export default TodoList;