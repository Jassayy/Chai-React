import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="m-28 shadow-2xl p-12 bg-slate-800 rounded-lg">
      <h1 className="text-center font-bold text-5xl">
        Redux Toolkit By Jassi Paaji
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
