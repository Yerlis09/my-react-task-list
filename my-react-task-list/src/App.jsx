import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList';

//Creamos la lista de tareas
const taskList = [];

function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <Header />
      </div>
      <TaskList list={taskList} />
    </div>
  );
}

export default App
