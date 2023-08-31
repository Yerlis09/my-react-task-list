import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {TaskList} from './components/TaskList'
import { Task } from './components/Task'


const taskList = [
  {
    id:1001,
    title:"Realizar el proyecto integrador 2 del modulo de react",
    stat: false
  },

  {
    id:1002,
    title:"Ver la clase de habilidades",
    stat: false
  },

  {
    id:1003,
    title:"Estudiar Js",
    stat: false
  },

  {
    id:1004,
    title:"modifcar la hoja de vida",
    stat: false
  },

];

function App() {
  //Función que responde al boton de borrar todo
  function handleClear() {
    console.log("Limpiar Todo");
  };

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
