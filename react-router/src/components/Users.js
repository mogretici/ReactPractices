import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
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
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link>

      <h1>Users</h1>
      {loading && <p>Loading...</p>}
 
      <ul> 
      {users.map((user) => (
      <li key={user.id} style={{listStyle:"none"}}> 
      <Link to={`${user.id}`}>{user.name}</Link>
      </li>

      ))}
      </ul>
 <Outlet />
      <Routes>
      <Route path="/:id" element={<User />} > 
      </Route>
    </Routes>

    </div>
  );
}


export default Users;
