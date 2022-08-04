import React, { useState } from "react";

function ToDo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoList = (e) => {
    e.preventDefault();
    if(todo==="") return false;
    setTodoList([...todoList, todo]);
    setTodo("");
    
  };
  return (
    <div>
      <form onSubmit={addTodoList}>
          <h1>ToDoList </h1>
          <input onChange={(e) =>{setTodo(e.target.value)}} value={todo} />
          <button>Add</button>
      </form>
      {todoList.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}

export default ToDo;
