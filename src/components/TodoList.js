import React from 'react'

const TodoList = ({
  todos,
  handleDelete,
  handleEdit}) => {

  return (
    <ul  className='todolists'>

      {
        todos.map((t) => (
          <li className='todolist'>
            <span 
              className='lists' 
              key={t.id}>
              {t.todo}
            </span>

            <button  
              style={{color :"green" }}  
              onClick={(id) =>
              handleEdit(t.id)}>
              Edit
            </button>

            <button
              style={{color :"red" }}   
              onClick={(id) =>
              handleDelete(t.id)}>
              Delete
            </button>

          </li>
        ))
      }
      
    </ul>
  );
};

export default TodoList;
