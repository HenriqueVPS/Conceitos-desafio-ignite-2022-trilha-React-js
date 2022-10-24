import logo from "../../assets/logo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState, FormEvent, ChangeEvent } from "react";

interface NewTaskProps {
  handleAddNewTask: (taskDescription: string) => void;
}

export function Header({ handleAddNewTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleChangeInputNewTask(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  function addTask(e: FormEvent) {
    e.preventDefault();

    handleAddNewTask(newTask);
    setNewTask("");
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo da aplicação" />

      <form onSubmit={addTask} className={styles.newTaskForm}>
        <input
          value={newTask}
          onChange={handleChangeInputNewTask}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
