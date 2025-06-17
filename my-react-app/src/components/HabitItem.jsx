import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HabitItem.css";

function HabitItem({ habit }) {
  const [isExpand, setIsExpand] = useState(false);

  function onStatusToggle() {
    habit.status = !habit.status;
  }
  return (
    <div className="habit-div">
      <div className="content">
       
        <h4> {habit.status && (
          <i className="fa-solid fa-circle-check" id="check-sign"></i>
        )}{habit.name}</h4>
        <p>{habit.description}</p>

        {isExpand && (
          <div className="expanded-content">
            {habit.status ? null : (
              <button onClick={onStatusToggle} className="complete-btn">
                Complete
              </button>
            )}

            <Link to={`/${habit.id}-progress`}>
              <button>View Progress</button>
            </Link>
          </div>
        )}
      </div>

      <div className="expand" onClick={() => setIsExpand((prev) => !prev)}>
        {isExpand ? (
          <i className="fa-solid fa-angle-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
    </div>
  );
}

export default HabitItem;

