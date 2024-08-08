import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState(new Date());
  const [place, setPlace] = useState("");
  const [provinces, setProvinces] = useState([]);

  const handleSelectChange = (e) => {
    setPlace(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value, date.toLocaleDateString(), place);
      setValue("");
      setDate(new Date());
      setPlace("");
    }
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
        placeholder="What is the task today?"
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
        Add Task
      </button>
    </form>
  );
};
