import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import shortid from "shortid";

import "./components/Todo.css";



class App extends React.Component {

    state={
      message:"",
      todoList:[
        {
          name:"apple",
          done:false,
          id:"D65QcYQAG",
        },
        {
          name:"orange",
          done:true,
          id:"csID-hJUsM",
        },
        {
          name:"banana",
          done:false,
          id:"IJWSq2Q101",
        },
      ]
    }

  // keyGen = () => Date.now();
  keyGen = () => shortid.generate();

  handleSubmit = (e) => e.preventDefault(); 
  handleInputChange = (e) => this.setState({
    message:e.target.value
  });
  // clickToggleDone = (e) => e.target.addClass("red");

  render(){

    return(
      <div>
        <h2>Todo List</h2>

          <TodoList 
            todoList={this.state.todoList}
            keyGen={this.keyGen}
          
          />

          <h4>{this.state.message}</h4>

          <TodoForm 
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />

      </div>
    );
  }
}



// class App extends React.Component {

//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//       </div>
//     );
//   }
// }  

export default App;
 