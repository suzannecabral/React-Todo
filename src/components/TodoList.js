import React from "react";
import Todo from "./Todo";



class TodoList extends React.Component {



    render() {
        const { todoList, keyGen, handleTaskClick } = this.props
        return(
            
        <ul>
            {todoList.map((item)=>{

            return(
                <Todo 
                    key={keyGen()}
                    keyGen={keyGen}
                    item={item}
                    handleTaskClick={handleTaskClick}
                />
            ); 

            })}
        </ul>


        );
    }
}

export default TodoList;