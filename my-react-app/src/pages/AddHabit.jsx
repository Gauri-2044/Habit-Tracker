import "../styles/AddHabit.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import {appendHabit} from '../App'



function AddHabit() {

  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const [habitDuration, setHabitDuration] = useState("");

  const handleAddHabit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    const habit = {
      name: habitName,
      description: habitDescription,
      status: false,
      progress: [false, false, false, false, false, false, false],
      total_days: parseInt(habitDuration, 10),
      isExpand: false,
    };

    if (habitName && habitDescription && habitDuration) {
      appendHabit(habit); // Pass the habit to the parent
      setHabitName(""); // Clear the form fields
      setHabitDescription("");
      setHabitDuration("");
    } else {
      alert("Please fill out all fields!");
    }
  };


  return (
    <div>
      <Navbar />
      <div className="form-div">
        <h2>Add Habit</h2>
        <form>
          <div className="labels">
            <label htmlFor="habitName">Habit Name </label>
            <br />
            <label htmlFor="habitDescription">Habit Description </label>
            <br />
            <label htmlFor="habit-resolution">Duration(days) </label>
            <br />
          </div>

          <div className="input-boxes">
            <input
              type="text"
              id="habitName"
              name="habitName"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
            />
          
            <br />
            <input
              type="text"
              id="habitDescription"
              name="habitDescription"
              value={habitDescription}
              onChange={(e) => setHabitDescription(e.target.value)}
            />
            <br />
            <input
              type="number"
              id="habit-resolution"
              name="habit-resolution"
              value={habitDuration}
              onChange={(e) => setHabitDuration(e.target.value)}
            />
            <br />
          </div>
        </form>
        <button id="add-btn" onClick={handleAddHabit}>Add</button>
      </div>
    </div>
  );
}

export default AddHabit;
