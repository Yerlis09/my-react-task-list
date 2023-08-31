const TaskList = (props) => {
    const { list } = props;

    //Funcion que responde cuando se hace click en el botón de "agregar".
    function handleAddTask() {
        console.log("Agregar Tarea");
    }
    return (
        <div>
            <div>
                <input type="text" placeholder="agregar nuevo todo" value={list.title} />
                <button onClick={handleAddTask}>agregar</button>
            </div>
            <ul>
                {list.map((task) => (
                    <Task key={task.id} title={task.title} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;