export default function Input({
  value,
  onChange,
  placeholder = 'Ara...',
  ...props
}) {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  )
}
