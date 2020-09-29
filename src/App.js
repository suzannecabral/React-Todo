import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import "./components/Todo.css";



class App extends React.Component {
  constructor() {
    super();
    this.state={
      message:"",
      todoList:[
        "apple",
        "orange",
        "banana",
      ]
    }


  }

  keyGen = () => Date.now();
  handleSubmit = (e) => e.preventDefault(); 
  handleInputChange = (e) => this.setState({message:e.target.value});
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
 