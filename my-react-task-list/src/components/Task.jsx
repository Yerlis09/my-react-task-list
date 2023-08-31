import { useState } from "react";
export default function Task(props) { // recibimos por parametros las tareas como propiedad
    const { title, description, onTaskCompletion } = props;
    const [completed, setCompleted] = useState(false);

    //Esta función va a responder cada vez que den click en el check
    const handleClickCheck = () => {
        setCompleted(!completed);
        onTaskCompletion(title, !completed);
    };

    return (
        <div className="task-container">
      <li>
        {/* El checkbox muestra el estado actual de completado y ejecuta "handlecClickCheck" al cambiar */}
        <input
          className="custom-checkbox"
          type="checkbox"
          checked={completed}
          onChange={handleClickCheck}
        />
        <span className="title">
          {title}
          {".\u00A0"}
        </span>
        <span>{description}</span>
      </li>
    </div>
    );
}