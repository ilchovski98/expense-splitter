import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <div className="header__inner">
        {
          props.logo &&
          <div className="header__logo">
            <Link to="/">
              {props.logo}
            </Link>
          </div>
        }

        {props.children}
      </div>
    </header>
  )
}

export default Header;
