import React, { useState } from "react";

/// Modifica el componente para que se puedan agregar tareas

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [taks, setTask] = useState([
    "Sacar la ropa",
    "Hacer la cama",
    "Leer un rato",
  ]);
  const loadValue = value => {
    setInputValue(value);
  };
  const handlerSubmit = event => {
    event.preventDefault();
    if (inputValue.length > 0) {
      setTask([...taks, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {taks.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <form onSubmit={e => handlerSubmit(e)}>
          <input
            type="text"
            id="new-task"
            onChange={e => loadValue(e.target.value)}
            value={inputValue}
            placeholder="Ingresa una tarea y oprime Enter"
          />
        </form>
      </div>
    </div>
  );
};

export default App;
