import { useEffect } from "react";
import { useTodoList } from "@/services/useTodoList";

export function TodoList() {
  const todoList = useTodoList();

  const handleEnter = (ev) => {
    if (ev.key === "Enter") {
      todoList.addTask();
    }
  };

  useEffect(() => {
    todoList.loadTasks();
  }, []);

  return (
    <div>
      <input
        value={todoList.task}
        onChange={(ev) => todoList.setTask(ev.target.value)}
        onKeyDown={handleEnter}
      />

      <ul>
        {todoList.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => todoList.deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}