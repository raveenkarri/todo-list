import React from 'react'

const TodoList = ({todoList,deletefun}) => {
  return (
    <div>
      {todoList.map((todo,index) => 
         <div key={index}>
            <h3>{todo} &nbsp; <button onClick={()=>deletefun(index)}>Delete</button></h3>
       </div>
    )}
      </div>
   
  )
}

export default TodoList
