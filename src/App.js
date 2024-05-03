import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const [editId,setEditId] = useState(0);

  const handleSumbit = (e) =>{

    e.preventDefault();

    if(editId){
      const editTodo = todos.find((e) => e.id === editId);
      const updatedTodos = todos.map((e) => 
      e.id === editTodo.id 
      ? (e={id:e.id ,todo})
      : {id:e.id, todo : e.todo}
    );


    setTodos(updatedTodos);
    setEditId(0);
    setTodo("");
    return;
    }

    if(todo !== ""){
      setTodos([{id:`${todo}-${Date.now()}`, todo}, ...todos])
      setTodo("")
    }

  };


  const handleDelete =(id) => {
    const deleTodo = todos.filter((e) => e.id !== id);
    setTodos([...deleTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((e) => e.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">

      <div className='container'>
        <h1>
          Todo List
        </h1>

        <TodoForm 
          handleSumbit ={handleSumbit}
          todo = {todo}
          setTodo ={setTodo}
          editId = {editId}
        />

        <TodoList
          todos = {todos}
          handleEdit = {handleEdit}
          handleDelete = {handleDelete}
        />

      </div>

    </div>

  );
}

export default App;
