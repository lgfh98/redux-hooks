import { useSelector, useDispatch } from "react-redux";
import { addCounter, decreaseCounter } from "./redux/action";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);

  // Creamos un dispatcher ejecutando el hook de useDispatch
  const dispatcher = useDispatch();

  // El dispatcher debemos ejecutarlo y en su interior pasaremos como parámetro la información de la acción a ejecutar por el reducer
  const add = () => dispatcher(addCounter());
  const addFive = () => dispatcher(addCounter(5));
  const decrease = () => dispatcher(decreaseCounter());

  return (
    <div className="App">
      <header className="App-header">
        <h3>Counter with Redux Hooks {count}</h3>
        <button onClick={add}>ADD +1</button>
        <button onClick={addFive}>ADD +5</button>
        <button onClick={decrease}>DECREASE -1</button>
      </header>
    </div>
  );
}

export default App;
