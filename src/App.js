import { useState } from 'react';
import './App.css';
import AddATask from './components/AddATask';
import Tasks from './components/Tasks';

function App() {

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
 
  return (
    <div className="">
      <header>
        <h1 className='text-3xl font-bold text-center mt-10'>Program Of Operation</h1>
      </header>
      <div>

      </div>
      <div className='min-h-[600px] w-[500px] bg-secondary mx-auto mt-10 rounded-2xl p-10'>
        <AddATask 
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Tasks 
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}

export default App;
