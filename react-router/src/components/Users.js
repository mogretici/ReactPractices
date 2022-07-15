import React from "react";
import { NavLink, Route, Routes, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";




function Users() {
  const [loading, setLoading] = useState(true);

const [users, setUsers] = useState([]);
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users').then(res => {
    setUsers(res.data); }
  ).finally(() => {setLoading (false)});

}, []);
  

  return (
    
    <div>


      Users Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
      voluptas corrupti. Tenetur nostrum delectus optio quos. Autem odit dicta
      error, vel illo in quibusdam quae cum vero inventore, itaque maiores.
      <br />
      <NavLink to="/"  >Home</NavLink> <br />
      <NavLink to="/about"  >About</NavLink>

      <h1>Users</h1>
      {loading && <p>Loading...</p>}
 
      <ul> 
      {users.map((user) => (
      <li key={user.id} style={{listStyle:"none"}}> 
      <NavLink style={({ isActive }) =>
              isActive ? {backgroundColor:"black", color:"white"} : undefined
            } to={`${user.id}`}  >{user.name}</NavLink>
      </li>

      ))}
      </ul>
 <Outlet />
      <Routes>
      <Route path="/:id" element={<User />} /> 
      <Route path="/" element={<h2>Please select a user..</h2>}  > 
      </Route>
    </Routes>

    </div>
  );
}


export default Users;
