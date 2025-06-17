function HabitProgress({habit}){
    return(
        <div>
            <h1>{habit.name}</h1>
            <h4>{habit.description}</h4>
            <h4>Target = {habit.resolution}</h4>
            <p>Progress of the habit</p>
        </div>
    );
}

export default HabitProgress;