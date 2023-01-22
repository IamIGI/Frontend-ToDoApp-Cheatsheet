import { store } from 'app/store';
import { ToDoDataInterface } from 'data/data';
import { AddToDoInterface, EditToDoInterface } from 'features/toDo/toDoInterfaces';
import { addToDo, editToDo, refreshTodoList } from 'features/toDo/toDoSlice';
import { useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import './PopUpWindow.css';

interface PopUpWindowProps {
    createItem?: boolean;
    toDoData?: ToDoDataInterface;
    onClose: () => void;
}

const PopUpWindow = ({ createItem = false, toDoData, onClose }: PopUpWindowProps) => {
    const dispatchStore = useDispatch();
    const [input, setInput] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (content && (input || !createItem)) {
            if (createItem) {
                const addToDo_object: AddToDoInterface = {
                    userName: input,
                    title: content,
                };
                store.dispatch(addToDo(addToDo_object)).then(() => {
                    dispatchStore(refreshTodoList());
                });
            } else {
                const editToDo_object: EditToDoInterface = {
                    id: toDoData?._id as string,
                    title: content,
                };
                store.dispatch(editToDo(editToDo_object)).then(() => {
                    dispatchStore(refreshTodoList());
                });
            }

            onClose();
        }

        return;
    };

    return (
        <div className="PopUpWindow">
            <form onSubmit={handleSubmit}>
                <div className="PopUpWindow__userName">
                    {createItem ? (
                        <div className="PopUpWindow__userName__relative">
                            <input value={input} onChange={(e) => setInput(e.target.value)} />
                            <div>Użytkownik</div>
                        </div>
                    ) : (
                        <h2>{toDoData?.userName}</h2>
                    )}
                </div>
                <div className="PopUpWindow__content">
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                    <div>Tytuł</div>
                </div>
                <button type="submit" className="PopUpWindow__button">
                    Zapisz
                </button>
            </form>
        </div>
    );
};

export default PopUpWindow;
