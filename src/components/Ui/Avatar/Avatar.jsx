import './Avatar.css';

function Avatar(props) {
  return (
    <div className="avatar">
      {
        props.user.image ? 
        <img src={props.user.image} alt='Profile' /> :
        <span>{props.user.name[0]}</span>
      }
    </div>
  )
}

export default Avatar;
