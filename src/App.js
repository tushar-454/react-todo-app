import React, { useState } from 'react';
import shortid from 'shortid';
import CreateTask from './Component/CreateTask';
import Header from './Component/Header';
import ShowTask from './Component/ShowTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (text) => {
    const task = {
      id: shortid.generate(),
      text: text,
      isCompleted: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const completedTask = tasks.filter((task) => task.isCompleted);
  const inCompletedTask = tasks.filter((task) => !task.isCompleted);

  return (
    <section className='container'>
      <Header />
      <CreateTask createTask={createTask} />
      <ShowTask
        inCompletedTask={inCompletedTask}
        completedTask={completedTask}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </section>
  );
}

export default App;
