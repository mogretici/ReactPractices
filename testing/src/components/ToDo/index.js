import React, { useState } from "react";

function ToDo() {
  const defaultValue = ["Item 1", "Item 2", "Item 3"];
  
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(defaultValue);

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
          <input onChange={(e) =>{setTodo(e.target.value)}} value={todo} placeholder="What do you want to do?" />
          <button>Add</button>
      </form>
      {todoList.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}

export default ToDo;
