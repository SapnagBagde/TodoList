import React from 'react'

const TodoForm = ({
  handleSumbit,
  todo,
  setTodo,
  editId}) => {

  return (
    <form 
      className='todoForm' 
      onSubmit={handleSumbit}>

      <input 
        type="text"
        placeholder='Add task' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button  
        style={{color :"blue" }} 
        type='submit'>
        {editId ?  "Edit" : "Add"} 
      </button>

  </form>

  );
};

export default TodoForm;
