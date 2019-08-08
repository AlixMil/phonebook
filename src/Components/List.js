import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import '../App.css';

export default function List(props) {
	
	return (
		<ListGroup>
		{props.data.map((item, index) => {
			return (
				<ListGroup.Item key={index} className="listgroup">
					<img className="userimg" src={require("../IMG/user.png")} alt="user"/>
					<div>{`${item.name} ${item.surName}: ${item.number}`}</div>
					
					<Button onClick={() => props.handleDelete(index)} variant="danger">Delete</Button>
				</ListGroup.Item>
				)
		})}
	</ListGroup>
	)
}