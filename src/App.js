import React,{useState}from 'react'
import TodoList from './TodoList';
const App = () => {
  const [task,setTask]= useState("");
  const [todos,setTodos] = useState([]);
  const onchange=(e)=>{

    setTask(e.target.value);
  }
  const onsubmit=(e)=>{
    e.preventDefault();
    if(task===""){
      alert("Give some task");
    }else{
    const newtodos=[...todos,task];
    setTodos(newtodos);
    setTask("");
  }
  }
  const deletefun=(indexValue)=>{
    const newtodos = todos.filter((todo,index)=> index !== indexValue);
    setTodos(newtodos);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={onsubmit}>
              <input size="30" type="text" name="task" value={task} onChange={onchange} /> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>
            </form>
            <TodoList todoList={todos} deletefun={deletefun}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
