import React from 'react';

function ShowTodo({ inCompletedTask, completedTask, toggleTask, deleteTask }) {
  return (
    <>
      <div className='todo-list box'>
        <h2>Incomplete Tasks</h2>
        <ul id='items'>
          {inCompletedTask.map((task) => (
            <li className='item' key={task.id}>
              <input
                style={{ marginRight: '5px' }}
                type='checkbox'
                id={task.id}
                onChange={() => toggleTask(task.id)}
              />
              <label htmlFor={task.id}>{task.text}</label>
            </li>
          ))}
        </ul>
      </div>
      {/* /todo-list  */}

      <div className='complete-list box'>
        <h2>Completed Tasks</h2>
        <ul>
          {completedTask.map((task) => (
            <li className='item' key={task.id}>
              <input
                style={{ marginRight: '5px' }}
                type='checkbox'
                checked={task.isCompleted}
                onChange={(e) => {
                  toggleTask(task.id);
                  return e.target.checked;
                }}
              />
              {task.text}
              <button className='delete' onClick={() => deleteTask(task.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* /complete-list */}
    </>
  );
}

export default ShowTodo;
