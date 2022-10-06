import Form from '../Ui/Form/Form';
import { useInput } from '../../hooks/useInput';
import { Link } from 'react-router-dom';
import { register } from '../../api/users';

function RegisterForm() {
  const {value:email, bind:bindEmail} = useInput('');
  const {value:name, bind:bindName} = useInput('');
  const {value:password, bind:bindPassword} = useInput('');

  const handleSubmit = event => {
    event.preventDefault();

    const token = register({name, email, password});

    if (token) {
      window.location = '/';
    }
  }

  return (
    <Form className="form-default" onSubmit={event => handleSubmit(event)}>
      <h1 className="form-default__title">Register</h1>

      <div className="form-default__row">
        <label>
          Name
          <input
            type="text"
            value={name}
            {...bindName}
            className="form-default__field"
          />
        </label>
      </div>

      <div className="form-default__row">
        <label>
          Email
          <input
            type="email"
            value={email}
            {...bindEmail}
            className="form-default__field"
          />
        </label>
      </div>

      <div className="form-default__row">
        <label>
          Password
          <input
            type="password"
            value={password}
            {...bindPassword}
            className="form-default__field"
          />
        </label>
      </div>

      <div className="form-default__actions">
        <button className="btn btn--full">Submit</button>
      </div>

      <div className="form-default__footer">
        <Link to="/login">Already have an account? Log in</Link>
      </div>
    </Form>
  )
}

export default RegisterForm;
