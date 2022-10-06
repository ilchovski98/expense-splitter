import './Avatar.css';

function Avatar(props) {
  return (
    <div className="avatar">
      <span>{props.name[0]}</span>
    </div>
  )
}

export default Avatar;
