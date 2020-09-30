import React from "react";
import Todo from "./Todo";



class TodoList extends React.Component {



    render() {
        const { todoList, keyGen, toggleDone } = this.props
        return(
            
        <ul>
            {todoList.map((item)=>{

            return(
                <Todo 
                    key={keyGen()}
                    keyGen={keyGen}
                    item={item}
                    toggleDone={toggleDone}
                />
            ); 

            })}
        </ul>


        );
    }
}

export default TodoList;