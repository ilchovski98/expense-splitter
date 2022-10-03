import Form from '../Ui/Form/Form';
import { useInput } from '../../hooks/useInput';
import { Link } from 'react-router-dom';

function ResetPasswordForm() {
  const {value:email, bind:bindEmail} = useInput('');

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <Form className="form-default" onSubmit={event => handleSubmit(event)}>
      <h1 className="form-default__title">Reset Password</h1>

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

      <div className="form-default__actions">
        <button className="btn btn--full">Submit</button>
      </div>

      <div className="form-default__footer">
        <Link to="/login">Return to login</Link>
      </div>
    </Form>
  )
}

export default ResetPasswordForm;
