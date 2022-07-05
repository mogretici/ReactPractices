
import './App.css';
import { useState } from "react";



function App() {
  const [name, setName]= useState('Mehmet');
  const [age, setAge]= useState(24);
  const [friends, setFriends]= useState(['Ali', 'Ayşe', 'Zeynep']);
  const [adress, setAdress]= useState({country:'Turkey', city:'Erzurum' })
  
  return (
    <div className="App">
    <h1> Merhaba {name}, {age}  <br />
    
    <button onClick={()=>{
    if (name==='Mehmet') {
      setName('Ahmet'); 
      setAge(26);
    setFriends(['Mustafa', 'Burak', 'Kadir']);
    setAdress({country:'Germany', city:'Berlin'})

    }else {
    setName('Mehmet'); 
    setAge(24);
    setFriends(['Ali', 'Ayşe', 'Zeynep']);
    setAdress({country:'Turkey', city:'Erzurum'})

    }
    
    
    }}>Değiştir</button> 
    </h1>
    
  <hr />
<h2>Adres Bilgisi</h2>
{

  <div>{adress.city}, {adress.country} </div>
 

}


  <hr />


  <h2>    Arkadaşlar   <br />
  <button onClick={()=>{
  setFriends(['Selim', ...friends])
}
}> Başa Arkadaş Ekle</button> < t /> 
  <button onClick={()=>{
  setFriends([...friends,'Kemal'])
}
}> Sona Arkadaş Ekle</button> 

 
  </h2>
      {
        friends.map((friend, index) =><div key={index}>{friend}</div>)
      }

    <br />
   
    </div>
  );
}

export default App;
