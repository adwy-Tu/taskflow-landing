'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Reorder, AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Plus, Trash2, Pencil, Save, X, Check, GripVertical, ArrowLeft } from 'lucide-react'

type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: number
}

type Filter = 'all' | 'active' | 'completed'

const STORAGE_KEY = 'taskflow-tasks'

function uid() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID()
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState<Filter>('all')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingValue, setEditingValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Load/save tasks from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const data = JSON.parse(raw) as Task[]
        setTasks(data)
      } else {
        // Seed with a few sample tasks
        const seed: Task[] = [
          { id: uid(), title: 'Plan the week in TaskFlow', completed: false, createdAt: Date.now() - 40000 },
          { id: uid(), title: 'Set up a project and labels', completed: true, createdAt: Date.now() - 30000 },
          { id: uid(), title: 'Start a 25m focus session', completed: false, createdAt: Date.now() - 20000 },
        ]
        setTasks(seed)
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter((t) => !t.completed)
      case 'completed':
        return tasks.filter((t) => t.completed)
      default:
        return tasks
    }
  }, [tasks, filter])

  const remainingCount = useMemo(() => tasks.filter((t) => !t.completed).length, [tasks])

  function addTask() {
    const title = input.trim()
    if (!title) return
    setTasks((prev) => [{ id: uid(), title, completed: false, createdAt: Date.now() }, ...prev])
    setInput('')
    inputRef.current?.focus()
  }

  function toggleTask(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  function clearCompleted() {
    setTasks((prev) => prev.filter((t) => !t.completed))
  }

  function startEditing(task: Task) {
    setEditingId(task.id)
    setEditingValue(task.title)
  }

  function cancelEditing() {
    setEditingId(null)
    setEditingValue('')
  }

  function saveEditing(id: string) {
    const value = editingValue.trim()
    if (!value) {
      // If empty after editing, delete task
      deleteTask(id)
      cancelEditing()
      return
    }
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, title: value } : t)))
    cancelEditing()
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') addTask()
  }

  const listMotion = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative min-h-[100vh] bg-white">
      {/* Decorative background like the landing page */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute -right-10 top-1/3 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Tasks</Badge>
          </div>
          <div className="text-sm text-gray-600">
            {remainingCount === 0 ? 'All caught up!' : `${remainingCount} task${remainingCount === 1 ? '' : 's'} left`}
          </div>
        </div>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Your To-Do List</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add Task */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="new-task" className="sr-only">
                Add a new task
              </label>
              <Input
                id="new-task"
                ref={inputRef}
                placeholder="Add a new task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button
                onClick={addTask}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add
              </Button>
            </div>

            {/* Filters and bulk actions */}
            <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="inline-flex overflow-hidden rounded-md border border-gray-200 bg-white">
                <button
                  onClick={() => setFilter('all')}
                  aria-pressed={filter === 'all'}
                  className={[
                    'px-3 py-2 text-sm transition',
                    filter === 'all' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50',
                  ].join(' ')}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('active')}
                  aria-pressed={filter === 'active'}
                  className={[
                    'border-l px-3 py-2 text-sm transition',
                    filter === 'active' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50',
                  ].join(' ')}
                >
                  Active
                </button>
                <button
                  onClick={() => setFilter('completed')}
                  aria-pressed={filter === 'completed'}
                  className={[
                    'border-l px-3 py-2 text-sm transition',
                    filter === 'completed' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50',
                  ].join(' ')}
                >
                  Completed
                </button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={clearCompleted} disabled={!tasks.some((t) => t.completed)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Completed
                </Button>
              </div>
            </div>

            {/* Task List - Reorderable */}
            <div className="mt-6">
              {filteredTasks.length === 0 ? (
                <div className="rounded-md border border-dashed border-gray-200 p-10 text-center text-sm text-gray-500">
                  No tasks here yet. Add one above to get started.
                </div>
              ) : (
                <Reorder.Group
                  axis="y"
                  values={tasks}
                  onReorder={setTasks}
                  className="flex flex-col gap-2"
                >
                  <AnimatePresence initial={false}>
                    {filteredTasks.map((task) => (
                      <Reorder.Item
                        key={task.id}
                        value={task}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className={[
                          'group flex items-center justify-between rounded-md border border-gray-200 bg-white p-3 shadow-sm',
                          task.completed ? 'opacity-80' : '',
                        ].join(' ')}
                      >
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                          <GripVertical className="h-4 w-4 shrink-0 text-gray-300 group-hover:text-gray-400" />
                          <Checkbox
                            checked={task.completed}
                            onCheckedChange={() => toggleTask(task.id)}
                            aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
                          />
                          {editingId === task.id ? (
                            <div className="flex w-full items-center gap-2">
                              <Input
                                value={editingValue}
                                onChange={(e) => setEditingValue(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') saveEditing(task.id)
                                  if (e.key === 'Escape') cancelEditing()
                                }}
                                autoFocus
                              />
                              <Button size="icon" variant="outline" onClick={() => saveEditing(task.id)} aria-label="Save">
                                <Save className="h-4 w-4" />
                              </Button>
                              <Button size="icon" variant="ghost" onClick={cancelEditing} aria-label="Cancel">
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <motion.p
                              variants={listMotion}
                              initial="hidden"
                              animate="visible"
                              className={[
                                'truncate text-sm',
                                task.completed ? 'text-gray-500 line-through' : 'text-gray-800',
                              ].join(' ')}
                            >
                              {task.title}
                            </motion.p>
                          )}
                        </div>

                        {editingId !== task.id && (
                          <div className="ml-3 flex items-center gap-1">
                            {!task.completed ? (
                              <Button size="icon" variant="ghost" onClick={() => startEditing(task)} aria-label="Edit task">
                                <Pencil className="h-4 w-4" />
                              </Button>
                            ) : (
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => toggleTask(task.id)}
                                aria-label="Mark as active"
                                title="Mark as active"
                              >
                                <Check className="h-4 w-4 text-emerald-600" />
                              </Button>
                            )}
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => deleteTask(task.id)}
                              aria-label="Delete task"
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        )}
                      </Reorder.Item>
                    ))}
                  </AnimatePresence>
                </Reorder.Group>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
