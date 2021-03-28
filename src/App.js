import "./App.css";
import Header from "./components/header";
import TodoList from "./components/todoList";

function App() {
  const courses = ["JAVASCRIPT", "REACT", "ES VERSIONS", "HTML/CSS"];
  return (
    <>
      <Header heading='TODO-APP' />
      <TodoList courses={courses} />
    </>
  );
}

export default App;
