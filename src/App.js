import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import shortid from "shortid";

import "./components/Todo.css";



class App extends React.Component {

    state={
      message:"",
      todoList:[]
    }

  // keyGen = () => Date.now();
  keyGen = () => shortid.generate();

  handleSubmit = (e) => {
    e.preventDefault()
  }; 
  handleInputChange = (e) => this.setState({
    message:e.target.value
  });


  addNewTask = () => {
    const currentList = this.state.todoList;
    const newTask={
      name:this.state.message,
      done:false,
      id:this.keyGen(),
    }
    currentList.push(newTask);
    this.setState({todoList:currentList});
  };

  toggleDone = (taskId) => {
    // need to find the todo item with the same id (not name)
    // and change its done to true

    //map over array
    //when we find item clicked, toggle done
    //otherwise return the item as is

    this.setState({
      todoList: this.state.todoList.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            done: !task.done
          };
        }
        return task;
      })
    });

  };  

  // filterComplete = () => {
  //   const openTasks = this.state.todoList.filter(function (task) {
  //     if (task.done === false) {
  //       return task;
  //     } else return null;
  //   });
  //   console.log(openTasks)
  // }

  // clearComplete = () => {
  //   let openTasks=this.filterComplete();
  //   console.log(openTasks);
  //   // this.setState=({todoList:openTasks});
  // }


  clearComplete = () => {
    const openTasks = this.state.todoList.filter(function (task) {
      if (task.done === false) {
        return task;
      } else return null;
    });
    // console.log(openTasks)
    this.setState({todoList:openTasks});
  }

  render(){

    return(
      <div>
        <h2>Todo List</h2>

          <TodoList 
            todoList={this.state.todoList}
            keyGen={this.keyGen}
            toggleDone={this.toggleDone}
          
          />

          <TodoForm 
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            addNewTask={this.addNewTask}
            clearComplete={this.clearComplete}
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
 