import './FullScreenSection.css';

function FullScreenSection(props) {
  return (
    <section className="full-screen-section">
      {props.children}
    </section>
  )
}

export default FullScreenSection;
