import { ToDoDataInterface } from 'data/data';
import React, { useState, SyntheticEvent } from 'react';
import './PopUpWindow.css';

interface PopUpWindowProps {
    createItem?: boolean;
    toDoData?: ToDoDataInterface;
    onClose: () => void;
}

const PopUpWindow = ({ createItem = false, toDoData, onClose }: PopUpWindowProps) => {
    const [input, setInput] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (content && (input || !createItem)) {
            console.log(toDoData?._id);
            console.log('hello');
            onClose();
            return;
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
