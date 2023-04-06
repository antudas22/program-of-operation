import React from 'react';

const Tasks = ({tasks, setTasks}) => {
    return (
        <div className='mt-4'>
            <h3 className='text-center text-2xl font-bold mb-4'>Tasks</h3>
            {
            tasks.map((task, i) => (
                <input key={i} value={task.title} type="text" className="input input-bordered w-full max-w-full mb-3 px-10 text-lg font-bold" onChange={(e) => e.preventDefault()}/>
            )
            )
            }
        </div>
    );
};

export default Tasks;