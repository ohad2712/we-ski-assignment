export default function Input({ type, setVal, ...rest }) {
  const onChange = ({ target }) => {
    setVal(target.value);
  }

  return (
    <input
      type={type}
      onChange={onChange}
      {...rest}
    />
  )
};

Input.defaultProps = {
  type: 'text',
  defaultVal: ''
};
