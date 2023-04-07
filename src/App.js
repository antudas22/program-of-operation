import { useEffect, useState } from 'react';
import './App.css';
import AddATask from './components/AddATask';
import TasksList from './components/TasksList';
import  { Toaster } from 'react-hot-toast';

function App() {

  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(initialState);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])
 
  return (
    <div className="">
      <Toaster position="bottom-center" />
      <header>
        <h1 className='text-3xl font-bold text-center mt-10'>Program Of Operation</h1>
      </header>
      <div>

      </div>
      <div className='px-4'>
      <div className='min-h-[600px] lg:w-[500px] bg-secondary mx-auto mt-10 rounded-2xl p-10'>
        <AddATask 
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
          editTask={editTask}
          setEditTask={setEditTask}
        />
        <TasksList 
          tasks={tasks}
          setTasks={setTasks}
          setEditTask={setEditTask}
        />
      </div>
      </div>
    </div>
  );
}

export default App;
