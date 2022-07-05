
import React from 'react'
import {useState} from 'react'




function InputExample() {
    const [form, setForm]= useState({name:"",surname:""});
    const onChangeForm = (e)=>{
        
        setForm({...form, [e.target.name]:e.target.value} )
    
    };

  return (
    <div align='center'>
        
       <h1>InputBox</h1>
       <h2>  Hello {form.name} {form.surname}! </h2>

        Name: <input name="name" value={form.name} placeholder="Please input your name.. " onChange={onChangeForm} /> <t />
        Surname: <input name="surname"value={form.surname} placeholder="Please input your surname.. " onChange={onChangeForm} />

           <br />
         
        
        </div>
  )
}

export default InputExample