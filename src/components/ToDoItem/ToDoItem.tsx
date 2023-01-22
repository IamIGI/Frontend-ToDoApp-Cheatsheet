import { ToDoDataInterface } from 'data/data';
import './ToDoItem.css';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

interface ToDoItemProps {
    item: ToDoDataInterface;
    handleToDoData: (data: ToDoDataInterface) => void;
    onOpen: () => void;
}

const ToDoItem = ({ item, handleToDoData, onOpen }: ToDoItemProps) => {
    function assignData() {
        handleToDoData(item);
        onOpen();
    }

    return (
        <div className="toDoItemContainer">
            <div className="toDoItemContainer__left">
                <h3>{item.userName}</h3>
                <p>{item.title}</p>
                <p>
                    <span>{item.date}</span>
                </p>
            </div>
            <div className="toDoItemContainer__right">
                <div className="toDoItemContainer__right__buttons">
                    <AiOutlineDelete />
                </div>
                <div className="toDoItemContainer__right__buttons" onClick={() => assignData()}>
                    <AiOutlineEdit />
                </div>
            </div>
        </div>
    );
};

export default ToDoItem;
