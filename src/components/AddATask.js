import React from 'react';

const AddATask = ({input, setInput, task, setTask}) => {

    const onInputChange = e => {
        setInput(e.target.value);
    }

    const addATaskHandler = e => {
        e.preventDefault();
        setInput([...task, {title: input, completed: false}]);
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