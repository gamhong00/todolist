import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task, initialDate}) => {
    const [value, setValue] = useState(task.task);
    const [date, setDate] = useState(new Date(initialDate)); // Set ngày hiện tại từ prop

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id, date.toLocaleDateString());
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
            <input type="date" value={date.toISOString().substring(0,10)} onChange={(e) => setDate(new Date(e.target.value))} /> {/* Thêm input ngày */}
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    )
}