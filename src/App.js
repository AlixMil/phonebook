import React, { useState } from 'react';
import InsertContact from './Components/InsertContact.js';
import List from './Components/List.js';
import NavigationBar from './Components/NavigationBar.js';
import './App.css';


function App() {
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

  const handleConsole = (el) => {
    console.log(el);
  }

  const handleDelete = (id) => {
    setList(prevList => {
      prevList.splice(id, 1)
      const reload = prevList;
      return [...reload];
    })
  }

  const handleAdd = (name, surName, num) => {
    if (name !== '') {
      if (surName !== '') {
        if (num !== '') {
          setList(prevList => { // this not success logic
              const newObj = {  
                number: num,
                name: name,
                surName: surName,
              }
              return [...prevList, newObj]
          })
        }
      }
    }
  }

  // const handleSearch = (value) => {
  //   for (let i = 0; i <= list.length; i++) {
  //     if (list[i].name.indexOf )
  //   }
  // }

  return (
    <div className="app">
        <NavigationBar /* handleSearch={handleSearch} */ />
        <div className="app-wrapper">
          {/* <h2>Your PhoneBook!</h2> */}
          <List className="modal-list" handleDelete={handleDelete} handleConsole={handleConsole} data={list} />
          <InsertContact className="insert-block" handleAdd={handleAdd} handleConsole={handleConsole} />
        </div>
    </div>
  );
}

export default App;
