import { useState, useEffect } from "react"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {

  const [todos,setTodos] = useState([
    {input: 'Hello! Add your First Todo',complete:true},
  ])

  const [selectedTab, setselectedTab] = useState('All')

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,{input : newTodo, complete : false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex)=>{
      return valIndex != index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index){
    let newTodoList = [...todos]
    let CompletedTodo = todos[index]
    CompletedTodo['complete']=true
    newTodoList[index]= CompletedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos){
    localStorage.setItem('tpdp-app1',JSON.stringify({todos : currentTodos}))
  }

  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app1')){return}
    let db = JSON.parse(localStorage.getItem('todo-app1'))
      setTodos(db,todos)
  },[])

  return (
    <>
      <Header todos={todos}/>

      <Tabs selectedTab={selectedTab} 
      setselectedTab={setselectedTab} 
      todos={todos}/>

      <ToDoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab ={selectedTab}  todos={todos} />

      <ToDoInput handleAddTodos={handleAddTodos}/>
    </>
  )
}

export default App
