import React, { useState, useEffect } from 'react';
import './App.css';
// import List from './List';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(res => {
      setPosts(res.data);
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
    </>
  );
}

export default App;
