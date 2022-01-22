// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import {Form} from './components/Form';
import {Todoslist} from './components/Todoslist';

const App = () => {
  const initailState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const[todos, setTodos] = useState(initailState);
  const[editTodo, setEditTodo] = useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div><Header /></div>
        <div>
          <Form 
          input={input} 
          setInput={setInput} 
          todos={todos} 
          setTodos={setTodos} 
          editTodo={editTodo} 
          setEditTodo={setEditTodo} />
        </div>
        <div>
          <Todoslist
          todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
