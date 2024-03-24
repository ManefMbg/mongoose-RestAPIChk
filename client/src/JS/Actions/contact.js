import { FAIL_CONTACTS, GET_CONTACTS, LOAD_CONTACTS,GET_CONTACT } from "../ActionTypes/contact";
import axios from "axios";

// Get all contacts
export const getContacts = ()=> async (dispatch)=>{
    dispatch({type:LOAD_CONTACTS})
    try {
        let result  = await axios.get('/api/contact/all');
        dispatch({ type: GET_CONTACTS, payload: result.data});
    } catch (error) {
        dispatch({type:FAIL_CONTACTS, payload: error.reponse});
    }
};

// Add contact
export const addContact =(newContact) => async (dispatch)=>{
    try {
        await axios.post("/api/contact/add", newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type:FAIL_CONTACTS, payload: error.reponse});
    }
};

// Delete contact
export const deleteContact =(id)=> async(dispatch)=>{
    try {
        await axios.delete(`/api/contact/${id}`);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type:FAIL_CONTACTS, payload: error.reponse});
    }
};

// Edit contact
export const editContact=(id, newContact) => async (dispatch)=>{
    try {
        await axios.put(`/api/contact/${id}`, newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type:FAIL_CONTACTS, payload: error.reponse});
    }
};

// Get one contact
export const getContact=(id) => async (dispatch)=>{
    dispatch({type:LOAD_CONTACTS})
    try {
        let result = await axios.get(`/api/contact/${id}`);
        dispatch({type: GET_CONTACT, payload:result.data});
    } catch (error) {
        dispatch({ type:FAIL_CONTACTS, payload: error.reponse});
    }
};