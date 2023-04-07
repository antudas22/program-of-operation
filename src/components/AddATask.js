import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';

const AddATask = ({input, setInput, tasks, setTasks, editTask, setEditTask}) => {

    const updateTask = (title, id, completed) => {
        const newTask = tasks.map((task) =>
            task.id === id ? {title, id, completed} : task
        )
        setTasks(newTask);
        setEditTask('');
    }

    useEffect(() => {
        if(editTask){
            setInput(editTask.title);
        }
        else{
            setInput('');
        }
    }, [setInput, editTask])

    const onInputChange = e => {
        setInput(e.target.value);
    }

    const addATaskHandler = e => {
        e.preventDefault();
        if(!editTask){
            setTasks([...tasks, {id: uuidv4(),title: input, completed: false}]);
            toast.success('Successfully Added')
            setInput('');
        }
        else{
            updateTask(input, editTask.id, editTask.completed)
            toast.success('Successfully Edited')
        }
    }

    return (
        <form onSubmit={addATaskHandler} className='flex justify-around'>
            <input type="text" placeholder="Add A Task..." className="input input-bordered w-full max-w-xs" value={input} required onChange={onInputChange}/>
            <button className='btn'>
                {
                    editTask ? 'Done' : 'Add'
                }
            </button>
        </form>
    );
};

export default AddATask;