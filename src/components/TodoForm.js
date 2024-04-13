import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [date, setDate] = useState(new Date()); // Mặc định là ngày hiện tại

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        if (value) {
            // add todo
            addTodo(value, date.toLocaleDateString());
            // clear form after submission
            setValue('');
            setDate(new Date()); // Đặt lại ngày tháng năm về ngày hiện tại
        }
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
            <DatePicker className="date" selected={date} onChange={date => setDate(date)} dateFormat="dd/MM/yyyy" /> {/* Thêm DatePicker */}
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}