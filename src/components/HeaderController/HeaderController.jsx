import Logo from "../Ui/Logo/Logo";
import Header from "../Ui/Header/Header";
import Nav from "../Nav/Nav";
import { Link } from 'react-router-dom';

function HeaderController() {
  return (
    <Header logo={<Logo />}>
      <Nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </Nav>
    </Header>
  )
}

export default HeaderController;
