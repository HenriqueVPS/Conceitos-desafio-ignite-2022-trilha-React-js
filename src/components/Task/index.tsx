import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { TasksProps } from "../../App";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface TaskProps {
  task: TasksProps;
  handleDeleteTask: (taskId: string) => void;
  completeTask: (taskId: string) => void;
}

export function Task({ task, handleDeleteTask, completeTask }: TaskProps) {
  function checkTask() {
    completeTask(task.id);
  }

  function deleteTask() {
    handleDeleteTask(task.id);
  }

  return (
    <>
      <div className={styles.task}>
        <button className={styles.checkContainer}>
          {task.isCompleted ? (
            <div onClick={checkTask}>
              <BsFillCheckCircleFill />
            </div>
          ) : (
            <div onClick={checkTask}></div>
          )}
        </button>

        <p className={task.isCompleted ? styles.taskCompleted : ""}>
          {task.description}
        </p>

        <button className={styles.deleteButton}>
          <TbTrash onClick={deleteTask} size={25} />
        </button>
      </div>
    </>
  );
}
