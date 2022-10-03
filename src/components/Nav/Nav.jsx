import './Nav.css';

function Nav(props) {
  return (
    <nav className="nav">
      <ul>
        {props.children}
      </ul>
    </nav>
  )
}

export default Nav;
