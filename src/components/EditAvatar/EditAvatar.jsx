import './EditAvatar.css';
import { useState } from 'react';
import { logout } from '../../helpers/user';
import { Link } from 'react-router-dom';

import Avatar from '../Ui/Avatar/Avatar';
import AvatarDropdown from '../AvatarDropdown/AvatarDropdown';
import AvatarDropdownGroup from '../AvatarDropdown/AvatarDropdownGroup';

function EditAvatar(props) {
  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);

  return (
    <div className="edit-avatar">
      <div className="edit-avatar__avatar">
        <Avatar user={props.user} />

        <div className="edit-avatar__overlay">
          <button className="edit-avatar__btn" onClick={() => setIsUserSettingsOpen(!isUserSettingsOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M10.2 461L0 512l51-10.2L160 480 420.7 219.3l-128-128L32 352 10.2 461zM315.3 68.7l128 128 34.7-34.7L512 128l-16-16L478.1 94.1 417.9 33.9 400 16 384 0 350.1 33.9 315.3 68.7zM96 416h60.1l-19.8 19.8-75.1 15 15-75.1L96 355.9V416z"/>
            </svg>
          </button>
        </div>
      </div>

      <AvatarDropdown active={isUserSettingsOpen}>
        <AvatarDropdownGroup>
          <Link to="/settings" onClick={() => setIsUserSettingsOpen(!isUserSettingsOpen)}>Settings</Link>
        </AvatarDropdownGroup>

        <AvatarDropdownGroup>
          <button 
            className="avatar-dropdown__btn" 
            onClick={() => {
              logout();
              setIsUserSettingsOpen(!isUserSettingsOpen);
            }}
          >Logout</button>
        </AvatarDropdownGroup>
      </AvatarDropdown>
    </div>
  )
}

export default EditAvatar;
