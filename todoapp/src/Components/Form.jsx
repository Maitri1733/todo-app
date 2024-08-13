import { useState } from "react";
import Styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={Styles.todoform} onSubmit={handleSubmit}>
      <input
        className={Styles.moderInput}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo Items..."
      ></input>
      <button className={Styles.moderButton} type="submit">
        Submit
      </button>
    </form>
  );
}
