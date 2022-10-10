import './AvatarDropdown.css';

function AvatarDropdown(props) {
  const classes = props.active ? 'avatar-dropdown is-active' : 'avatar-dropdown';
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default AvatarDropdown;
