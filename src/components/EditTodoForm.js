import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export const EditTodoForm = ({ editTodo, task, initialDate, initialPlace }) => {
  const [value, setValue] = useState(task.task);
  const [date, setDate] = useState(new Date(initialDate));
  const [place, setPlace] = useState(initialPlace);
  const [provinces, setProvinces] = useState([]);

  const handleSelectChange = (e) => {
    setPlace(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id, date.toLocaleDateString(), place);
  };

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get(
          "https://vapi.vnappmob.com/api/province/"
        );
        setProvinces(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProvinces();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <DatePicker
        className="date"
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      {/* <select value={place} onChange={handleSelectChange}>
                <option value="">Select a province</option>
                {
                    provinces.map((item, index) => (
                        <option value={item.province_name} key={index}>{item.province_name}</option>
                    ))
                }
            </select> */}
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
