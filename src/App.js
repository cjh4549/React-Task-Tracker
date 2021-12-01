import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor's appointment",
        day: 'June 2nd at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: "Grocery Shopping",
        day: 'June 5th at 1:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: "Walking my dog",
        day: 'June 10th at 9:00am',
        reminder: false,
    }
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task } 
    setTasks([ ...tasks, newTask ])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter( task => task.id !== id ))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map( task => task.id === id ? {...task, reminder: !task.reminder } : task ))
  }

  return (
    <div className="App">
      <Header title="Task Tracker" showAdd={showAddTask} onShowTask={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length !== 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No task to show'}
    </div>
  );
}

export default App;
