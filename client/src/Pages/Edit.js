import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { editContact, getContact } from '../JS/Actions/contact';
import {Form, Button} from "react-bootstrap"

const Edit = () => {
  const [newContact, setNewContact] = useState({});
  const dispatch = useDispatch();
  const contactToGet = useSelector((state)=> state.contactReducer.contactToGet);
  const match = useMatch("/edit/:id");
  const navigate = useNavigate();

  const handleChange = (e) =>{
      setNewContact({...newContact, [e.target.name]: e.target.value});
  };
  useEffect(() => {
    dispatch(getContact(match.params.id));
    
  }); 
  const handleEdit = () =>{
    dispatch(editContact(match.params.id, newContact));
    navigate(-1); 
  }
  return (
    <div>
       <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={`${contactToGet.name}`}
            value= {newContact.name}
            onChange={handleChange}
            style={{width:"70%", height:"50px", marginLeft:'4%'}}
          />
             <Form.Label>Email adress</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder={`${contactToGet.email}`}
            value= {newContact.email}
            name='email'
            onChange={handleChange}
            style={{width:"70%", height:"50px", marginLeft:'4%'}}
          />
             <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder={`${contactToGet.phone}`}
            value= {newContact.phone}
            name='phone'
            onChange={handleChange}
            style={{width:"70%", height:"50px", marginLeft:'4%'}}
          />
        <Button variant="primary" type="submit"
         onClick={handleEdit} style={{margin:'4%'}}>
   Edit
   </Button>
    </div>
  )
}

export default Edit