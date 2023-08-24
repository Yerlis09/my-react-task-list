export const TaskList = () => {
    return (
        <form>
            <input
                type='text'
                className='input-add'
                name='description'
                placeholder='Add your new todo'
            />
            <button className='btn-add' type='submit'>
                Agregar
            </button>
        </form>
    );
};