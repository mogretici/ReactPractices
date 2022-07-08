import React, { useState , useEffect} from "react";
import '../style.css'


const initFormValue={ fullName: "", phoneNumber: ""}

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initFormValue);

  useEffect(()=>{
    setForm(initFormValue);
  },[contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }


    addContact([...contacts,form]);
  
    console.log(form);


  };

  return (
    <form onSubmit={onSubmit}>
      <div >
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullName}
        />
      </div>
      <div >
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phoneNumber}

        />
      </div>
      <div className="btn">
        <button >Add Contact</button>
      </div>
    </form>
  );
}

export default Form;
