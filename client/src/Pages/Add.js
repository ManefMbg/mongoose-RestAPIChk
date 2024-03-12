import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact, getContact } from '../JS/Actions/contact';
import { Button, Form } from 'react-bootstrap';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [newContact, setNewContact] = useState({
    name:"",
    email:"",
    phone:""});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
   setNewContact({...newContact, [e.target.name]: e.target.value});
  };
 const add =()=>{
    dispatch(addContact(newContact));
    navigate('/contact');
    
 };
  return (
    <div>
       <Form.Label >Name</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Enter your name"
         name="name"
         value={newContact.name}
         onChange= {handleChange}
         style={{width:"70%", height:"50px", marginLeft:'4%'}}/>
        <Form.Label>Email </Form.Label>
        <Form.Control 
        type="email"
         placeholder="Enter your email"
         name= "email"
         value ={newContact.email}
         onChange={handleChange} 
         style={{width:"70%", height:"50px", marginLeft:'4%'}}
         />
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number"
         placeholder="Enter your phone"
         name="phone"
         value ={newContact.phone}
         onChange={handleChange} 
         style={{width:"70%", height:"50px", marginLeft:'4%'}}/>
   <Button variant="primary" type="submit" 
   onClick={()=> add()} style={{margin:'4%'}}>
    Add
   </Button>

     
    </div>
  )
}

export default Add