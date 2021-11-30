import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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
  ])

  return (
    <div className="App">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
