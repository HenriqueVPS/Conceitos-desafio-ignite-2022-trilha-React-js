import { TbClipboardText } from "react-icons/tb";
import { TasksProps } from "../../App";
import { Task } from "../Task";
import styles from "./tasks.module.css";

interface Props {
  tasks: TasksProps[];
  handleDeleteTask: (taskId: string) => void;
  completeTask: (taskId: string) => void;
}

export function Tasks({ tasks, handleDeleteTask, completeTask }: Props) {
  const tasksLenght = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksLenght}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluidas</p>
          <span>
            {completedTask} de {tasksLenght}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                completeTask={completeTask}
                handleDeleteTask={handleDeleteTask}
                key={task.id}
                task={task}
              />
            );
          })
        ) : (
          <div className={styles.noTasks}>
            <TbClipboardText size={50} />
            <p>Você ainda não tem tarefas cadastradas!</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </section>
  );
}
