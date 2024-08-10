function TodoHero({ todos }) {


  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  
  const total_todos = todos.length;

  return (
    <section className="todohero_section">
      <div>
        <p className="text_large">Task Done</p>
        <p className="text_small">Keep it up</p>
      </div>
      <div className="circleProgress">
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
}

export default TodoHero;
