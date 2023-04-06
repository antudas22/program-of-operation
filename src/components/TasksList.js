import React from 'react';
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";


const TasksList = ({tasks, setTasks}) => {

    const handleDeleteTask = ({id}) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <div className=''>
            <h3 className='text-center text-2xl font-bold my-8 underline'>Tasks</h3>
            {
            tasks.map((task) => (
                <li className='relative list-none' key={task.id}>
                    <input value={task.title} type="text" className="input input-bordered w-full max-w-full mb-3 pl-10 pr-16 text-lg font-bold" onChange={(e) => e.preventDefault()}/>
                    <input type="checkbox" className="checkbox checkbox-info absolute left-2 bottom-6" />
                    <div className='absolute right-2 bottom-5'>
                        <button className='text-blue-400 text-2xl mr-1'><AiTwotoneEdit /></button>
                        <button className='text-error text-2xl' onClick={() => handleDeleteTask(task)}><AiFillDelete /></button>
                    </div>
                </li>
            )
            )
            }
        </div>
    );
};

export default TasksList;