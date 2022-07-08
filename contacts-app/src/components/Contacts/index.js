import {useState, useEffect} from 'react'
import List from './List'    
import Form from './Form'     
import '../Contacts/style.css'

function Contacts() {

const [contacts, setContacts]= useState([
  {  fullName:"Lütfü", phoneNumber:"1124124214"},
  {  fullName:"Ahmet", phoneNumber:"1232134141"},
  {  fullName:"Mehmet", phoneNumber:"892743284"},

]);

useEffect(()=>{
  console.log(contacts)
}, [contacts])

  return (

    <div id="container">
      <h1 className='contactsApp'>Contacts App</h1>
        <List listContacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
    
  )
}

export default Contacts