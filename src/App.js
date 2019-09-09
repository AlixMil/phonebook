import React from 'react';
import InsertContact from './Components/InsertContact.js';
import List from './Components/List.js';
import NavigationBar from './Components/NavigationBar.js';
import './App.css';
import defImg from './IMG/user.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          number: 89771337004,
          name: "Alex",
          surName: "Mil",
          img: defImg
        },
        {
          number: 89165341923,
          name: "Lara",
          surName: "Cantin",
          img: defImg
        },
        {
          number: 89534425392,
          name: "Larsen",
          surName: "Iven",
          img: defImg
        }
      ],
      filteredContacts: []
    }
  }

  filterContacts = (contacts, searchTerm) => {
    this.setState(contacts.filter(contact => contact.name.includes(searchTerm)))
  }

  handleDelete = (id) => {
    this.setState(prevList => {
      prevList.splice(id, 1)
      const reload = prevList;
      return [...reload];
    })
  }

  handleAdd = (name, surName, num, img) => {
    if (name !== '') {
      if (surName !== '') {
        if (num !== '') {
          this.setState(prevList => { // this not success logic
            const newObj = {
              number: num,
              name: name,
              surName: surName,
              img: defImg
            }
            return [...prevList, newObj]
          })
        }
      }
    }
  }

  render() {
    return (
      <div className="app">
        <NavigationBar data={this.state} handleSearch={this.filterContacts} />
        <div className="app-wrapper">
          {/* <h2>Your PhoneBook!</h2> */}
          <List className="modal-list" handleDelete={this.handleDelete} data={this.state} />
          <InsertContact className="insert-block" handleAdd={this.handleAdd} />
        </div>
      </div>
    )
  }
}



// function App() {
//   const [list, setList] = useState([
//     {
//       number: 89771337004,
//       name: "Alex",
//       surName: "Mil",
//       img: defImg
//     },
//     {
//       number: 89165341923,
//       name: "Lara",
//       surName: "Cantin",
//       img: defImg
//     },
//     {
//       number: 89534425392,
//       name: "Larsen",
//       surName: "Iven",
//       img: defImg
//     }
//   ]);
// const [anotherList, setAnotherList] = useState();

// const filterContacts = (contacts, searchTerm) => {
//   setAnotherList(contacts);
//   if (searchTerm !== '') {
//     setList(contacts.filter(contact => contact.name.includes(searchTerm)))
//   } else {
//     setList(anotherList)
//   }
// }


// const handleSearch = (value) => {
//   for (let i = 0; i <= list.length; i++) {
//     if (list[i].name.indexOf )
//   }
// }
