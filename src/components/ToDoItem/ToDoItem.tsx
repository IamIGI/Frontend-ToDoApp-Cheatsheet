import { ToDoDataInterface } from 'data/data';
import './ToDoItem.css';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { AppDispatch, store } from 'app/store';
import { addToDo, deleteToDo, refreshTodoList } from 'features/toDo/toDoSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface ToDoItemProps {
    item: ToDoDataInterface;
    handleToDoData: (data: ToDoDataInterface) => void;
    onOpen: () => void;
}

const ToDoItem = ({ item, handleToDoData, onOpen }: ToDoItemProps) => {
    const dispatchStore = useDispatch();

    const [deleteItem, setDeleteItem] = useState<boolean>(false);

    function assignData() {
        handleToDoData(item);
        onOpen();
    }

    useEffect(() => {
        if (deleteItem) {
            store.dispatch(deleteToDo(item._id)).then(() => {
                dispatchStore(refreshTodoList());
            });
            setDeleteItem(false);
        }
    }, [deleteItem]);

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
                <div className="toDoItemContainer__right__buttons" onClick={() => setDeleteItem(true)}>
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
