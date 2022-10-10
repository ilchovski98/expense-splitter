import Logo from "../Ui/Logo/Logo";
import Header from "../Ui/Header/Header";
import Nav from "../Nav/Nav";
import { Link } from 'react-router-dom';
import EditAvatar from '../EditAvatar/EditAvatar';

function HeaderController(props) {
  return (
    <Header logo={<Logo />}>
      <Nav>
        <li><Link to="/">Home</Link></li>
        {
          props.user ?
          <li><EditAvatar user={props.user} /></li> :
          <li><Link to="/login">Login</Link></li>
        }
      </Nav>
    </Header>
  )
}

export default HeaderController;
