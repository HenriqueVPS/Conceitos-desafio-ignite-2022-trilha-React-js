import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./styles/global.css";

export interface TasksProps {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function handleAddNewTask(taskDescription: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        description: taskDescription,
        isCompleted: false,
      },
    ]);
  }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutDeleted = tasks.filter((task) => {
      return task.id != taskId;
    });

    setTasks(tasksWithoutDeleted);
  }

  function completeTask(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div>
      <Header handleAddNewTask={handleAddNewTask} />
      <Tasks
        completeTask={completeTask}
        handleDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </div>
  );
}

export default App;
