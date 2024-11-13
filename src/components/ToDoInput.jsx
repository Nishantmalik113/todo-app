import React, {useState} from 'react'

export default function ToDoInput(props) {
  const {handleAddTodos} = props
  const [inputValue, setInputValue] = useState('')
  
  return (
    <div className='input-container'>
        <input value={inputValue} onChange={(e)=>{
          setInputValue(e.target.value)
        }} placeholder='Add Task' />
        <button onClick={()=>{
          if(!inputValue){return}
          handleAddTodos(inputValue)
          setInputValue('')
        }}>
          <i class="fa-solid fa-plus"></i>
        </button>
    </div>
  )
}
