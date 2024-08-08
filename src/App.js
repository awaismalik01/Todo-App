import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoHero from "./components/TodoHero";
import Form from "./components/Form";
import TODOList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="wrapper">
      <Header />
      <TodoHero todos={todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
