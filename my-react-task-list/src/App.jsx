import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList';


const taskList = [
  {
    id:1001,
    title:"Realizar el proyecto integrador 2",
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
      <TaskList list={taskList}/>
      <div>
        <p>Tienes {2} tareas pendientes</p>
        <button onClick={handleClear}>Limpiar todo</button>
      </div>
    </div>
  )
}

export default App
