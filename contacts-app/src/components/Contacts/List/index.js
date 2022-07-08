import React, { useState } from "react";
import '../style.css'


function List({ listContacts }) {
  const [filter, setFilter] = useState("");

  const filtered = listContacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });



  return (
    <div>
      <div >
        <input
        value={filter}
        placeholder="Filter by Contacts"
        onChange={(e) => setFilter(e.target.value)}
      /> </div>
    
    {filtered.length===0 ?  
    <h4 align="center"> Sorry :/ Contact not found !</h4>: 
    <ul className="list">
        {filtered.map((contact, id) => (
          <li key={id} >
            <span> {contact.fullName} </span> 
            <span> {contact.phoneNumber} </span>
            </li>
        ))
        }
      </ul>}

      
      <div align="right">Total: {filtered.length} Contacts</div>
    </div>
  );
}

export default List;
