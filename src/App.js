import React, {Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from './components/Todo-list';
import EditTodo from './components/edit-todo';
import CreateTodo from './components/create-todo.js';
 
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <div className="container"> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <Link to="/" className="navbar-brand">TodoList App</Link>
     <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/edit/:id" className="nav-link">Edit</Link>
      </li>
      <li className="nav-item">
        <Link to="/create" className="nav-link">Create</Link>
      </li>
      </ul>
      </div>
  
    </nav>
    
    <Route path="/" exact component = {TodoList} />
    <Route  path="/edit/:id" component={EditTodo} />
    <Route  path="/create" component={CreateTodo} />
    </div>
    </Router>

  );
}

export default App;
