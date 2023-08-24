import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {TaskList} from './components/TaskList'
import { Task } from './components/Task'


function App() {
  return (
    <div>
      <Header />
      <TaskList />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default App
