import React from 'react';
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import toast from 'react-hot-toast';


const TasksList = ({tasks, setTasks, setEditTask}) => {

    const handleCompleteTask = (task) => {
        setTasks(
            tasks.map((program) => {
                if(program.id === task.id){
                    return {...program, completed: !program.completed};
                }
                return program;
            })
        )
    };

    const handleEditTask = ({id}) => {
        setEditTask(tasks.find((task) => task.id === id));
    }

    const handleDeleteTask = ({id}) => {
        setTasks(tasks.filter((task) => task.id !== id));
        toast.success('Successfully Deleted')
    };

    return (
        <div className=''>
            <h3 className='text-center text-2xl font-bold my-8 underline'>Program{tasks.length >1 && 's'}: {tasks.length}</h3>
            {
                tasks.length === 0 ?
                <h2 className='text-3xl font-bold text-center mt-20'>Please Add A Program!</h2>
                :
                <div>
                    {
            tasks.map((task, i) => (
                <li className='relative list-none' key={task.id}>
                    <div className='flex items-center'>
                    <p className='text-xl font-bold mb-3 mr-1'>{i+1}. </p>
                    <input value={task.title} type="text" className="input input-bordered w-full max-w-full mb-3 pl-10 pr-16 text-lg font-bold" onChange={(e) => e.preventDefault()}/></div>
                    <input type="checkbox" checked={task.completed === true ? 'checked' : ''} className="checkbox checkbox-info absolute left-7 bottom-6" onClick={() => handleCompleteTask(task)} />
                    <div className='absolute right-2 bottom-5'>
                        <button className='text-blue-400 text-2xl mr-1' onClick={() => handleEditTask(task)}><AiTwotoneEdit /></button>
                        <button className='text-error text-2xl' onClick={() => handleDeleteTask(task)}><AiFillDelete /></button>
                    </div>
                </li>
            )
            )
            }
                </div>
            }
            
        </div>
    );
};

export default TasksList;