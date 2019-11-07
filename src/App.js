import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/3';

function App() {
  const [details, setDetails] = useState([]);

  useEffect(async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const [items] = data;
    setDetails(items);
  }, []);

  return (
    <>
      <div className="App-header">React Pegasus</div>;<List details={details}></List>
    </>
  );
}

export default App;
