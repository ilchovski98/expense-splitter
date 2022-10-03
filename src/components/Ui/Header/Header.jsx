import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <div className="header__inner">
        {
          props.logo &&
          <div className="header__logo">
            <a href="#">
              {props.logo}
            </a>
          </div>
        }

        {props.children}
      </div>
    </header>
  )
}

export default Header;
