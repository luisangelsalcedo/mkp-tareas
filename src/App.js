import React from "react";

/// Modifica el componente para que se puedan agregar tareas

const App = () => {
  const addTask = input => {
    if (input.key === "Enter" && input.target.value !== "") {
      const todo = document.querySelector(".todo");
      const li = document.createElement("li");
      li.innerHTML = input.target.value;
      todo.append(li);

      const inputText = document.querySelector("#new-task");
      inputText.value = "";
    }
  };
  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          <li>Sacar la ropa</li>
          <li>Hacer la cama</li>
          <li>Leer un rato</li>
        </ul>
        <form>
          <input
            type="text"
            id="new-task"
            onKeyUp={e => addTask(e)}
            onChange={e => addTask(e)}
            placeholder="Ingresa una tarea y oprime Enter"
          />
        </form>
      </div>
    </div>
  );
};

export default App;
