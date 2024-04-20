import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TasksContext = createContext()

export function TaskContextProvider ({ children }) {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(storedTasks.filter(task => !task.completed))
    setCompletedTasks(storedTasks.filter(task => task.completed))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify([...tasks, ...completedTasks]))
  }, [tasks, completedTasks])

  const addTask = (taskTitle) => {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
    setCompletedTasks(completedTasks.filter(task => task.id !== taskId))
  }

  const completeTask = (taskId) => {
    const taskToComplete = tasks.find(task => task.id === taskId)
    setTasks(tasks.filter(task => task.id !== taskId))
    setCompletedTasks([...completedTasks, { ...taskToComplete, completed: true }])
  }

  const uncompleteTask = (taskId) => {
    const taskToUncomplete = completedTasks.find(task => task.id === taskId)
    setCompletedTasks(completedTasks.filter(task => task.id !== taskId))
    setTasks([...tasks, { ...taskToUncomplete, completed: false }])
  }

  return (
    <TasksContext.Provider value={{ tasks, completedTasks, addTask, deleteTask, completeTask, uncompleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}
