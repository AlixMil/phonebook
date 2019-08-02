import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import InsertContact from './Components/InsertContact.js';
import List from './Components/List.js';
// import Search from './Components/Search.js';
import NavigationBar from './Components/NavigationBar.js';
import './App.css';


function App() {
  const loading = (<Spinner animaton="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>)

  const [list, setList] = useState([
    {
      number: 89771337004,
      name: "Alex",
      surName: "Mil"
  },
    {
      number: 89165341923,
      name: "Lara",
      surName: "Cantin"
    },
    {
      number: 89534425392,
      name: "Larsen",
      surName: "Iven"
    }
  ]);

  return (
    <div className="app">
        <NavigationBar />
        <div className="app-wrapper">
          <h2>Your PhoneBook!</h2>
          <InsertContact />
          <List data={list} />
        </div>
    </div>
  );
}

export default App;
