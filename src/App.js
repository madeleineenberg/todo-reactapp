import React, {useState, useEffect} from 'react';
import TodoItem from './components/Todo/TodoItem';
import {TaskContext} from './contexts/TaskContext';
import './App.css'
import TodoCreate from './components/Todo/TodoCreate';
import { Global } from './styled/Global';
import {Wrapper} from './styled/Container';
import {Heading} from './styled/Headings';

const todoList = [
  {
    id: 1,
    task: "Do the laundry!",
    dueDate: new Date(2020, 11, 14, 10, 30, 0),
    isCompleted: false,
    priority: 11,
  },
  {
    id: 2,
    task: "Do the dishes",
    dueDate: new Date(2020, 11, 14, 11, 0),
    isCompleted: false,
    priority: 10,
  },
  {
    id: 3,
    task: "Make the bed",
    dueDate: new Date(2020, 11, 14, 6, 30),
    isCompleted: false,
    priority: 1,
  },
]


function App() {

const [taskList, setTaskList] = useState(todoList);

useEffect(()=> {
  const task = JSON.parse(localStorage.getItem("task"))
  if(task){
    setTaskList(task)
  }
},[])

useEffect(()=> {
  localStorage.setItem("task", JSON.stringify(taskList))

},[taskList])

  return (
    <TaskContext.Provider value={{taskList, setTaskList}}>
      <Global/>
    <Wrapper>
      <Heading>Todo App</Heading>
      <TodoCreate/>
      <hr/>
      {taskList.map(todoItem =>{
        return(
        <TodoItem key={todoItem.id} todoItem={todoItem}/>
        )
      })}
    </Wrapper>
    </TaskContext.Provider>
  );
}

export default App;
