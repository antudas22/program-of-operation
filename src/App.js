import { useState } from 'react';
import './App.css';
import AddATask from './components/AddATask';

function App() {

  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);
 
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
          task={task}
          setTask={setTask}
        />
      </div>
    </div>
  );
}

export default App;
