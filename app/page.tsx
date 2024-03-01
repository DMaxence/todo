'use client'
import React from 'react'

import Button from '@/components/button'
import TextInput from '@/components/text-input'
import TodoItem from '@/components/todo-item'
import { Task } from '@/lib/types'

export default function Home() {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [text, setText] = React.useState('')

  const addTask = () => {
    if (!text.length) return
    const newTask = {
      id: Math.random().toString(36).substring(2, 9),
      text,
      validated: false,
      created_at: new Date(),
    }
    setTasks([...tasks, newTask])
    setText('')
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const validateTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, validated: !task.validated } : task
      )
    )
  }

  const setInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <main className="container flex flex-1 flex-col gap-3.5 p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Simple Todo App
      </h1>
      <div className="w-full flex gap-3.5 justify-center">
        <TextInput value={text} onChange={setInputText} placeholder="To do" />
        <Button onClick={addTask} text="Add task" disabled={!text.length} />
      </div>
      <div className="flex flex-col gap-3.5 max-h-[400px] w-72 mx-auto overflow-y-scroll py-2">
        {tasks
          .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
          .map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              removeTask={removeTask}
              validateTask={validateTask}
            />
          ))}
      </div>
    </main>
  )
}
