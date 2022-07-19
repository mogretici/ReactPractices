import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import validationSchema from "./validation";

function Signup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      
    },
    validationSchema,
  });
  
  return (
    <div>
      <h1>SIGN UP FORM</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
        error={formik.errors.email && formik.touched.email}
          id="outlined1"
          name="email"
          label={formik.errors.email && formik.touched.email ? "Invalid email" : "Email"}
          helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> 
        <br /><br />
        <TextField
        error={formik.errors.password && formik.touched.password}
          id="outlined2"
          name="password"
          label={formik.errors.password && formik.touched.password ? "Invalid password" : "Password"}
          type="password"
          helperText={formik.errors.password && formik.touched.password ? formik.errors.password : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}

        />
        <br /> <br />
        <TextField
        error={formik.errors.passwordConfirm && formik.touched.passwordConfirm}
          id="outlined3"
          name="passwordConfirm"
          label={formik.errors.passwordConfirm && formik.touched.passwordConfirm ? "Invalid password" : "Confirm password"}
          type="password"
          helperText={formik.errors.passwordConfirm && formik.touched.passwordConfirm ? formik.errors.passwordConfirm: ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}

        />
        <br /> <br />
        <Button type="submit" variant="outlined"  >
          Submit
        </Button>
        <br /> <br />
        <code> {(JSON.stringify(formik.values, null, 2))}</code>
      </form>
    </div>
  );
}

export default Signup;
