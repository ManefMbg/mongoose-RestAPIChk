import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Card, Button} from "react-bootstrap";
import { deleteContact } from '../JS/Actions/contact';


const ContactCard = ({contact}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
       <Card style={{ width: '18rem', margin: "5%" }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text>{contact.phone}</Card.Text>
        <Button variant="primary" 
        onClick={()=>navigate(`/edit/${contact._id}`)}
        style={{margin:"2%"}}>
          Edit
          </Button>
        <Button variant="primary" 
        onClick={()=>dispatch(deleteContact(contact._id))}
        style={{margin:"2%"}}>
          Delete
          </Button>
      </Card.Body>
    </Card> 
    </div>
  )
}

export default ContactCard