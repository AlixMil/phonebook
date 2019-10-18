import React from 'react';
import InsertContact from './Components/InsertContact.js';
import List from './Components/List.js';
import NavigationBar from './Components/NavigationBar.js';
import './App.css';
import defImg from './IMG/user.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // Main idea refactoring this state like a { display: [something information for list display] contacts: [], filteredContacts: [] }
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

  handleSearch = (contacts, searchTerm) => { // Need Refactoring!!! (Very Bad logic (Forgot memory))
    if (searchTerm) {
      this.setState({ filteredContacts: contacts.slice(0).filter(contact => contact.name.includes(searchTerm) || contact.surName.includes(searchTerm)) })
    } else {
      this.setState({ filteredContacts: [] })
    }
  }


  handleDelete = (id) => {
    this.setState(prevList => {
      const res = prevList.contacts.filter((e, i) => i !== id)
      return {contacts: res}
    })
  }

  handleAdd = (name, surName, num, img) => {
    if (name && surName && num) {
          this.setState(state => {
            const newObj = {
              number: num,
              name: name,
              surName: surName,
              img: defImg
            }
            const res = [...state.contacts, newObj]
            return { contacts: res }
          })
    }
  }

  render() {
    return (
      <div className="app">
        <NavigationBar data={this.state.contacts} handleSearch={this.handleSearch} />
        <div className="app-wrapper">
          <List className="modal-list" handleDelete={this.handleDelete} data={this.state} />
          <InsertContact className="insert-block" handleAdd={this.handleAdd} />
        </div>
      </div>
    )
  }
}