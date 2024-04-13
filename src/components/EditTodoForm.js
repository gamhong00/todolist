import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const EditTodoForm = ({ editTodo, task, initialDate }) => {
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
            <DatePicker className="date" selected={date} onChange={date => setDate(date)} dateFormat="dd/MM/yyyy" /> {/* Thêm DatePicker */}
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    )
}