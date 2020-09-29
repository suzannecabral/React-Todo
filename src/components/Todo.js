import React from "react";


class Todo extends React.Component {
    render() {
        const { keyGen, item }=this.props

        return(
            <li key={keyGen()}>{item.name}</li>
        );
    }
}

export default Todo;