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


// import { Link } from 'react-router-dom';
// import '../styles/HeaderBar.css';
// import HabitItem from './HabitItem.jsx';
// import { useEffect , useState } from 'react';

// const habits = [
//   {
//     id: 1,
//     name: 'Habit 1',
//     status: false,
//     progress: [false, false, false, false, false, false, false],
//     total_days: 0,
//   },
//   {
//     id: 2,
//     name: 'Habit 2',
//     status: false,
//     progress: [false, false, false, false, false, false, false],
//     total_days: 0,
//   },
//   {
//     id: 3,
//     name: 'Habit 3',
//     status: false,
//     progress: [false, false, false, false, false, false, false],
//     total_days: 0,
//   },
// ];

// // Logic for All , completed and Uncomplte buttons
// const [displayBtn , setDisplayBtn]  = useState('all')

// useEffect(()=>{
// const habits_to_load = habits.filter((habit) => {
//   if (displayBtn === 'all') {
//     return habit;
//   } else if (displayBtn === 'complete') {
//     return habit.status === true;
//   } else if (displayBtn === 'uncomplete') {
//     return habit.status === false;
//   }
// });
// },[displayBtn])

// function HeaderBar() {
//   return (
//     <div className="header-bar">
//       <div className="row">
//         <Link to="/">
//           <button onClick={()=>{ setDisplayBtn('all')}}>All</button>
//         </Link>
//         <Link to="/">
//           <button onClick={()=>{
//             setDisplayBtn('complete')
//             habit.status = true;
//             }}>Completed</button>
//         </Link>
//         <Link to="/">
//           <button onClick={()=>{
//             setDisplayBtn('uncomplete');
//             habit.status = false;
//             }}>Uncomplete</button>
//         </Link>
//       </div>
//       <div className="habitsList">
//         <HabitItem habit={habit} />
//         {/* {habits.map((habit) => (
//           <HabitItem habit={habit} key={habit.id} />
//         ))} */}
//         <Link to='/add-habit'>
//         <button>
//           <i className="fa-solid fa-plus"></i> Add New
//         </button>
//         </Link>

//       </div>
//     </div>
//   );
// }

// export default HeaderBar;
