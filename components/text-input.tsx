export default function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className="rounded-lg border px-3 py-2 text-sm"
      autoComplete="off"
    />
  )
}
