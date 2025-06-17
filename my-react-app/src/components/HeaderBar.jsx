import { useState } from "react";
import { Link } from "react-router-dom";
import HabitItem from "./HabitItem.jsx";
import "../styles/HeaderBar.css";

function HeaderBar({ habits }) {
  // Initialize state with the habits passed as props
  const [currentHabits, setcurrentHabits] = useState(habits);
  const [displayBtn, setDisplayBtn] = useState("all");

  // Filter habits based on the button clicked
  const filteredHabits = currentHabits.filter((habit) => {
    if (displayBtn === "all") return true;
    if (displayBtn === "complete") return habit.status === true;
    if (displayBtn === "uncomplete") return habit.status === false;
  });

  // Toggle expand/collapse for a specific habit
  const toggleExpand = (id) => {
    setcurrentHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, isExpand: !habit.isExpand } : habit
      )
    );
  };

  return (
    <div className="header-bar">
      <div className="row">
        <button onClick={() => setDisplayBtn("all")}>All</button>
        <button onClick={() => setDisplayBtn("complete")}>Completed</button>
        <button onClick={() => setDisplayBtn("uncomplete")}>Uncompleted</button>
      </div>

      <div className="habitsList">
        {filteredHabits.map((habit) => (
          <HabitItem
            habit={habit}
            key={habit.id}
            // toggleExpand={toggleExpand} // Pass the toggle function
          />
        ))}

        <Link to="/add-habit">
          <button>
            <i className="fa-solid fa-plus"></i> Add New
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderBar;


