import React, {useEffect, useState} from 'react'
import { useParams , NavLink} from 'react-router-dom'
import axios from 'axios';



function User() {
const [loading, setLoading] = useState(true);
const {id} = useParams();
const [user, setUser] = useState({});

useEffect(() => {
    
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
        setUser(res.data)
    }
    ).finally(() => {setLoading (false)});
}, [id]);


return (
    <div>
        <h1>User Detail</h1>
  {loading ? <p>Loading...</p> : <div>  id :{user.id} <br />
            name :{user.name} <br />
            email :{user.email} <br />
            phone :{user.phone} <br />
            website :{user.website} <br />
             </div> }

          <br />
            <NavLink to={`/users/${parseInt(id)-1}`}  > &lt;&lt; Prev </NavLink> &emsp;
            <NavLink to={`/users/${parseInt(id) + 1}`}  > Next &gt;&gt; </NavLink>
            

    </div>

  )
}

export default User