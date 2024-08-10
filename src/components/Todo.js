import { useEffect, useRef, useState } from "react";
import editSVG from "../assets/edit.svg";
import deleteSVG from "../assets/delete.svg";
import filledCircleSVG from "../assets/filledCircle.svg";
import unfilledCircleSVG from "../assets/unfilledCircle.svg";

function Todo({ item, todos, setTodos }) {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };

  const handleEdit = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();

      // position the cursor at the end of the text
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  const handleInpuSubmit = (event) => {
    event.preventDefault();

    // Update localStorage after editing todo
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);

    setEditing(false);
  };

  const handleInputBlur = () => {
    // Update localStorage after editing todo
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);

    setEditing(false);
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));

    // Update localStorage after deleting todo
    const updatedTodos = JSON.stringify(
      todos.filter((todo) => todo.id !== item.id)
    );
    localStorage.setItem("todos", updatedTodos);
  };

  return (
    <li id={item?.id} className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInpuSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <button className="todo_items_left" onClick={completeTodo}>
            {item.is_completed ? (
              <img src={filledCircleSVG} alt={"completedIcon"} />
            ) : (
              <img src={unfilledCircleSVG} alt={"incompletedIcon"} />
            )}

            <p
              style={
                item.is_completed ? { textDecoration: "line-through" } : {}
              }
            >
              {item?.title}
            </p>
          </button>

          <div className="todo_items_right">
            <button onClick={handleEdit}>
              <img src={editSVG} alt={"editIcon"} />
            </button>
            <button onClick={handleDelete}>
              <img src={deleteSVG} alt={"deleteIcon"} />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Todo;
