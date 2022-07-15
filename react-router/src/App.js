import {Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Users from './components/Users'
import Error404 from './components/Error404'
import React from 'react';


function App() {
  return (
    <div className="App">
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="users/*" element={<Users />} />
      <Route path="*" element={<Error404 />} />

  

    </Routes>
  </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <NavLink to="/about" >About</NavLink> <br />
        <NavLink to="/users" >Users</NavLink>

      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <NavLink to="/" >Home</NavLink> <br />
        <NavLink to="/users"  >Users</NavLink>


      </nav>
    </>
  );
}
export default App;

