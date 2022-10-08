import './UserSettingsPanel';
import Form from '../Ui/Form/Form';
import { useInput } from '../../hooks/useInput';
import { useEffect } from 'react';
import { getMe } from '../../api/users';

function UserSettingsPanel(props) {
  const {value:email, bind:bindEmail, setValue:setEmail} = useInput('');
  const {value:name, bind:bindName, setValue:setName} = useInput('');

  useEffect(() => {
    getMe().then(res => {
      console.log('res??', res);
      if (res) {
        setName(res.name);
        setEmail(res.email);
      }
    });
  }, []);

  const handleSubmit = () => {

  }

  return (
    <div className="user-settings">
      <h2 className="user-settings__title">Profile details</h2>

      <Form onSubmit={() => handleSubmit()} classes="form-default form-default--no-border">
        <div className="form-default__row">
          <label>
            Profile Image
            <input
              accept="image/*"
              type="file"
            />
          </label>
        </div>

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

        <div className="form-default__actions">
          <button className="btn btn--full">Submit</button>
        </div>
      </Form>
    </div>
  )
}

export default UserSettingsPanel;
