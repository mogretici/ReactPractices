import React from 'react'
import {useState } from 'react'
import {useUser} from '../context/UserContext'

function Profile() {
    const {user, setUser}= useUser();
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({
                id:1,
                username:"mogretici",
                email:"mogretici@yandex.com.tr",
                name:"Lütfü Öğretici",
            })
            setLoading(false);
        }, 2000);
  
        
    }
  return (
    <nav style={ {textAlign:'left'}}>
        {
            user!==null
            ? (<><h1>Profile</h1><p>Username: {user.username}</p><p>Name: {user.name}</p><p>Email: {user.email}</p>  <br /><button onClick={()=>{setUser(null)}}>Signout</button> </>)
            : (<button onClick={handleLogin}>{loading? "Please wait...": "Login"}</button>)

        }
       
        
  

    </nav>
  )
}

export default Profile