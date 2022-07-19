import { object, string, ref} from "yup";

const validation = object({
  email: string().email('Please enter a valid email address').required('E-mail adress is required.'),
  password: string().min(6,'Password must be at least 6 characters.').required('Password is required.'),
  passwordConfirm: string().oneOf([ref("password")],'The passwords entered did not match.').required('Password confirmation is required.'),
});

export default validation;
