import Logo from "../Ui/Logo/Logo";
import Header from "../Ui/Header/Header";
import Nav from "../Nav/Nav";
import { Link } from 'react-router-dom';
import Avatar from '../Ui/Avatar/Avatar';
import { logout } from '../../helpers/user';

function HeaderController(props) {
  return (
    <Header logo={<Logo />}>
      <Nav>
        <li><Link to="/">Home</Link></li>
        {
          props.user.name ?
          [<li><Avatar name={props.user.name} /></li>, <li><button onClick={() => logout()}>Logout</button></li>] :
          <li><Link to="/login">Login</Link></li>
        }
      </Nav>
    </Header>
  )
}

export default HeaderController;
