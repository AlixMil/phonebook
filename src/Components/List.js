import React from 'react';
import { ListGroup, Dropdown } from 'react-bootstrap';
import '../App.css';

export default function List(props) {
	
	return (<ListGroup>
		{props.data.map(item => {
			return (
				<ListGroup.Item key={item.id} className="listgroup">
					{`${item.name} ${item.surName}: ${item.number}`}
					<Dropdown>
						<Dropdown.Toggle variant='danger'>
							Delete
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Header>
								Remove just replace your contant in wastebin
							</Dropdown.Header>
							<Dropdown.Item>
								Remove
							</Dropdown.Item>
							<Dropdown.Item onClick={() => props.handleDelete(item.id)}>
								Delete
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</ListGroup.Item>
				)
		})}
	</ListGroup>)
}