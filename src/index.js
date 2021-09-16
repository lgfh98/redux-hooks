import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Importamos desde redux la función para crear nuestro store
import { createStore } from "redux";
// El Provider lo traeremos desde react-redux
import { Provider } from "react-redux";
// También debemos traer nuestro reducer que acabamos de crear
import { reducer } from "./redux/reducer";

const initialState = {
  count: 0,
};

// La función de createStore primero debe recibir nuestro reducer y después el estado inicial
const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
