export default function Button({ children, disabled }) {
  return (
    <button
      type='submit' disabled={disabled} >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button'
}
