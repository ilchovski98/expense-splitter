import './DefaultSection.css';

function DefaultSection(props) {
  return (
    <div className="section">
      <div className="shell">
        {props.children}
      </div>
    </div>
  );
}

export default DefaultSection;
