import addSVG from "../assets/add.svg";

function Form({ todos, setTodos }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target.todo.value;
    const newTodo = {
      title: value,
      id: Date.now().toString(36),
      is_completed: false,
    };

    // Update todo state
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // Store updated todo list in local storage
    const updatedTodoList = JSON.stringify([...todos, newTodo]);
    localStorage.setItem("todos", updatedTodoList);

    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>

      <button>
        <img src={addSVG} alt="AddIcon" />
      </button>
    </form>
  );
}

export default Form;
