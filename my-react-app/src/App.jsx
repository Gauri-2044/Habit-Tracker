import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AddHabit from './pages/AddHabit.jsx'
import HabitProgress from './pages/HabitProgess.jsx'

export function appendHabit(habit){
  habits.push(habit)
}

const habits = [
  {
    id: 1,
    name: "Habit 1",
    description: "This is a habit",
    status: false,
    progress: [false, false, false, false, false, false, false],
    total_days: 0,
    isExpand: false,
  },
  {
    id: 2,
    name: "Habit 2",
    description: "This is another habit",
    status: true,
    progress: [true, true, true, true, true, true, true],
    total_days: 7,
    isExpand: false,
  },
  {
    id: 3,
    name: "Habit 3",
    description: "Yet another habit",
    status: false,
    progress: [false, true, false, false, true, false, false],
    total_days: 2,
    isExpand: false,
  },
];

function App(){
  return (
    <>
     <main className="main-content">
      <Routes>
      <Route path='/' element={<Home habits={habits}/>}/>
      <Route path="/progress/:id" element={<HabitProgress habits={habits} />} />
      <Route path='/add-habit' element={<AddHabit/>}/>
    </Routes>
     </main>
    </>
  )
}

export default App
