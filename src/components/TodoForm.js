import React from "react";

class TodoForm extends React.Component{ 
  render (){
    const { handleSubmit, handleInputChange, addNewTask, clearComplete } = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit}>
          <input id="taskInput" type="text" placeholder="New Task" onChange={handleInputChange} />
          <button type="submit" onClick={addNewTask}>Add</button>
          <button type="submit" onClick={clearComplete}>Clear Complete</button>
        </form>
      </div>

    );

  }
}

export default TodoForm;