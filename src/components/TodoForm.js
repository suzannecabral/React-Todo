import React from "react";

class TodoForm extends React.Component{ 
  render (){
    const { handleSubmit, handleInputChange } = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="New Task" onChange={handleInputChange} />
          <button type="submit">Add</button>
          <button>Clear Complete</button>
        </form>
      </div>

    );

  }
}

export default TodoForm;