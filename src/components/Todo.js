import React from "react";


class Todo extends React.Component {


    render() {
        const { keyGen, item, handleTaskClick }=this.props

        return(
            <li key={keyGen()} className={item.done ? 'done' : 'notDone'}>{item.name}</li>
        );
    }
}

export default Todo;