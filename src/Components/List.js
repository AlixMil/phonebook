import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import '../App.css';

export default function List(props) {
	
	return (<ListGroup>
		{props.data.map((item, index) => {
			return (
				<ListGroup.Item key={index} className="listgroup">
					{`${item.name} ${item.surName}: ${item.number}`}
					<Button onClick={() => props.handleDelete(index)} variant="danger">Delete</Button>
				</ListGroup.Item>
				)
		})}
	</ListGroup>)
}