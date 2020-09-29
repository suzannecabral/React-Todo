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

  handleSubmit = (e) => {
    e.preventDefault()
  }; 
  handleInputChange = (e) => this.setState({
    message:e.target.value
  });

  handleTaskClick = (e, itemId) => {
    console.log(e.target.innerHTML)
    // this.toggleDone(e, this)
    // this.toggleDone(itemId);
  };


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
    console.log("taskId: ", taskId)

    //e.target.innerHTML gets item.name
    // or just pass in item.name


    // need to find the todo item with the same name
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


  render(){

    return(
      <div>
        <h2>Todo List</h2>

          <TodoList 
            todoList={this.state.todoList}
            keyGen={this.keyGen}
            toggleDone={this.toggleDone}
          
          />

          <h4>{this.state.message}</h4>

          <TodoForm 
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            addNewTask={this.addNewTask}
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
 