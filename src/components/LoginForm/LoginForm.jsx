import Form from '../Ui/Form/Form';
import { useInput } from '../../hooks/useInput';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function LoginForm() {
  const {value:email, bind:bindEmail} = useInput('');
  const {value:password, bind:bindPassword} = useInput('');

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <Form className="form-default" onSubmit={event => handleSubmit(event)}>
      <h1 className="form-default__title">Login</h1>

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
          <div className="form-default__inner">
            Password
            <Link to="/reset-password">Forgotten password?</Link>
          </div>
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
        <Link to="/register">Sign up for an account</Link>
      </div>
    </Form>
  )
}

export default LoginForm;
