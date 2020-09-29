import React from "react";

const TodoForm = (props) => {

    const { handleSubmit, handleInputChange } = props;
    
    return(
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New Task" onChange={handleInputChange} />
            <button type="submit">Add</button>
          </form>
        </div>
    );
}

export default TodoForm;