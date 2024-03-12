import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts} from "../JS/Actions/contact";
import ContactCard from "./ContactCard";
import "../App.css";

const ContactList = () => {
  const listContacts = useSelector(
        (state) => state.contactReducer.listContacts);
  const load = useSelector( (state)=> state.contactReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts())  
  }, [dispatch]);
  return (
    <div className='contactList'>
      {load ? ( <h3>Loading..</h3>):
       (listContacts.map((el)=> <ContactCard contact={el} key={el.id}/>))}
    </div>
  )
}

export default ContactList