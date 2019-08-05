import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import InsertContact from './Components/InsertContact.js';
import List from './Components/List.js';
// import Search from './Components/Search.js';
import NavigationBar from './Components/NavigationBar.js';
import './App.css';


function App() {
  // const loading = (<Spinner animaton="border" role="status">
  //   <span className="sr-only">Loading...</span>
  // </Spinner>)

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

  const valideInputs = (name, surName, num) => {
    // if(name !== '') {
    //   return name
    // } else {
    //   return null
    // }
  }

  const handleAdd = (name, surName, num) => {
    if (name !== '') {
      if (surName !== '') {
        if (num !== '') {
          setList(prevList => {
            const newArr = prevList.slice(0); // this not success logic
            let plus = newArr.pop().id;
            const newObj = {
              number: num,
              name: name,
              surName: surName,
              id: ++plus
            }
            return [...prevList, newObj]
          })
        }
      }
    }
  }

  const [list, setList] = useState([
    {
      number: 89771337004,
      name: "Alex",
      surName: "Mil",
      id: 0
    },
    {
      number: 89165341923,
      name: "Lara",
      surName: "Cantin",
      id: 1
    },
    {
      number: 89534425392,
      name: "Larsen",
      surName: "Iven",
      id: 2
    }
  ]);

  return (
    <div className="app">
        <NavigationBar />
        <div className="app-wrapper">
          <h2>Your PhoneBook!</h2>
          <InsertContact handleAdd={handleAdd} handleConsole={handleConsole} />
          <List handleDelete={handleDelete} handleConsole={handleConsole} data={list} />
        </div>
    </div>
  );
}

export default App;
