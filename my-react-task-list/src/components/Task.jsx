export default function Task(props) { // recibimos por parametros las tareas como propiedad
    const { title } = props;

    //Esta función va a responder cada vez que den click en el check
    const handleClickCheck = () => {
        console.log(`Check: ${title}`);
    };

    return (
        <div>
            <li>
                <input type="checkbox" onClick={handleClickCheck} />
                <span>{title}</span>
            </li>
        </div>
    );
}