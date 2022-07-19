import './App.css';
import {useFormik } from 'formik';
import React from 'react';

function App() {
    const formik = useFormik({
      initialValues:{
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        hobbies:'',
        country:'en'
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <div className="App">
     <h1>Sign Up</h1>
      {/* <Form>                                            // Formik's Form component 
        <label htmlFor="firstName">First Name: </label>
        <Field id="firstName" name="firstName" placeholder="Jane" /> <br />

        <label htmlFor="lastName">Last Name: </label>
        <Field id="lastName" name="lastName" placeholder="Doe" /> <br />

        <label htmlFor="email">Email: </label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /> <br /> <br />
        <button type="submit">Submit</button>
      </Form> */}
     
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input name="firstName" placeholder="Jane" onChange={formik.handleChange}/> <br />

        <label htmlFor="lastName">Last Name: </label>
        <input name="lastName" placeholder="Doe" onChange={formik.handleChange}/> <br />

        <label htmlFor="email">Email: </label>
        <input
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={formik.handleChange}
        /> 
        <br />
        <hr />
        <label htmlFor="gender">Gender: </label> <br />
        <span> Male</span> 
        <input type="radio" name="gender" value="male" onChange={formik.handleChange}/>
        <span> Female</span>
        <input type="radio" name="gender" value="female" onChange={formik.handleChange}/>
        <br />
        <hr />
        <label htmlFor='hobbies'>Hobbies: </label> <br />
        <input type="checkbox" name="hobbies" value="football"onChange={formik.handleChange} />
        <span>Football</span>
        <input type="checkbox" name="hobbies" value="basketball" onChange={formik.handleChange}/>
        <span>Basketball</span>
        <input type="checkbox" name="hobbies" value="volleyball" onChange={formik.handleChange}/>
        <span>Volleyball</span>
        <br /><hr />
        <label htmlFor="country">Your Country: </label>
        <select name="country"  onChange={formik.handleChange} value={formik.values.country}> 
          <option value="tr" >Turkiye</option>
          <option value="en">England</option>
          <option value="de">Germany</option>
          <option value="fr">France</option>
        </select>
        
        <br /> <br />
        <button type="submit">Submit</button> <br /> <br />
        <hr />
        <code>{JSON.stringify(formik.values, null, 2)}</code>
      </form> 
    </div>
  );
}

export default App;
