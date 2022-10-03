import './Form.css';

function Form(props) {
  const {
    action,
    classes,
    onSubmit
  } = props;

  return (
    <form
      action={action}
      className={classes ? classes : 'form-default'}
      onSubmit={onSubmit}
    >
      {props.children}
    </form>
  )
}

export default Form;
