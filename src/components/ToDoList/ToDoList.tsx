import { toDoData as toDoDataStatic, ToDoDataInterface } from 'data/data';
import './ToDoList.css';
import ToDoItem from 'components/ToDoItem/ToDoItem';
import Modal from 'components/Modal/Modal';
import PopUpWindow from 'components/PopUpWindow/PopUpWindow';
import { useState } from 'react';

const ToDoDataMock = {
    _id: '',
    userName: '',
    title: '',
    date: '',
};

const ToDoList = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [toDoData, setToDoData] = useState<ToDoDataInterface>(ToDoDataMock);

    function onOpen() {
        setIsOpen(true);
    }

    function onClose() {
        setIsOpen(false);
    }

    function handleToDoData(data: ToDoDataInterface) {
        setToDoData(data);
    }

    return (
        <div className="toDoListContainer">
            {toDoDataStatic.map((item) => (
                <ToDoItem item={item} key={item._id} handleToDoData={handleToDoData} onOpen={onOpen} />
            ))}
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <PopUpWindow onClose={onClose} toDoData={toDoData} />
            </Modal>
        </div>
    );
};

export default ToDoList;
