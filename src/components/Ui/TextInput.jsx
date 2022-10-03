

function TextInput(props) {
  const {
    id,
    value,
    classes,
    onChange,
    placeholder,
    label,
    name
  } = props;

  const {contClass, fieldClass, errorClass} = classes;

  return (
    <div className={contClass}>
      {label}
      <input
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={fieldClass}
        name={name}
      />
    </div>
  )
}

export default TextInput;
