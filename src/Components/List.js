import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import '../App.css';

export default function List(props) {
	// const [state, setState] = useState(props.data.reduce((a, e) => a.push(e.number), []))
	
	// setState(state.map(item => {
	// 	return item.replace(/\d{1} \(\d{3}\) \d{2} \d{2}/)
	// }))
	return (
		<ListGroup>
			{props.data.map((item, index) => {
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