import React from "react";


class Todo extends React.Component {


    render() {
        const { keyGen, item, toggleDone }=this.props

        return(
            <li 
                key={keyGen()} 
                className={item.done ? 'done' : 'notDone'} 
                onClick={() => {
                toggleDone(item.id)
            }}>
                {item.name}
            </li>
        );
    }
}

export default Todo;