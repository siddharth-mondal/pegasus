import React, { useState, useEffect } from 'react';
import './App.css';
//import List from './List';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(res => {
      setPosts(res.data);
    });
  }, []);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(TODO_URL).then(res => {
      setTodos(res.data);
      //console.log(res);
    });
  }, []);

  return (
    <>
      <div className="App-header">React Pegasus</div>
      {posts.map(post => (
        <div key={post.id} className="Cards">
          {post.name}
        </div>
      ))}
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.title}
          <div>{todo.userId}</div>
        </div>
      ))}
    </>
  );
}

export default App;
