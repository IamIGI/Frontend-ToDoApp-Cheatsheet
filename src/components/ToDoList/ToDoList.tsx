import { toDoData } from 'data/data';
import './ToDoList.css';
import ToDoItem from 'components/ToDoItem/ToDoItem';

const ToDoList = () => {
    return (
        <div className="toDoListContainer">
            {toDoData.map((item) => (
                <ToDoItem item={item} key={item._id} />
            ))}
        </div>
    );
};

export default ToDoList;
