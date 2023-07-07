import React, { useState } from 'react';

function CreateTask({ createTask }) {
  const [text, setText] = useState('');
  const [error, setError] = useState({});

  const createTaskFunc = (e) => {
    if (text) {
      createTask(text);
      setError({});
    } else {
      setError({
        border: '1px solid red',
        boxShadow: '0px 0px 5px 3px #ff00008a',
        transition: '0.3s',
      });
    }
    e.preventDefault();
    setText('');
  };

  return (
    <>
      <form className='new-task-container box'>
        <label htmlFor='new-task'>Add New Task</label>
        <input
          type='text'
          id='new-task'
          style={error}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='submit'
          id='addTask'
          value='Add Task'
          onClick={createTaskFunc}
        />
      </form>
    </>
  );
}

export default CreateTask;
