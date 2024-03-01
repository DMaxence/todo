import { classNames } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export default function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        'flex h-10 items-center justify-center rounded-md border bg-white px-4 text-sm transition-all focus:outline-none disabled:cursor-not-allowed',
        props.className || ''
      )}
      {...props}
    >
      <p>{text}</p>
    </button>
  )
}
