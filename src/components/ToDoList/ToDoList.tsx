import { ToDoDataInterface, ToDoDataMock } from 'data/data';
import './ToDoList.css';
import ToDoItem from 'components/ToDoItem/ToDoItem';
import Modal from 'components/Modal/Modal';
import PopUpWindow from 'components/PopUpWindow/PopUpWindow';
import { useState, useEffect } from 'react';
import { store } from 'app/store';
import { fetchToDoList, getToDoList, getToDoStatus, isRefreshToDoList } from 'features/toDo/toDoSlice';
import { useSelector } from 'react-redux/es/exports';

const ToDoList = () => {
    const refresh = useSelector(isRefreshToDoList);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [editToDoData, setEditToDoData] = useState<ToDoDataInterface>(ToDoDataMock);

    useEffect(() => {
        store.dispatch(fetchToDoList());
        console.log('odswiez liste');
    }, [refresh]);

    function onOpen() {
        setIsOpen(true);
    }

    function onClose() {
        setIsOpen(false);
    }

    function handleToDoData(data: ToDoDataInterface) {
        setEditToDoData(data);
    }

    const toDoStatus = useSelector(getToDoStatus);
    const toDoData = useSelector(getToDoList);

    return (
        <div className="toDoListContainer">
            {toDoStatus === 'loading' ? (
                <>
                    <p>Ładowanie</p>
                    {console.log('Loadowanie')}
                </>
            ) : toDoStatus === 'succeeded' ? (
                <>
                    {console.log('Swiezy obejct ' + toDoStatus)}
                    {toDoData.map((item) => (
                        <ToDoItem item={item} key={item._id} handleToDoData={handleToDoData} onOpen={onOpen} />
                    ))}
                </>
            ) : (
                toDoStatus === 'failed' && <p>Cos poszlo nie tak</p>
            )}

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <PopUpWindow onClose={onClose} toDoData={editToDoData} />
            </Modal>
        </div>
    );
};

export default ToDoList;
