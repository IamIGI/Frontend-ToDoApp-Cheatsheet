import { ToDoDataInterface } from 'data/data';
import './ToDoItem.css';

interface ToDoItemProps {
    item: ToDoDataInterface;
}

const ToDoItem = ({ item }: ToDoItemProps) => {
    return (
        <div className="toDoItemContainer">
            <div className="toDoItemContainer__left">
                <p>{item.userName}</p>
                <p>{item.title}</p>
                <p>{item.date}</p>
            </div>
            <div className="toDoItemContainer__right">
                <div className="toDoItemContainer__right__buttons"></div>
                <div className="toDoItemContainer__right__buttons"></div>
            </div>
        </div>
    );
};

export default ToDoItem;
