import { Task } from '@/lib/types'
import { Check, X } from 'lucide-react'

type TodoItemProps = {
  task: Task
  removeTask: (id: string) => void
  validateTask: (id: string) => void
}

export default function TodoItem({
  task,
  removeTask,
  validateTask,
}: TodoItemProps) {
  return (
    <div className="flex gap-3.5 justify-between min-h-10 items-center rounded-md border bg-white px-4 py-1 text-sm transition-all focus:outline-none shadow">
      <p className={task.validated ? 'text-gray-500' : ''}>{task.text}</p>
      <div className="flex gap-2">
        {!task.validated && (
          <button type="button" onClick={() => validateTask(task.id)}>
            <Check size={24} color="green" />
          </button>
        )}
        <button type="button" onClick={() => removeTask(task.id)}>
          <X size={24} color="red" />
        </button>
      </div>
    </div>
  )
}
