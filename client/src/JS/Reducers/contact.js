// Importing
import {LOAD_CONTACTS, 
    GET_CONTACTS,
    GET_CONTACT, 
    FAIL_CONTACTS} from "../ActionTypes/contact";



// Initialisatiion
const initialState ={
listContacts: [],
errors: null,
load: false,
contactToGet:{},
};


const contactReducer =(state=initialState, {type, payload})=>{
switch (type) {
    case LOAD_CONTACTS:
        return {...state, load:true};
    case GET_CONTACTS:
        return {...state, load:false, listContacts: payload.listContacts};
    case GET_CONTACT:
        return {...state, load:false, contactToGet: payload.contactToGet};
    case FAIL_CONTACTS:
        return {...state, load:false, errors:payload};
    default:
      return state;
}
};
export default contactReducer;