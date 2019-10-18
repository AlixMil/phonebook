import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import '../App.css';

export default function List(props) {
	return (
		<ListGroup>
			{props.data.filteredContacts.length === 0 ? props.data.contacts.length === 0 ? props.data.contacts.push({ title: 'List is empty :(', info: 'You may fill your contact by add' }).map(i => {
				return (<ListGroup.Item>
					<div className='title'>{i.title}</div>
					<div className='info'>{i.info}</div>
				</ListGroup.Item>)
				}
				) : props.data.contacts.map((item, index) => {
				return (
					<ListGroup.Item key={index} className="listgroup">
						<img className="userimg" src={item.img} alt="user" />
						<div>{`${item.name} ${item.surName}: ${item.number}`}</div>
						<Button onClick={() => props.handleDelete(index)} variant="danger">Delete</Button>
					</ListGroup.Item>
				)
			}) : props.datafilteredContacts.map((item, index) => {
				return (
					<ListGroup.Item key={index} className="listgroup">
						<img className="userimg" src={item.img} alt="user" />
						<div>{`${item.name} ${item.surName}: ${item.number}`}</div>
						<Button onClick={() => props.handleDelete(index)} variant="danger">Delete</Button>
					</ListGroup.Item>
				)
			})}
		</ListGroup>
	)
}