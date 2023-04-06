import React from 'react';
import {v4 as uuidv4} from 'uuid';

const AddATask = ({input, setInput, tasks, setTasks}) => {

    const onInputChange = e => {
        setInput(e.target.value);
    }

    const addATaskHandler = e => {
        e.preventDefault();
        setTasks([...tasks, {id: uuidv4(),title: input, completed: false}]);
        setInput('');
    }

    return (
        <form onSubmit={addATaskHandler} className='flex justify-around'>
            <input type="text" placeholder="Add A Task..." className="input input-bordered w-full max-w-xs" value={input} required onChange={onInputChange}/>
            <button className='btn'>Add</button>
        </form>
    );
};

export default AddATask;